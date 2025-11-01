"use client";

import React, { createContext, useState, useContext, ReactNode, useCallback } from "react";
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
  setProphecy: (prophecy: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [isLoading, setLoading] = useState(false);

  const handleChoice = useCallback((choice: Choice) => {
    setGameState((prevState) => {
      // Reset to initial state if the choice leads to the start
      if (choice.nextScene === 'start') {
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
  }, []);

  const setProphecy = (prophecy: string) => {
    setGameState(prev => ({ ...prev, prophecy }));
  };
  
  const currentScene = story[gameState.currentSceneId];

  return (
    <GameContext.Provider value={{ gameState, currentScene, handleChoice, isLoading, setLoading, setProphecy }}>
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
