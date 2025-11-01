"use client";

import { useGame } from "@/contexts/GameContext";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Music, Scroll } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function StatusBar() {
  const { gameState } = useGame();

  return (
    <Card className="w-full max-w-4xl mb-4 bg-card/50 backdrop-blur-sm border-border/30">
      <CardContent className="p-4">
        <div className="flex justify-around items-center text-center">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-2">
                                <Heart className="w-5 h-5 text-destructive" />
                                <span className="font-bold text-lg">{gameState.townFavor}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">Town Favor</p>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Your reputation with the people of Hamelin.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                 <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-2">
                                <Music className="w-5 h-5 text-primary" />
                                <span className="font-bold text-lg">{gameState.piperInsight}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">Piper Insight</p>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Your understanding of the Piper and the arcane.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-2">
                                <Scroll className="w-5 h-5 text-foreground/80" />
                                <span className="font-bold text-lg">{gameState.inventory.length}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">Clues</p>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                    {gameState.inventory.length > 0 ? (
                        <ul>
                            {gameState.inventory.map(item => <li key={item}>{item.replace(/_/g, ' ')}</li>)}
                        </ul>
                    ) : (
                        <p>No clues gathered yet.</p>
                    )}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

        </div>
      </CardContent>
    </Card>
  );
}
