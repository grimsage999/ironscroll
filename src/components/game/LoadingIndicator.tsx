import { Loader } from 'lucide-react';

export default function LoadingIndicator() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-8">
      <Loader className="h-8 w-8 animate-spin text-primary" />
      <p className="text-muted-foreground italic">The ether churns with whispers...</p>
    </div>
  );
}
