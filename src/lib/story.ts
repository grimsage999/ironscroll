
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
        text: "Trust the old man. Go to the archives.",
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
        text: "Show the shard to the priest.",
        requires: { inventory: ["Crystalline Shard"] },
        nextScene: "church_shard_reveal"
      },
      {
        text: "Leave with the shard.",
        nextScene: "town_square_entry"
      }
    ]
  },
  church_shard_reveal: {
    id: "church_shard_reveal",
    title: "A Fearful Recognition",
    image: "church-interior",
    text: "You show the humming shard to the priest. His face drains of color. 'That... that is the Piper's magic. He used similar crystals to focus his melody, to make the very stones of Hamelin resonate with his song. He called it the 'resonant heart' of his instrument.'",
    choices: [
      {
        text: "Where did he focus this energy?",
        effects: {piperInsight: 2},
        nextScene: "church_melody"
      },
      {
        text: "Thank him and leave.",
        nextScene: "town_square_entry"
      }
    ]
  },
  church_melody: {
    id: "church_melody",
    title: "A Profane Tune",
    image: "church-interior",
    text: "'The Piper's music... it wasn't just a song,' the priest whispers, his eyes wide. 'It was a ritual. It resonated with things that should not be disturbed. I heard it echo from the sewers just as much as from the streets. He was obsessed with the town archives, too. Claimed the town's founding documents held a secret about its 'true name.' A dangerous blasphemy!'",
    choices: [
      {
        text: "The sewers seem important. Go there.",
        nextScene: "sewers_entrance"
      },
      {
        text: "Contradictory clues. Head to the archives.",
        effects: { inventoryAdd: ["Contradictory Scroll Rumor"]},
        nextScene: "archives_approach"
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
    text: "The sewers are a labyrinth of filth and echoes. You find dozens of dead rats, all clutching the same sweet herb you found in the market. In the central cistern, you find arcane symbols painted on the walls, still glowing faintly. They seem to focus the strange energy you've felt.",
    choices: [
      {
        text: "The symbols match the shard. This is about magic.",
        requires: { inventory: ["Crystalline Shard"] },
        effects: { piperInsight: 3, inventoryAdd: ["Sewer Runes Sketch"] },
        nextScene: "town_square_entry"
      },
      {
        text: "The herb is the key. This is about poison.",
        requires: { inventory: ["Sweet-Smelling Herb"] },
        effects: { piperInsight: 1, inventoryAdd: ["Sewer Rat Observation"] },
        nextScene: "town_square_entry"
      },
      {
        text: "This place is a dead end. Leave.",
        requires: { notInventory: ["Crystalline Shard", "Sweet-Smelling Herb"]},
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
        text: "This is it. The final confrontation awaits.",
        effects: { piperInsight: 2 },
        nextScene: "confrontation"
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
    image: "dusty-archives",
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
    image: "bad-ending",
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
    image: "dusty-archives",
    text: (state) => {
        let baseText = "You stand before the heavy oak doors of the town archives. ";
        if (state.inventory.includes("Iron Scroll Rumor") && state.inventory.includes("Contradictory Scroll Rumor")) {
            return baseText + "The old man in the tavern said the Mayor had the scroll, but the priest claimed the Piper was after the town's founding documents. Who is telling the truth? How will you proceed?";
        }
        if (state.inventory.includes("Iron Scroll Rumor")) {
            return baseText + "The old man in the tavern was convinced the Mayor has the 'Iron Scroll' locked up in here. What will you do?";
        }
        if (state.inventory.includes("Contradictory Scroll Rumor")) {
            return baseText + "The priest seemed certain the Piper was after the town's founding documents to learn its 'true name.' What's your plan?";
        }
        if (state.townFavor > 0) {
            return baseText + "The Mayor has given you permission to enter. The guards nod as you approach.";
        }
        return baseText + "The doors are locked, and a guard stands watch. You'll need a good reason to get inside.";
    },
    choices: [
      {
        text: "Enter with the Mayor's blessing.",
        requires: { townFavor: 1 },
        nextScene: "archives_search",
      },
      {
        text: "Attempt to sneak in at night.",
        effects: { piperInsight: 1, townFavor: -1 },
        nextScene: "archives_sneak_check",
      },
      {
        text: "Bribe the guard.",
        requires: { townFavor: -1 },
        effects: { townFavor: 1 },
        nextScene: "archives_search",
      },
      {
        text: "Give up on this lead and return to the square.",
        nextScene: "town_square_entry",
      },
    ],
  },
   archives_sneak_check: {
    id: "archives_sneak_check",
    title: "Under Cover of Darkness",
    text: "You wait for nightfall and approach the archives. The guard is gone, but the lock is sturdy. How will you get in?",
    image: "dusty-archives",
    choices: [
        {
            text: "Use the Crystalline Shard to resonate with the lock.",
            requires: { inventory: ["Crystalline Shard"]},
            effects: { piperInsight: 2 },
            nextScene: "archives_search",
        },
        {
            text: "Try to pick the lock.",
            nextScene: "archives_sneak_fail"
        }
    ]
  },
  archives_search: {
    id: "archives_search",
    title: "Dust and Secrets",
    image: "dusty-archives",
    text: (state) => {
        if (state.inventory.includes("Contradictory Scroll Rumor")) {
            return "Following the priest's lead, you ignore the official town records and look for older, forgotten documents. You find a section on pre-founding history and a heavy, cold scroll of etched iron. It seems ancient, humming with a faint, otherworldly energy.";
        }
        return "Inside, the air is thick with the scent of old paper and forgotten time. After a thorough search of the official records, you find it: a heavy, cold scroll of etched iron. It seems ancient, humming with a faint, otherworldly energy.";
    },
    choices: [
      {
        text: "Examine the scroll's arcane markings.",
        effects: { piperInsight: 2, inventoryAdd: ["Iron Scroll"] },
        nextScene: "confrontation",
      }
    ],
  },
  archives_sneak_fail: {
    id: "archives_sneak_fail",
    title: "Caught!",
    image: "bad-ending",
    text: "Your attempt to break in is clumsy and loud. A guard patrol rounds the corner, lantern held high. 'Hold it right there, skulker!' one of them shouts. They corner you against the archives door.",
    choices: [
      {
        text: "Try to bribe them.",
        effects: { townFavor: -2 },
        nextScene: "dead_end_arrest"
      },
      {
        text: "Talk your way out of it.",
        requires: { townFavor: 2 },
        effects: { townFavor: -1 },
        nextScene: "archives_escape_grace"
      },
      {
        text: "Use arcane knowledge to create a distraction.",
        requires: { piperInsight: 3 },
        effects: { piperInsight: 1 },
        nextScene: "archives_escape_magic"
      },
    ],
  },
  archives_escape_grace: {
    id: "archives_escape_grace",
    title: "A Glib Tongue",
    image: "hamelin-square",
    text: "You manage to spin a convincing tale about checking security for the mayor. Your reputation precedes you, and they let you off with a stern warning. 'The mayor trusts you,' the guard grumbles, 'Don't make us regret that.' You've avoided the cells, but your goodwill has taken a hit.",
    choices: [{ text: "Best not to press my luck. Return to the square.", nextScene: "town_square_entry" }],
  },
  archives_escape_magic: {
    id: "archives_escape_magic",
    title: "A Flash of Insight",
    image: "hamelin-square",
    text: "You mutter a few strange words, focusing your will on a nearby gas lamp. It flares violently, casting eerie shadows. The guards jump back, startled. In their confusion, you slip away into the darkness. A risky move, but your understanding of the arcane grows.",
    choices: [{ text: "Disappear into the night.", nextScene: "town_square_entry" }],
  },
  dead_end_arrest: {
    id: "dead_end_arrest",
    title: "A Cold Cell",
    image: "bad-ending",
    ending: true,
    text: "Your bribe is seen as an insult. 'Think we can be bought while our children are missing?' the guard spits. You're thrown into a damp cell for the night. By morning, any trust you've built is gone. You are escorted to the edge of town and told never to return. You have failed.",
    choices: [{ text: "Start Over", variant: "destructive", nextScene: "start" }],
  },
  dead_end_trail: {
    id: "dead_end_trail",
    title: "A Cold Trail",
    image: "bad-ending",
    ending: true,
    text: "Your leads have run dry. The town remains wrapped in its sorrow, and the children's fate is sealed in silence. You have failed Hamelin. You leave the town a day later, the weight of its quiet despair a heavy cloak upon your shoulders.",
    choices: [{ text: "Start Over", variant: "destructive", nextScene: "start" }],
  },
  dead_end_forest: {
    id: "dead_end_forest",
    title: "Lost to the Song",
    image: "bad-ending",
    ending: true,
    text: "You follow the trail of toys deep into the woods. The faint music grows stronger, a sweet, cloying melody that muddles your thoughts. You lose your way, wandering in circles, another lost soul claimed by the Piper's unending song.",
    choices: [{ text: "Start Over", variant: "destructive", nextScene: "start" }],
  },
  confrontation: {
    id: "confrontation",
    title: "The Confrontation",
    image: "forest-edge",
    text: (state) => {
      if (state.piperInsight >= 5 && state.townFavor >= 2) {
        return "With the town's trust and the Piper's secrets laid bare, you are ready. You have everything you need to face the melody and bring the children home.";
      }
      if (state.piperInsight >= 5) {
        return "You have pieced together the arcane puzzle, but the town remains suspicious of you. You must proceed alone, your knowledge your only shield.";
      }
      return "You've gathered some clues, but the full picture eludes you. You head towards the forest, hoping for the best, but a sense of unease follows you. Are you truly ready?";
    },
    choices: [
      {
        text: "Face the Piper.",
        nextScene: "ending_final_choice"
      }
    ]
  },
  ending_final_choice: {
    id: "ending_final_choice",
    title: "Face the Piper",
    image: "forest-edge",
    text: "You follow the path into the woods, the Piper's song growing stronger until it's a physical presence. You arrive in a clearing to see the Piper, his back to you, playing his melody to the lost children of Hamelin who dance in a trance. What you do next will decide everything.",
    choices: [
      {
        text: "Use the scroll and the town's hope to break the spell.",
        requires: { piperInsight: 5, townFavor: 2 },
        nextScene: "ending_good"
      },
      {
        text: "Use your insight to understand and confront the Piper alone.",
        requires: { piperInsight: 5 },
        nextScene: "ending_insight"
      },
      {
        text: "Charge in blindly.",
        nextScene: "dead_end_forest"
      }
    ]
  },
  ending_good: {
    id: "ending_good",
    title: "The Dawn of Hamelin",
    image: "good-ending",
    ending: true,
    text: "You counter the Piper's profane melody with the true name of Hamelin, read from the Iron Scroll. Your voice, amplified by the hope of the townsfolk who trusted you, shatters the crystalline resonators on his pipe. The spell breaks. The children stop dancing, confused but safe. The Piper fades like a shadow, banished by the town's unified spirit. You are a hero.",
    choices: [{ text: "Play Again", nextScene: "start" }],
  },

  ending_insight: {
    id: "ending_insight",
    title: "A Terrible Truth",
    image: "good-ending",
    ending: true,
    text: "You understand the Piper's motives—he wasn't luring the children to their doom, but away from a greater blight he believed was coming to Hamelin. You confront him not with force, but with knowledge. Intrigued, he lowers his pipe. He agrees to return the children, but in exchange, you must leave with him, to help him combat the true darkness. Hamelin is saved, but you are lost to its history, another figure of myth. The town never learns the truth.",
    choices: [{ text: "Play Again", nextScene: "start" }],
  }
};

    