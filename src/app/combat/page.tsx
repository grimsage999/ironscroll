import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Swords } from "lucide-react";

export default function CombatPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8">
      <Card className="max-w-xl text-center">
        <CardHeader>
          <div className="mx-auto bg-primary/20 text-primary p-3 rounded-full w-fit">
            <Swords className="h-10 w-10" />
          </div>
          <CardTitle className="font-headline text-3xl mt-4">Turn-Based Combat</CardTitle>
          <CardDescription>
            This section will house the pixel-art styled, turn-based combat engine.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            Engage in strategic battles, use items from your inventory, and outmaneuver the strange foes that haunt Hamelin. The visual style will be a throwback to classic retro RPGs.
          </p>
          <Button asChild>
            <Link href="/">Return to the Story</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
