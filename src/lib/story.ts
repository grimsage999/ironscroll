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
        nextScene: "town_square",
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
        nextScene: "town_square",
      },
    ],
  },
  town_square: {
    id: "town_square",
    title: "The Heart of Hamelin",
    image: "hamelin-square",
    text: "The town square is sparsely populated. Mayor Wilhelm is trying to rally the few people present, his face a mask of strained authority. He promises a swift resolution, but his eyes betray a deep fear.",
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
    ],
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
    ],
  },
  mayor_rejects: {
    id: "mayor_rejects",
    title: "An Unwelcome Voice",
    text: "Your words stir unrest among the small crowd. The Mayor's face hardens. 'We have no time for doubters and rabble-rousers!' he barks. You've made an enemy of him, and official channels are now closed to you.",
    choices: [
      {
        text: "Try to find your own way.",
        nextScene: "dead_end",
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
        effects: { piperInsight: 1 },
        nextScene: "archives_sneak_fail",
      },
      {
        text: "Attempt to sneak in, using your knowledge of the Piper.",
        requires: { inventory: ["Iron Scroll Rumor"] },
        effects: { piperInsight: 2 },
        nextScene: "archives_search",
      },
      {
        text: "Give up on this lead.",
        nextScene: "dead_end",
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
  prophecy_revealed: {
    id: "prophecy_revealed",
    title: "Whispers of the Scroll",
    text: (state) => `You focus your will, tracing the patterns on the scroll. The air grows cold, and a voice, not your own, echoes in your mind, speaking a cryptic prophecy:\n\n"${state.prophecy}"\n\nThe words hang in the air, heavy with meaning. You now understand a deeper truth about the Piper's power.`,
    choices: [
      {
        text: "Follow the prophecy's guidance.",
        effects: { piperInsight: 3, inventoryAdd: ["Iron Scroll", "Revealed Prophecy"] },
        nextScene: "ending_prophecy",
      },
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
  ending_insight: {
    id: "ending_insight",
    title: "A Glimmer of Hope",
    image: "good-ending",
    ending: true,
    text: "Though you don't grasp its full power, the Iron Scroll provides a crucial piece of the puzzle. You decipher a map hidden in its etchings, leading to the Piper's lair in the nearby mountains. You've given Hamelin a direction, a chance to reclaim its future.",
    choices: [{ text: "Start Over", nextScene: "start" }],
  },
  ending_prophecy: {
    id: "ending_prophecy",
    title: "Echoes of the Future",
    image: "good-ending",
    ending: true,
    text: "The prophecy illuminates the path forward. The Iron Scroll is not a map, but a key—a way to turn the Piper's own magic against him. You now know not only where he is, but how to defeat him. The fate of Hamelin's children rests in your hands, but for the first time, victory seems possible.",
    choices: [{ text: "Start Over", nextScene: "start" }],
  },
};
