'use server';

/**
 * @fileOverview Generates a cryptic prophecy about the Iron Scroll using GenAI and Google Search Grounding.
 *
 * - generateCrypticProphecy - A function that triggers the prophecy generation.
 * - GenerateCrypticProphecyInput - The input type for the generateCrypticProphecy function.
 * - GenerateCrypticProphecyOutput - The return type for the generateCrypticProphecy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCrypticProphecyInputSchema = z.object({
  scrollDescription: z
    .string()
    .describe('Description of the Iron Scroll including its visible markings and current condition.'),
  playerContext: z
    .string()
    .describe('The current situation of the player, including their location and recent actions.'),
});
export type GenerateCrypticProphecyInput = z.infer<typeof GenerateCrypticProphecyInputSchema>;

const GenerateCrypticProphecyOutputSchema = z.object({
  prophecy: z.string().describe('A cryptic prophecy related to the Iron Scroll.'),
});
export type GenerateCrypticProphecyOutput = z.infer<typeof GenerateCrypticProphecyOutputSchema>;

export async function generateCrypticProphecy(input: GenerateCrypticProphecyInput): Promise<GenerateCrypticProphecyOutput> {
  return generateCrypticProphecyFlow(input);
}

const prophecyPrompt = ai.definePrompt({
  name: 'prophecyPrompt',
  input: {schema: GenerateCrypticProphecyInputSchema},
  output: {schema: GenerateCrypticProphecyOutputSchema},
  prompt: `You are an oracle interpreting the Iron Scroll.  The player seeks a prophecy related to the scroll.

  The scroll is described as follows: {{{scrollDescription}}}

  The player is currently: {{{playerContext}}}

  Generate a short, cryptic prophecy (under 50 words) providing a clue about the Iron Scroll's significance or the player's path forward.  Focus on symbolic language and avoid being too direct.
`,
});

const generateCrypticProphecyFlow = ai.defineFlow(
  {
    name: 'generateCrypticProphecyFlow',
    inputSchema: GenerateCrypticProphecyInputSchema,
    outputSchema: GenerateCrypticProphecyOutputSchema,
  },
  async input => {
    const {output} = await prophecyPrompt(input);
    return output!;
  }
);
