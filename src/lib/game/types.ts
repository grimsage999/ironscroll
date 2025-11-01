import type { PlaceHolderImages } from "@/lib/placeholder-images";

export interface GameState {
  currentSceneId: string;
  townFavor: number;
  piperInsight: number;
  inventory: string[];
  prophecy?: string;
}

export interface Choice {
  text: string;
  requires?: {
    townFavor?: number;
    piperInsight?: number;
    inventory?: string[];
    notInventory?: string[];
  };
  effects?: {
    townFavor?: number;
    piperInsight?: number;
    inventoryAdd?: string[];
    inventoryRemove?: string[];
  };
  nextScene: string;
  action?: 'generateProphecy';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

export interface Scene {
  id: string;
  title: string;
  text: string | ((state: GameState) => string);
  image?: (typeof PlaceHolderImages)[number]['id'];
  choices: Choice[];
  ending?: boolean;
}
