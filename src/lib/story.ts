import type { Scene } from "@/lib/game/types";

export const story: Record<string, Scene> = {
  start: {
    id: "start",
    title: "The Shadow of the Piper",
    image: "hamelin-square",
    text: "The town of Hamelin is suffocating. A pall of unnatural silence hangs in the air, broken only by the whispers of frightened townsfolk. The children are gone, lured away by the Piper's melody, and a creeping dread has taken root in their absence. You, a traveler with a knack for the forgotten and the arcane, have arrived in this desperate place. What is your first move?",
    choices: [
      {
        text: "Head to the 'Weary Wanderer' tavern for rumors.",
        nextScene: "tavern",
      },
      {
        text: "Go to the town square to gauge the public mood.",
        nextScene: "town_square_entry",
      },
    ],
  },
  tavern: {
    id: "tavern",
    title: "The Weary Wanderer",
    image: "tavern-interior",
    text: "The tavern is a pit of hushed despair. An old man in the corner, nursing his ale, mutters about a strange 'Iron Scroll' the Piper was seen with before he vanished. He claims the mayor has it under lock and key in the town archives. This could be a vital clue.",
    choices: [
      {
        text: "Thank him and head to the archives.",
        effects: { piperInsight: 1, inventoryAdd: ["Iron Scroll Rumor"] },
        nextScene: "archives_approach",
      },
      {
        text: "Dismiss it as drunken rambling and go to the town square.",
        nextScene: "town_square_entry",
      },
    ],
  },
  town_square_entry: {
    id: "town_square_entry",
    title: "The Heart of Hamelin",
    image: "hamelin-square",
    text: "You step into the town square. Mayor Wilhelm is trying to rally the few people present, his face a mask of strained authority. The air is thick with fear and suspicion. From here, you can see the bustling market, the solemn church, and the alley leading to the tavern.",
    choices: [
      {
        text: "Approach Mayor Wilhelm.",
        nextScene: "town_square_mayor",
      },
      {
        text: "Go to the marketplace.",
        nextScene: "market",
      },
       {
        text: "Visit the church.",
        nextScene: "church",
      },
      {
        text: "Explore the outskirts of the forest.",
        nextScene: "forest_outskirts",
      }
    ],
  },
  town_square_mayor: {
    id: "town_square_mayor",
    title: "The Mayor's Plea",
    image: "hamelin-square",
    text: "Mayor Wilhelm notices you observing. His gaze is sharp, but desperate. 'You're not from Hamelin,' he states. 'If you have skills, we need them. Our children are gone. The Piper...' he trails off, shaking his head. 'What will you do?'",
    choices: [
      {
        text: "Offer your help to the Mayor publicly.",
        effects: { townFavor: 2 },
        nextScene: "mayor_accepts",
      },
      {
        text: "Publicly question his leadership.",
        effects: { townFavor: -2 },
        nextScene: "mayor_rejects",
      },
       {
        text: "Remain silent and walk away.",
        nextScene: "town_square_entry",
      },
    ],
  },
  market: {
    id: "market",
    title: "The Silent Market",
    image: "market-square",
    text: "The market is unusually quiet. A merchant whispers that a few days before the children vanished, all the rats in town were found dead in the sewers, each with a strange, sweet-smelling herb in its mouth. You notice a discarded pouch on the ground.",
    choices: [
      {
        text: "Investigate the pouch.",
        effects: { piperInsight: 1, inventoryAdd: ["Sweet-Smelling Herb"] },
        nextScene: "market_clue",
      },
      {
        text: "Ask the merchant about the sewers.",
        nextScene: "sewers_entrance",
      },
      {
        text: "Return to the town square.",
        nextScene: "town_square_entry",
      }
    ]
  },
  market_clue: {
    id: "market_clue",
    title: "A Fragrant Clue",
    image: "market-square",
    text: "You pick up the pouch. Inside is a dried herb with a sickly sweet scent. It feels significant, a piece of the puzzle you can't yet place. The merchant who told you about the rats now looks at you with fear.",
    choices: [
       {
        text: "Head to the sewers to investigate the rats.",
        nextScene: "sewers_entrance",
      },
       {
        text: "Return to the town square.",
        nextScene: "town_square_entry",
      }
    ]
  },
  church: {
    id: "church",
    title: "The House of Silence",
    image: "church-interior",
    text: "The church is empty, save for a frantic priest. He speaks of a 'profane melody' and how the church's sacred bell, meant to ward off evil, was sabotaged. He points to the bell tower, where the rope has been cleanly severed by a strange, crystalline shard left wedged in the wood.",
    choices: [
      {
        text: "Examine the bell tower.",
        effects: { piperInsight: 1, inventoryAdd: ["Crystalline Shard"] },
        nextScene: "church_clue"
      },
      {
        text: "Ask the priest about the 'profane melody'.",
        effects: { piperInsight: 2 },
        nextScene: "church_melody"
      },
      {
        text: "Return to the town square.",
        nextScene: "town_square_entry"
      }
    ]
  },
  church_clue: {
    id: "church_clue",
    title: "A Resonant Clue",
    image: "church-interior",
    text: "You climb to the bell tower and retrieve the crystalline shard. It hums faintly in your hand, vibrating at a frequency you can feel in your teeth. This was no ordinary act of vandalism.",
    choices: [
      {
        text: "The melody must be the key. Question the priest.",
        effects: { piperInsight: 1 },
        nextScene: "church_melody"
      },
      {
        text: "Leave with the shard.",
        nextScene: "town_square_entry"
      }
    ]
  },
  church_melody: {
    id: "church_melody",
    title: "A Profane Tune",
    image: "church-interior",
    text: "'The Piper's music... it wasn't just a song,' the priest whispers, his eyes wide. 'It was a ritual. It resonated with things that should not be disturbed. I heard it echo from the sewers just as much as from the streets.'",
    choices: [
      {
        text: "The sewers seem important. Go there.",
        nextScene: "sewers_entrance"
      },
      {
        text: "Thank the priest and return to the square.",
        nextScene: "town_square_entry"
      }
    ]
  },
  sewers_entrance: {
    id: "sewers_entrance",
    title: "The Gaping Maw",
    image: "sewer-tunnel",
    text: "You find a sewer grate slightly ajar in a forgotten alley. A foul stench wafts out, but you can also hear a faint, rhythmic dripping and something else... a low hum, similar to the shard from the church.",
    choices: [
      {
        text: "Descend into the darkness.",
        effects: { townFavor: -1 },
        nextScene: "sewers_explore"
      },
      {
        text: "Too risky. Return to the town square.",
        nextScene: "town_square_entry"
      }
    ]
  },
  sewers_explore: {
    id: "sewers_explore",
    title: "Below Hamelin",
    image: "sewer-tunnel",
    text: "The sewers are a labyrinth of filth and echoes. You find dozens of dead rats, all clutching the same sweet herb you found in the market. In the central cistern, you find arcane symbols painted on the walls, still glowing faintly. They match the markings on the Crystalline Shard.",
    requires: { inventory: ["Crystalline Shard"] },
    choices: [
      {
        text: "The symbols are a focus. This is about magic.",
        effects: { piperInsight: 3, inventoryAdd: ["Sewer Runes Sketch"] },
        nextScene: "town_square_entry"
      }
    ]
  },
  forest_outskirts: {
    id: "forest_outskirts",
    title: "The Whispering Woods",
    image: "forest-edge",
    text: "The forest that borders Hamelin is unnaturally silent. You find a series of small, discarded wooden toys, leading a path into the woods. A lone huntsman warns you to turn back, speaking of a path that 'sings a song that you can't stop following'.",
    choices: [
      {
        text: "Examine the toys.",
        effects: { piperInsight: 1, inventoryAdd: ["Abandoned Toy"] },
        nextScene: "forest_clue"
      },
      {
        text: "Ask the huntsman about the singing path.",
        nextScene: "forest_path"
      },
      {
        text: "Heed the warning and return to town.",
        nextScene: "town_square_entry"
      }
    ]
  },
  forest_clue: {
    id: "forest_clue",
    title: "A Child's Trail",
    image: "forest-edge",
    text: "You pick up one of the toys, a crudely carved wooden horse. It feels cold to the touch, and for a moment, you think you can hear a faint, childlike giggle on the wind. The trail of toys leads deeper into the oppressive woods.",
    choices: [
      {
        text: "The path sings... talk to the huntsman.",
        nextScene: "forest_path"
      },
      {
        text: "Follow the trail of toys.",
        nextScene: "dead_end_forest"
      }
    ]
  },
  forest_path: {
    id: "forest_path",
    title: "The Singing Path",
    image: "forest-edge",
    text: "'It's not a sound, it's a feeling,' the huntsman says, not meeting your eyes. 'Pulls at your soul. The Piper walked that path, and the forest has held his tune ever since. The children followed it, I'm sure of it.' He points to a barely-visible trail marked by a gnarled, ancient tree.",
    choices: [
      {
        text: "This is the way. You have a direction now.",
        effects: { piperInsight: 2 },
        nextScene: "ending_insight"
      },
      {
        text: "It's too dangerous. Return to the safety of town.",
        nextScene: "town_square_entry"
      }
    ]
  },
  mayor_accepts: {
    id: "mayor_accepts",
    title: "A Fragile Alliance",
    text: "Mayor Wilhelm, desperate for any aid, accepts your offer. 'Anything,' he pleads, 'Anything to bring our children back.' He grants you access to the town's records and archives, hoping you might find a clue his men have missed.",
    choices: [
      {
        text: "Proceed to the archives.",
        nextScene: "archives_approach",
      },
      {
        text: "First, check the rest of the town.",
        nextScene: "town_square_entry",
      }
    ],
  },
  mayor_rejects: {
    id: "mayor_rejects",
    title: "An Unwelcome Voice",
    text: "Your words stir unrest among the small crowd. The Mayor's face hardens. 'We have no time for doubters and rabble-rousers!' he barks. You've made an enemy of him, and official channels are now closed to you.",
    choices: [
      {
        text: "Find your own way. The town can't be trusted.",
        nextScene: "town_square_entry",
      },
    ],
  },
  archives_approach: {
    id: "archives_approach",
    title: "The Town Archives",
    text: "You stand before the heavy oak doors of the town archives. What will you do?",
    choices: [
      {
        text: "Enter with the Mayor's blessing.",
        requires: { townFavor: 1 },
        nextScene: "archives_search",
      },
      {
        text: "Attempt to sneak in at night.",
        requires: { notInventory: ["Iron Scroll Rumor"] },
        effects: { piperInsight: 1, townFavor: -1 },
        nextScene: "archives_sneak_fail",
      },
      {
        text: "Attempt to sneak in, using your knowledge of the Piper.",
        requires: { inventory: ["Iron Scroll Rumor"] },
        effects: { piperInsight: 2 },
        nextScene: "archives_search",
      },
      {
        text: "Give up on this lead and return to the square.",
        nextScene: "town_square_entry",
      },
    ],
  },
  archives_search: {
    id: "archives_search",
    title: "Dust and Secrets",
    image: "dusty-archives",
    text: "Inside, the air is thick with the scent of old paper and forgotten time. After a thorough search, you find it: a heavy, cold scroll of etched iron. It seems ancient, humming with a faint, otherworldly energy.",
    choices: [
      {
        text: "Examine the scroll's mundane markings.",
        effects: { piperInsight: 1, inventoryAdd: ["Iron Scroll"] },
        nextScene: "ending_insight",
      }
    ],
  },
  archives_sneak_fail: {
    id: "archives_sneak_fail",
    title: "Caught!",
    text: "Your attempt to break in is clumsy. A guard patrol finds you, and you're thrown into a cell for the night. You've lost time and the trust of the town.",
    choices: [{ text: "Wait for the morning.", effects: { townFavor: -3 }, nextScene: "dead_end" }],
  },
  dead_end: {
    id: "dead_end",
    title: "A Cold Trail",
    image: "bad-ending",
    ending: true,
    text: "Your leads have run dry. The town remains wrapped in its sorrow, and the children's fate is sealed in silence. You have failed Hamelin. You leave the town a day later, the weight of its quiet despair a heavy cloak upon your shoulders.",
    choices: [{ text: "Start Over", nextScene: "start" }],
  },
  dead_end_forest: {
    id: "dead_end_forest",
    title: "Lost to the Song",
    image: "bad-ending",
    ending: true,
    text: "You follow the trail of toys deep into the woods. The faint music grows stronger, a sweet, cloying melody that muddles your thoughts. You lose your way, wandering in circles, another lost soul claimed by the Piper's unending song.",
    choices: [{ text: "Start Over", nextScene: "start" }],
  },
  ending_insight: {
    id: "ending_insight",
    title: "A Glimmer of Hope",
    image: "good-ending",
    ending: true,
    text: "Though you don't grasp its full power, you have found a crucial piece of the puzzle. You now have a direction, a lead to follow that might take you to the Piper's lair. You've given Hamelin a chance to reclaim its future.",
    choices: [{ text: "Start Over", nextScene: "start" }],
  },
  ending_prophecy: {
    id: "ending_prophecy",
    title: "Echoes of the Future",
    image: "good-ending",
    ending: true,
    text: "The prophecy illuminates the path forward. You understand a deeper truth about the Piper's magic. You now know not only where he might be, but have a clue as to how to defeat him. The fate of Hamelin's children rests in your hands, but for the first time, victory seems possible.",
    choices: [{ text: "Start Over", nextScene: "start" }],
  },
};
