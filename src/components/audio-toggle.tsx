"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function AudioToggle({ className }: { className?: string }) {
  const [isIndicatorActive, setIsIndicatorActive] = useState(true);

  const toggleAudioIndicator = () => {
    setIsIndicatorActive((prev) => !prev);
    window.dispatchEvent(new CustomEvent("toggle-background-sound"));
  };

  return (
    <div className={cn("relative", className)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleAudioIndicator}
        className="relative gap-1 overflow-hidden"
      >
        {[1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            className={`indicator-line mt-2 bg-zinc-300! ${isIndicatorActive && "active"}`}
            style={{ animationDelay: `${bar * 0.1}s` }}
          />
        ))}
      </Button>
    </div>
  );
}
