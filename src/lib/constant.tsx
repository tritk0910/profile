import Image from "next/image";
import { ReactNode } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaSteam,
} from "react-icons/fa";

export const isAvailableForWork = true;

export const format = "MM/DD/YY, hh:mm:ss A";

export const musicUrl = {
  url: "https://open.spotify.com/track/5VnaOLeK1lKfULuNwet8ck?si=2315fe083148438c",
  thumbnail: "/imgs/spotify.jpg",
  title: "Flowers",
  artist: "In Love With A Ghost",
  year: "2017",
};

export const avatarUrl = "/imgs/avatar.jpg";

export const techStacks: { [key: string]: string[] }[] = [
  {
    Frontend: [
      "React",
      "React Native",
      "Next.js",
      "Shadcn",
      "Tanstack Query",
      "Tailwindcss",
      "Framer-Motion",
      "GSAP",
      "ThreeJS",
      "Spline",
    ],
    Backend: [".NET", "C#", "SignalR"],
    "Db & Services": [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Prisma ORM",
      "Postman",
      "Cloudinary",
    ],
    Others: [
      "Photoshop",
      "After Effects",
      "Premier Pro",
      "Cinema 4D",
      "Octane",
      "Blender",
    ],
  },
];

export const tools: {
  label: string;
  src: string;
  expandable?: boolean;
  invertable?: boolean;
  color?: string;
}[] = [
  { label: "VSCode", src: "/imgs/vscode.svg" },
  { label: "v0", src: "/imgs/v0.webp", invertable: true },
  {
    label: "Github Copilot",
    src: "/imgs/github-copilot.svg",
    invertable: true,
  },
  { label: "Chatgpt", src: "/imgs/chatgpt.svg", invertable: true },
  {
    label: "Postman",
    src: "/imgs/postman.png",
    expandable: true,
  },
  { label: "Docker", src: "/imgs/docker.png" },
  // { label: "Figma", src: "/imgs/figma.svg", invertable: true },
];

export const links: {
  content: ReactNode;
  label: string;
}[] = [
  {
    content: (
      <a
        href="https://github.com/tritk0910"
        target="_blank"
        className="flex size-full items-center justify-center"
      >
        <FaGithub className="size-7" />
      </a>
    ),
    label: "Gít húb",
  },
  {
    content: (
      <a
        href="https://steamcommunity.com/profiles/76561198436687391"
        target="_blank"
        className="flex size-full items-center justify-center"
      >
        <FaSteam className="size-7" />
      </a>
    ),
    label: "Hơi nước",
  },
  {
    content: (
      <a
        href="mailto:khaitri074@gmail.com"
        className="flex size-full items-center justify-center"
      >
        <Image
          width={200}
          height={200}
          alt="gmail"
          src="/imgs/gmail.svg"
          className="size-7"
        />
      </a>
    ),
    label: "gờ meo",
  },
  {
    content: (
      <a
        href="https://discord.com/channels/@me/339694815568723979"
        className="flex size-full items-center justify-center"
        target="_blank"
      >
        <div className="flex size-full items-center justify-center">
          <FaDiscord className="size-8" />
        </div>
      </a>
    ),
    label: "đít kọt",
  },
  {
    content: (
      <a
        href="https://www.facebook.com/khaitri074"
        target="_blank"
        className="flex size-full items-center justify-center"
      >
        <FaFacebook className="size-7 rounded-lg" />
      </a>
    ),
    label: "F",
  },
  {
    content: (
      <a
        href="https://www.instagram.com/kheitri074/"
        target="_blank"
        className="flex size-full items-center justify-center"
      >
        <FaInstagram className="size-7" />
      </a>
    ),
    label: "Instagram",
  },
];
