"use client";

import { useGame } from "@/contexts/GameContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import StatusBar from "./StatusBar";
import LoadingIndicator from "./LoadingIndicator";
import { useToast } from "@/hooks/use-toast";
import type { Choice } from "@/lib/game/types";

export default function GameClient() {
  const { gameState, currentScene, handleChoice, isLoading, setLoading } = useGame();
  const { toast } = useToast();

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

  const sceneImage = PlaceHolderImages.find(img => img.id === currentScene.image);
  const textContent = typeof currentScene.text === 'function' ? currentScene.text(gameState) : currentScene.text;

  return (
    <div className="w-full flex flex-col items-center">
      <StatusBar />
      <Card className="w-full max-w-4xl shadow-lg border-border/30 overflow-hidden">
        <div className="relative">
          {sceneImage && (
            <div className="relative aspect-video w-full">
              <Image
                src={sceneImage.imageUrl}
                alt={currentScene.title}
                fill
                className="object-cover"
                data-ai-hint={sceneImage.imageHint}
                priority
              />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
          )}
           <CardHeader className={sceneImage ? "absolute bottom-0 text-white" : ""}>
            <CardTitle className="font-headline text-3xl md:text-4xl">{currentScene.title}</CardTitle>
          </CardHeader>
        </div>
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none text-foreground/90 leading-relaxed">
            {textContent.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6">
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              {currentScene.choices.map((choice, index) => {
                const disabled = isChoiceDisabled(choice);
                const requirementText = getRequirementText(choice);
                return (
                  <Button
                    key={index}
                    onClick={() => onChoiceClick(choice)}
                    className="w-full transition-all duration-300 transform hover:scale-105 h-auto py-3"
                    variant={choice.variant || (choice.nextScene === 'start' ? 'destructive' : 'default')}
                    disabled={disabled}
                    aria-disabled={disabled}
                  >
                    <div className="flex flex-col">
                      <span>{choice.text}</span>
                      {requirementText && <span className="text-xs opacity-70 font-normal">{requirementText}</span>}
                    </div>
                  </Button>
                );
              })}
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
