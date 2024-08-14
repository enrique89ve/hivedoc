import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Community",
      items: [
        {
          title: "Discord",
          href: "https://bit.ly/discordragnarok",
          description: "Join our Discord group.",
          external: true,
        },
        {
          title: "X (@ragnarok_hive)",
          href: "https://twitter.com/ragnarok_hive",
          description: "Follow me to get the latest updates and news.",
          external: true,
        },
        {
          title: "Telegram",
          href: "https://t.me/ragnarok_hive",
          description: "Join our Discord group.!",
          external: true,
        },
        {
          title: "Source Code",
          href: "https://github.com/Ragnaroknfthive/Ragnarok-Card-",
          description:
            "Ragnarok is an open source game where you can collaborate",
          external: true,
        },
      ],
    },
  ],

  links: [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Hive",
      href: "https://hive.io",
    },
  ],
};
