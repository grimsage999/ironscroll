import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Map } from "lucide-react";

export default function OverworldPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8">
      <Card className="max-w-xl text-center">
        <CardHeader>
          <div className="mx-auto bg-primary/20 text-primary p-3 rounded-full w-fit">
            <Map className="h-10 w-10" />
          </div>
          <CardTitle className="font-headline text-3xl mt-4">Overworld Exploration</CardTitle>
          <CardDescription>
            This is where the world of Hamelin will come alive in a retro, pixel-art style.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            Explore the town, interact with quirky and memorable NPCs, and uncover hidden secrets. Player and character movement will be managed here, creating a classic RPG feel.
          </p>
          <Button asChild>
            <Link href="/">Return to the Story</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
