export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string;
  accent_color: number;
  global_name: string;
  avatar_decoration_data: Avatardecorationdata;
  collectibles: Collectibles;
  display_name_styles: Displaynamestyles;
  banner_color: string;
  clan: Clan;
  primary_guild: Clan;
}

interface Clan {
  identity_guild_id: string;
  identity_enabled: boolean;
  tag: string;
  badge: string;
}

interface Displaynamestyles {
  font_id: number;
  effect_id: number;
  colors: number[];
}

interface Collectibles {
  nameplate: Nameplate;
}

interface Nameplate {
  sku_id: string;
  asset: string;
  label: string;
  palette: string;
}

interface Avatardecorationdata {
  asset: string;
  sku_id: string;
  expires_at: null;
}
