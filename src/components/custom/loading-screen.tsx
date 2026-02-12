"use client";

import { cn } from "@/lib/utils";
import { useLoadedState } from "@/providers/loading-state-provider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const quoteRef = useRef<HTMLDivElement>(null!);
  const buttonRef = useRef<HTMLButtonElement>(null!);
  const pathname = usePathname();
  const { isLoaded: isLoading, setIsLoaded: setIsLoading } = useLoadedState();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      quoteRef.current,
      {
        backgroundPosition: "0% 100%",
      },
      {
        backgroundPosition: "100% 0%",
        duration: 1.5,
        ease: "steps(29)",
      },
      "+=0.5",
    );
    tl.to(buttonRef.current, {
      opacity: 1,
      duration: 1,
      pointerEvents: "auto",
    });
  });

  return (
    <div
      className={cn({
        "max-h-dvh overflow-hidden": isLoading && pathname === "/",
      })}
    >
      {pathname === "/" && (
        <div
          className={cn(
            "fixed inset-0 z-99999 flex h-dvh flex-col items-center justify-center bg-black backdrop-blur-2xl transition-opacity duration-500",
            {
              "pointer-events-none opacity-0": !isLoading,
            },
          )}
        >
          <div
            ref={quoteRef}
            className="aspect-773/161 w-[calc(53vw*4*0.4)] max-w-193.25 -translate-y-1/4 bg-[url('/imgs/quote-sequence.png')] bg-size-[auto_100%] bg-no-repeat"
          />
          <button
            ref={buttonRef}
            onClick={() => {
              setIsLoading(false);
              window.dispatchEvent(new CustomEvent("play-background-video"));
            }}
            className="pointer-events-none fixed bottom-[45%] z-99998 flex cursor-pointer items-center justify-center font-['Times_New_Roman',serif] text-sm opacity-0 md:text-lg lg:text-2xl"
          >
            Bam vao day de tiep tuc
          </button>
        </div>
      )}
      {children}
    </div>
  );
}
