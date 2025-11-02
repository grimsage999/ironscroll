
"use client";

import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from "react";
import type { GameState, Choice, Scene } from "@/lib/game/types";
import { story } from "@/lib/story";

const initialGameState: GameState = {
  currentSceneId: "start",
  townFavor: 0,
  piperInsight: 0,
  inventory: [],
};

interface GameContextType {
  gameState: GameState;
  currentScene: Scene;
  handleChoice: (choice: Choice) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading, then show the start scene.
    const timer = setTimeout(() => {
        setLoading(false);
    }, 500); // A small delay to ensure everything is ready
    return () => clearTimeout(timer);
  }, []);

  const handleChoice = useCallback((choice: Choice) => {
    setLoading(true);
    setTimeout(() => {
        setGameState((prevState) => {
          // Reset to initial state if the choice leads to the start
          if (choice.nextScene === 'start') {
            return initialGameState;
          }
          
          const nextSceneExists = !!story[choice.nextScene];
          if (!nextSceneExists) {
            console.error(`Error: Scene "${choice.nextScene}" not found. Returning to start.`);
            return initialGameState;
          }

          const newInventory = [...(prevState.inventory || [])];
          choice.effects?.inventoryAdd?.forEach(item => {
            if (!newInventory.includes(item)) {
              newInventory.push(item);
            }
          });
          const finalInventory = newInventory.filter(item => !choice.effects?.inventoryRemove?.includes(item));

          return {
            ...prevState,
            currentSceneId: choice.nextScene,
            townFavor: prevState.townFavor + (choice.effects?.townFavor || 0),
            piperInsight: prevState.piperInsight + (choice.effects?.piperInsight || 0),
            inventory: finalInventory,
          };
        });
        setLoading(false);
    }, 500); // Simulate a network delay for scene transitions
  }, []);
  
  const currentScene = story[gameState.currentSceneId] || story["start"];

  return (
    <GameContext.Provider value={{ gameState, currentScene, handleChoice, isLoading, setLoading }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
