import React from "react";
import { cn } from "@/lib/utils";

interface MusicVisualizerProps {
  className?: string;
  isPlaying?: boolean;
  bars?: number;
}

export const MusicVisualizer: React.FC<MusicVisualizerProps> = ({
  className,
  isPlaying = false,
  bars = 5,
}) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 bg-gradient-primary rounded-full transition-all duration-300",
            isPlaying ? "animate-pulse-slow" : "opacity-30",
            "h-4"
          )}
          style={{
            animationDelay: `${i * 100}ms`,
            height: isPlaying ? `${Math.random() * 20 + 10}px` : "4px",
          }}
        />
      ))}
    </div>
  );
};