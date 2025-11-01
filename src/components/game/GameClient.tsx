"use client";

import { useGame } from "@/contexts/GameContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import StatusBar from "./StatusBar";
import LoadingIndicator from "./LoadingIndicator";
import { generateCrypticProphecy } from "@/ai/flows/generate-cryptic-prophecy";
import { useToast } from "@/hooks/use-toast";
import type { Choice } from "@/lib/game/types";

export default function GameClient() {
  const { gameState, currentScene, handleChoice, isLoading, setLoading, setProphecy } = useGame();
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

    if (choice.action === 'generateProphecy') {
      setLoading(true);
      try {
        const result = await generateCrypticProphecy({
          scrollDescription: 'An ancient iron scroll, covered in faint, swirling etchings that seem to shift when not directly observed.',
          playerContext: 'In the dusty town archives, the player is holding the newly discovered Iron Scroll, sensing its latent power.'
        });
        setProphecy(result.prophecy);
        handleChoice(choice);
      } catch (error) {
        console.error("Error generating prophecy:", error);
        toast({
          title: "Error",
          description: "The arcane energies are unstable. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    } else {
      handleChoice(choice);
    }
  };


  const sceneImage = PlaceHolderImages.find(img => img.id === currentScene.image);
  const textContent = typeof currentScene.text === 'function' ? currentScene.text(gameState) : currentScene.text;

  return (
    <div className="w-full flex flex-col items-center">
      <StatusBar />
      <Card className="w-full max-w-4xl shadow-lg border-border/30">
        {sceneImage && (
          <div className="relative aspect-video w-full">
            <Image
              src={sceneImage.imageUrl}
              alt={currentScene.title}
              fill
              className="object-cover rounded-t-lg"
              data-ai-hint={sceneImage.imageHint}
              priority
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        )}
        <CardHeader className={sceneImage ? "absolute bottom-0 text-white" : ""}>
          <CardTitle className="font-headline text-3xl md:text-4xl">{currentScene.title}</CardTitle>
        </CardHeader>
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
                return (
                  <Button
                    key={index}
                    onClick={() => onChoiceClick(choice)}
                    className="w-full transition-all duration-300 transform hover:scale-105"
                    variant={choice.variant || (choice.nextScene === 'start' ? 'destructive' : 'default')}
                    disabled={disabled}
                    aria-disabled={disabled}
                  >
                    {choice.text}
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
