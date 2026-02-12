"use client";
import { DraggableMotion } from "@/components/custom/draggable-motion";
import Status from "@/components/pages/homepage/status";
import { DiscordUser } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { MouseParallaxChild } from "react-parallax-mouse";
// import { useMediaQuery } from "react-responsive";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useSuspenseQuery<DiscordUser>({
    queryKey: ["discordInfo"],
    queryFn: () => fetch("/api/discord").then((res) => res.json()),
  });

  return (
    <div className="relative inset-0 flex h-full flex-col items-center justify-center rounded-lg px-1 py-4 select-none md:py-8">
      <div className="mx-auto size-full gap-2">
        <MouseParallaxChild>
          <DraggableMotion id="status" className="size-full">
            <Status data={data} setIsModalOpen={setIsModalOpen} />
          </DraggableMotion>
        </MouseParallaxChild>
      </div>

      {/* Image Modal Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center bg-black/30 opacity-100 backdrop-blur-xl transition-all",
          { "pointer-events-none opacity-0": !isModalOpen },
        )}
        onClick={() => setIsModalOpen(false)}
      >
        <MouseParallaxChild className="relative max-h-[90vh] max-w-[90vw]">
          <Image
            src={`https://cdn.discordapp.com/avatars/${data?.id}/${data?.avatar}.png?size=512`}
            alt="avatar"
            width={500}
            height={500}
            className="rounded-lg object-cover object-center"
            onClick={(e) => e.stopPropagation()}
          />
        </MouseParallaxChild>
      </div>
    </div>
  );
}
