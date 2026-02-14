"use client";
import { AudioToggle } from "@/components/audio-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { format, links } from "@/lib/constant";
import { DiscordUser } from "@/lib/types";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Status({
  data,
  setIsModalOpen,
}: {
  data: DiscordUser;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().tz("America/New_York").format(format));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center gap-3">
      <div className="relative flex">
        <Image
          src={`https://cdn.discordapp.com/avatars/${data?.id}/${data?.avatar}.png`}
          alt={"avatar"}
          width={120}
          height={120}
          className="size-29.5 rounded-full object-cover object-center"
          onClick={() => setIsModalOpen(true)}
          priority
        />
        {data?.avatar_decoration_data && (
          <Image
            src={`https://cdn.discordapp.com/avatar-decoration-presets/${data?.avatar_decoration_data.asset}.png`}
            alt={"avatar"}
            className="pointer-events-none absolute z-1 w-[116%]! scale-[120%]"
            width={120}
            height={120}
            priority
          />
        )}
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Tooltip delayDuration={0}>
          <div className="relative flex w-full items-center justify-center">
            <TooltipTrigger asChild>
              <span className="font-space w-fit text-3xl font-bold">
                {data.global_name}
              </span>
            </TooltipTrigger>
            <AudioToggle className="absolute! right-0" />
          </div>
          <TooltipContent side="bottom" className="px-5 py-0">
            <p className="font-space text-lg font-extrabold">
              ID: {data.username}
            </p>
          </TooltipContent>
        </Tooltip>
        <p className="text-xl">Làm page này vì ngẫu hứng</p>
      </div>

      <div className="flex">
        <p className="inline-flex items-center gap-1">
          <MapPin />
          New York | <span className="text-lg">{currentTime}</span>
        </p>
      </div>
      <div className="flex gap-2">
        {links.map(({ content, label }, index) => (
          <Tooltip key={index} delayDuration={0}>
            <TooltipTrigger>{content}</TooltipTrigger>
            <TooltipContent side="bottom" className="px-5 py-0">
              <p className="font-space text-lg font-extrabold">{label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
