
"use client";

import { useGame } from "@/contexts/GameContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import StatusBar from "./StatusBar";
import LoadingIndicator from "./LoadingIndicator";
import type { Choice } from "@/lib/game/types";
import { useRef } from "react";

export default function GameClient() {
  const { gameState, currentScene, handleChoice, isLoading } = useGame();
  
  const choiceSoundRef = useRef<HTMLAudioElement>(null);
  const discoverySoundRef = useRef<HTMLAudioElement>(null);

  const isChoiceDisabled = (choice: Choice) => {
    const { requires } = choice;
    if (!requires) return false;

    if (requires.townFavor && gameState.townFavor < requires.townFavor) return true;
    if (requires.piperInsight && gameState.piperInsight < requires.piperInsight) return true;
    if (requires.inventory && !requires.inventory.every(item => gameState.inventory.includes(item))) return true;
    if (requires.notInventory && requires.notInventory.some(item => gameState.inventory.includes(item))) return true;

    return false;
  };
  
  const onChoiceClick = async (choice: Choice) => {
    if (isChoiceDisabled(choice)) return;

    if (choice.effects?.piperInsight || choice.effects?.inventoryAdd) {
      discoverySoundRef.current?.play();
    } else {
      choiceSoundRef.current?.play();
    }

    handleChoice(choice);
  };

  const getRequirementText = (choice: Choice) => {
    if (!choice.requires) return null;

    const requirements = [];
    if (choice.requires.townFavor) {
      requirements.push(`Favor: ${choice.requires.townFavor}`);
    }
    if (choice.requires.piperInsight) {
      requirements.push(`Insight: ${choice.requires.piperInsight}`);
    }
    if (choice.requires.inventory) {
      requirements.push(`Needs: ${choice.requires.inventory.join(', ').replace(/_/g, ' ')}`);
    }
     if (choice.requires.notInventory) {
      requirements.push(`Must not have: ${choice.requires.notInventory.join(', ').replace(/_/g, ' ')}`);
    }

    if (requirements.length === 0) return null;

    return `[${requirements.join(' | ')}]`;
  }
  
  const sceneImage = currentScene && currentScene.image ? PlaceHolderImages.find(img => img.id === currentScene.image) : undefined;
  const textContent = currentScene ? (typeof currentScene.text === 'function' ? currentScene.text(gameState) : currentScene.text) : "";

  return (
    <div className="w-full flex flex-col items-center">
       <audio ref={choiceSoundRef} src="https://storage.googleapis.com/aai-web-samples/firebase-studio/hamelin-echo/sfx/8-bit-confirm.wav" preload="auto"></audio>
       <audio ref={discoverySoundRef} src="https://storage.googleapis.com/aai-web-samples/firebase-studio/hamelin-echo/sfx/8-bit-discovery.wav" preload="auto"></audio>
      <StatusBar />
      <Card className="w-full max-w-4xl shadow-lg border-border/30 overflow-hidden bg-black">
        {isLoading || !currentScene ? (
           <div className="relative aspect-video w-full bg-black/50 flex items-center justify-center">
             <LoadingIndicator />
           </div>
        ) : (
          <>
            <div className="relative bg-black">
              {sceneImage?.imageUrl ? (
                <div className="relative aspect-video w-full bg-black/50">
                  <Image
                    src={sceneImage.imageUrl}
                    alt={currentScene.title}
                    fill
                    className="object-cover image-pixelated"
                    data-ai-hint={sceneImage.imageHint}
                    priority
                  />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
              ) : (
                <div className="relative aspect-video w-full bg-black/80"></div>
              )}
               <CardHeader className="absolute bottom-0 text-white">
                <CardTitle className="font-headline text-4xl md:text-5xl">{currentScene.title}</CardTitle>
              </CardHeader>
            </div>
            <CardContent className="p-6 text-lg">
              <div className="prose prose-invert max-w-none text-foreground/90 leading-relaxed">
                {textContent.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  {currentScene.choices.map((choice, index) => {
                    const disabled = isChoiceDisabled(choice);
                    const requirementText = getRequirementText(choice);
                    return (
                      <Button
                        key={index}
                        onClick={() => onChoiceClick(choice)}
                        className="w-full transition-all duration-300 transform hover:scale-105 h-auto py-3 text-lg"
                        variant={choice.variant || (choice.nextScene === 'start' ? 'destructive' : 'default')}
                        disabled={disabled}
                        aria-disabled={disabled}
                      >
                        <div className="flex flex-col">
                          <span>{choice.text}</span>
                          {requirementText && <span className="text-sm opacity-70 font-normal">{requirementText}</span>}
                        </div>
                      </Button>
                    );
                  })}
                </div>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}
