// Example: app/api/users/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  // Logic to fetch data from a database or external API
  const response = await axios.get(
    `https://discord.com/api/v10/users/${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}`,
    {
      headers: {
        Authorization: `Bot ${process.env.NEXT_PUBLIC_DISCORD_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );
  const users = response.data;
  return NextResponse.json(users);
}
