
import type { Scene } from "@/lib/game/types";

export const story: Record<string, Scene> = {
  start: {
    id: "start",
    title: "The Shadow of the Piper",
    image: "hamelin-square",
    text: "The town of Hamelin is suffocating. A pall of unnatural silence hangs over the gothic architecture, a quiet that feels older and deeper than the recent disappearances. Children's toys lie abandoned in the cobbled streets. The children are gone, lured away by the Piper's melody, and a creeping dread, familiar to the town's oldest families, has taken root. You, a traveler with a knack for the forgotten and the arcane, have arrived in this desperate place. What is your first move?",
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
    text: "The tavern is a pit of hushed despair, thick with the sour smell of stale ale. An old man in the corner, his face a roadmap of worries, mutters into his cup. 'It's the Whispering Plague come again,' he rasps. 'Same as a generation ago. The music comes, and the wicked are culled. The Piper... he's no man. He's a reckoning.' He talks of an 'Iron Scroll' the Mayor keeps locked away, a relic from the first founding that holds the town's 'true name' and its only protection.",
    choices: [
      {
        text: "Trust the old man. Go to the archives.",
        effects: { piperInsight: 1, inventoryAdd: ["Iron Scroll Rumor"] },
        nextScene: "archives_approach",
      },
      {
        text: "Dismiss it as superstitious rambling and go to the town square.",
        nextScene: "town_square_entry",
      },
    ],
  },
  town_square_entry: {
    id: "town_square_entry",
    title: "The Heart of Hamelin",
    image: "hamelin-square",
    text: "You step into the town square, surrounded by timber-framed houses leaning against each other. Mayor Wilhelm is trying to rally the few people present, his face a mask of strained authority. The air is thick with fear and suspicion. A crude 'WANTED' poster is nailed to a nearby post. From here, you can see the bustling market, the solemn church, and the alley leading to the tavern.",
    choices: [
      {
        text: "Approach Mayor Wilhelm.",
        nextScene: "town_square_mayor",
      },
      {
        text: "Examine the wanted poster.",
        nextScene: "town_square_poster",
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
  town_square_poster: {
    id: "town_square_poster",
    title: "Official Decree",
    image: "hamelin-square",
    text: "You tear the poster from the post. It's a crude sketch of a man in flamboyant clothes, a pipe in hand. The text, signed by Mayor Wilhelm, offers a meager reward for the capture of a 'charlatan and kidnapper' known only as The Piper. It makes no mention of magic, plagues, or any strange phenomena, framing the tragedy as a simple, non-magical crime.",
    choices: [
      {
        text: "A simple crime? Seems unlikely. Pocket the poster.",
        effects: { inventoryAdd: ["Wanted Poster"] },
        nextScene: "town_square_entry"
      },
      {
        text: "This is just propaganda. Leave it.",
        nextScene: "town_square_entry"
      }
    ]
  },
  town_square_mayor: {
    id: "town_square_mayor",
    title: "The Mayor's Plea",
    image: "hamelin-square",
    text: "'You're not from Hamelin,' Mayor Wilhelm states, his gaze sharp but desperate. 'Don't listen to the old tales of plagues and reckonings. That's just fear talking. Our children are gone. The Piper... he was a man, a charlatan we refused to pay, and now he's taken his revenge. If you have skills, we need them. What will you do?'",
    choices: [
      {
        text: "Offer your help to the Mayor publicly.",
        effects: { townFavor: 2 },
        nextScene: "mayor_accepts",
      },
      {
        text: "Publicly question his leadership and his version of events.",
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
    text: "The market is unusually quiet. A traveling puppeteer puts on a grim show for an audience of none, his wooden puppets enacting a tale of a demonic Piper stealing naughty children. Nearby, a merchant whispers that a few days before the children vanished, all the rats in town were found dead in the sewers, each with a strange, sweet-smelling herb in its mouth. 'Just like the stories of the Whispering Plague,' she mutters.",
    choices: [
      {
        text: "Watch the puppet show.",
        effects: { piperInsight: 1 },
        nextScene: "market_puppet_show",
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
  market_puppet_show: {
    id: "market_puppet_show",
    title: "The Wooden Piper",
    image: "market-square",
    text: "The puppet show is a grotesque exaggeration, depicting the Piper as a horned devil with a flute that breathes green fire. The children in the story are mischievous brats who get their just deserts. It's a morality play meant to scare and to blame. It tells you more about the town's fear than about the Piper himself. As the show ends, you notice a discarded pouch on the ground.",
    choices: [
      {
        text: "Investigate the pouch.",
        effects: { piperInsight: 1, inventoryAdd: ["Sweet-Smelling Herb"] },
        nextScene: "market_clue",
      },
      {
        text: "The show was useless. Return to the square.",
        nextScene: "town_square_entry",
      },
    ]
  },
  market_clue: {
    id: "market_clue",
    title: "A Fragrant Clue",
    image: "market-square",
    text: "You pick up the small leather pouch. Inside is a dried herb with a sickly sweet scent. It feels significant, a piece of the puzzle you can't yet place. The merchant who told you about the rats now looks at you with fear, noticing what you've found.",
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
    text: "The church is cold and empty, save for a frantic priest. Dust motes dance in the light from the stained-glass windows. On a lectern, a pile of hastily printed pamphlets. 'He sabotaged it!' the priest cries, pointing at the bell tower. 'The Warding Bell! For generations, it has been rung on the Day of Warding to keep the old evils at bay. But he severed the rope with... with his magic. A crystalline shard! The profane melody is a mockery of our most sacred ritual!'",
    choices: [
      {
        text: "Examine the bell tower.",
        effects: { piperInsight: 1, inventoryAdd: ["Crystalline Shard"] },
        nextScene: "church_clue"
      },
      {
        text: "Read one of the pamphlets.",
        nextScene: "church_pamphlet",
      },
      {
        text: "Return to the town square.",
        nextScene: "town_square_entry"
      }
    ]
  },
  church_pamphlet: {
    id: "church_pamphlet",
    title: "A Dire Warning",
    image: "church-interior",
    text: "The pamphlet is titled 'The Whispering Plague: A Sinner's Scourge'. It claims the Piper is a divine punishment for Hamelin's slide into greed and secularism. It calls for fasting and prayer, insisting that only piety can save the town. It ends with a chilling line: 'The Piper's song finds purchase only in the corrupted soul.'",
    choices: [
      {
        text: "This is religious hysteria. Still, keep one.",
        effects: { inventoryAdd: ["Religious Pamphlet"] },
        nextScene: "church",
      },
      {
        text: "Ask the priest about the Day of Warding instead.",
        effects: { piperInsight: 2 },
        nextScene: "church_melody"
      },
    ]
  },
  church_clue: {
    id: "church_clue",
    title: "A Resonant Clue",
    image: "church-interior",
    text: "You climb the dusty steps to the bell tower. Near the severed bell rope, you find a shimmering crystalline shard. It hums faintly in your hand, vibrating at a frequency you can feel in your teeth. This was no ordinary act of vandalism; it was a targeted, ritualistic act.",
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
    text: "You show the humming shard to the priest. His face drains of color. 'That... that is the Piper's magic. He uses them to focus his melody, to make the very stones of Hamelin resonate. He called it the 'resonant heart' of his instrument. He's turning our own town against us.'",
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
    text: "'The Piper's music... it's a ritual,' the priest whispers, his eyes wide. 'It resonates with things that should not be disturbed. I heard it echo from the sewers, a dark counterpoint to the hymns. He was obsessed with the archives, too. Claimed our founding documents held the secret to the town's 'true name.' A blasphemy against Hamelin's history!'",
    choices: [
      {
        text: "The sewers seem important. Go there.",
        nextScene: "sewers_entrance"
      },
      {
        text: "The archives hold the key. I must get in.",
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
    text: "You find a sewer grate slightly ajar in a forgotten, refuse-strewn alley. A foul stench wafts out, mingling with the sickly-sweet scent of the strange herb. You can also hear a faint, rhythmic dripping and something else... a low hum, similar to the shard from the church.",
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
    text: "The sewers are a labyrinth of filth and echoes. You find dozens of dead rats, all clutching the same sweet herb you found in the market. In the central cistern, you find arcane symbols painted on the walls, still glowing faintly. They seem to focus the strange energy you've felt, channeling it through the town's foundations.",
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
    text: "The forest that borders Hamelin is unnaturally silent. You find a series of small, discarded wooden toys, leading a path into the woods. A lone huntsman warns you to turn back. 'That's the Gloomwood,' he says. 'Full of old magic. It sings a song that you can't stop following, especially if you're not right with the world.'",
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
    text: "Your words stir unrest among the small crowd. The Mayor's face hardens. 'We have no time for doubters and rabble-rousers who trade in old wives' tales!' he barks. You've made an enemy of him, and official channels are now closed to you.",
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
            return baseText + "The old man in the tavern said the Mayor had the scroll, but the priest claimed the Piper was after the town's founding documents. The Mayor denies the old stories, but the priest embraces them. Who is telling the truth?";
        }
        if (state.inventory.includes("Iron Scroll Rumor")) {
            return baseText + "The old man in the tavern was convinced the Mayor has the 'Iron Scroll' locked up in here. He seemed to think it was the key to everything.";
        }
        if (state.inventory.includes("Contradictory Scroll Rumor")) {
            return baseText + "The priest seemed certain the Piper was after the town's founding documents to learn its 'true name.' An act he called blasphemy.";
        }
        if (state.townFavor > 0) {
            return baseText + "The Mayor has given you permission to enter. The guards nod as you approach.";
        }
        return baseText + "The doors are locked, and a guard stands watch. You'll need a good reason to get in.";
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
    text: "You wait for nightfall and approach the archives. The guard is gone, but the lock on the heavy oak door is sturdy. How will you get in?",
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
            return "Following the priest's lead, you ignore the official town records and look for older, pre-founding documents. You find a section on previous 'visitations' and a reference to the diary of the town's first priest.";
        }
        return "Inside, the air is thick with the scent of old paper. Following the tavern gossip, you search the Mayor's official records. It's mostly land deeds and tax logs, but you find a hidden compartment containing the diary of a former mayor.";
    },
    choices: [
      {
        text: "Read the diary.",
        nextScene: "archives_diary",
      }
    ],
  },
  archives_diary: {
    id: "archives_diary",
    title: "An Old Account",
    image: "dusty-archives",
    text: "The diary is brittle with age. It describes a nearly identical event from a generation ago—a 'Piper' with a hypnotic melody, and the disappearance of the town's 'sinful'. The writer mentions hiding the town's true protection, an 'Iron Scroll', not in the official records, but within the church, 'under the gaze of the founders,' believing the mayor of his time to be corrupt.",
    choices: [
        {
            text: "The scroll is in the church! Take the diary page.",
            effects: { piperInsight: 3, inventoryAdd: ["Priest's Diary Page"]},
            nextScene: "town_square_entry"
        }
    ]
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
      // Find the Iron Scroll! It's not in the archives.
      if (state.inventory.includes("Priest's Diary Page")) {
          // This is a placeholder for a new scene where the user finds the scroll in the church.
          // For now, let's assume they find it.
          if (!state.inventory.includes("Iron Scroll")) {
            state.inventory.push("Iron Scroll");
          }
      }

      if (state.piperInsight >= 5 && state.townFavor >= 2 && state.inventory.includes("Iron Scroll")) {
        return "With the town's trust, an understanding of the Piper's magic, and the Iron Scroll in hand, you are ready. You have everything you need to face the melody and bring the children home.";
      }
      if (state.piperInsight >= 5 && state.inventory.includes("Iron Scroll")) {
        return "You have pieced together the arcane puzzle and found the Iron Scroll, but the town remains suspicious of you. You must proceed alone, your knowledge your only shield.";
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
        requires: { inventory: ["Iron Scroll"], piperInsight: 5, townFavor: 2 },
        nextScene: "ending_good"
      },
      {
        text: "Use your insight and the scroll to confront the Piper alone.",
        requires: { inventory: ["Iron Scroll"], piperInsight: 5 },
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
    text: "Using the Iron Scroll, you counter the Piper's melody, but without the town's support, the magic is volatile. The spell shatters, freeing the children, but the backlash reveals a terrible truth: the Piper wasn't luring them to their doom, but saving them from a blight festering within Hamelin itself—a sickness the town's founders buried and tried to forget. He offers you a choice: leave with him to fight the true threat, or stay and watch the town slowly rot from within. Hamelin is saved for now, but you are left with a heavy burden of knowledge.",
    choices: [{ text: "Play Again", nextScene: "start" }],
  }
};

    