
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Hamelin's Shadow",
  description: 'A text-based adventure into the heart of a cursed town.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <audio autoPlay loop>
          {/* 8-bit Dungeon by TeknoAXE - Royalty Free */}
          <source src="https://storage.googleapis.com/aai-web-samples/firebase-studio/hamelin-echo/sfx/teknoaxe-8bit-dungeon.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
