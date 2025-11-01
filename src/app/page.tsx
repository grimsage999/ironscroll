import GameClient from "@/components/game/GameClient";
import { GameProvider } from "@/contexts/GameContext";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <GameProvider>
      <div className="flex flex-col min-h-screen">
        <audio autoPlay loop>
          <source src="/music/medieval-fantasy.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <header className="p-4 border-b border-border/50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="font-headline text-2xl text-primary">Hamelin's Echo</h1>
            <nav className="flex gap-4">
              <Button variant="link" asChild>
                <Link href="/overworld">Overworld</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="/combat">Combat</Link>
              </Button>
            </nav>
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center p-4">
          <GameClient />
        </main>
        <footer className="text-center p-4 text-muted-foreground text-sm">
          <p>An interactive fiction by Firebase Studio.</p>
        </footer>
      </div>
    </GameProvider>
  );
}
