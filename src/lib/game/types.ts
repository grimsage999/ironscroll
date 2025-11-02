export interface GameState {
  currentSceneId: string;
  townFavor: number;
  piperInsight: number;
  inventory: string[];
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
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

export interface ImagePlaceholder {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export interface Scene {
  id: string;
  title: string;
  text: string | ((state: GameState) => string);
  image?: string;
  choices: Choice[];
  ending?: boolean;
}
