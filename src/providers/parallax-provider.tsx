"use client";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

export default function ParallaxProvider({ children }: PropsWithChildren) {
  const [videoUrl, setVideoUrl] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const randomizeVideoBackground = () => {
    const videoLinks = [
      "https://q03t3sf9vv.ufs.sh/f/D7j0WhSILnBstqNTUAQ1ncmjoQx62GBqOhrP0Rl4C3HLMgeI",
      "https://q03t3sf9vv.ufs.sh/f/D7j0WhSILnBseVDOzf1LT3ywCItFdzWvk9U6NZrb1JSqiVx7",
    ];
    const randomIndex = Math.floor(Math.random() * videoLinks.length);
    setVideoUrl(videoLinks[randomIndex]);
  };

  useEffect(() => {
    randomizeVideoBackground();
  }, [videoUrl]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Common breakpoint for mobile
    };

    // Check initially
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const handlePlay = () => {
      const video = videoRef.current;
      if (!video) return;
      video.play().catch(() => {});
    };

    window.addEventListener("play-background-video", handlePlay);
    return () =>
      window.removeEventListener("play-background-video", handlePlay);
  }, []);

  useEffect(() => {
    const handlePlay = () => {
      const video = videoRef.current;
      if (!video) return;
      video.muted = video.muted ? false : true; // Toggle mute state
    };

    window.addEventListener("toggle-background-sound", handlePlay);
    return () =>
      window.removeEventListener("toggle-background-sound", handlePlay);
  }, []);

  if (!videoUrl) {
    return null;
  }

  // For mobile devices, render without parallax
  if (isMobile) {
    return (
      <div className="relative top-0 flex min-h-screen flex-col items-center justify-center rounded-lg">
        {children}
        <div className="fixed top-0 -z-10 size-full scale-110">
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            loop
            className="size-full object-cover object-center opacity-50"
          />
        </div>
      </div>
    );
  }

  // For desktop, keep the parallax effect
  return (
    <MouseParallaxContainer
      globalFactorX={0.02}
      globalFactorY={0.02}
      className="relative top-0 flex min-h-screen flex-col items-center justify-center rounded-lg"
    >
      <>{children}</>
      <MouseParallaxChild
        inverted
        factorX={0.7}
        factorY={0.8}
        className="fixed top-0 -z-10 size-full scale-110"
      >
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          className="size-full object-cover object-center opacity-0 transition-all duration-500"
          onLoadedData={(e) => {
            e.currentTarget.classList.replace("opacity-0", "opacity-50");
          }}
        />
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}
