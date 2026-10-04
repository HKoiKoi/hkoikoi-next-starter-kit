import { Rocket } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold">
      <Rocket className="size-5" />
      <span>{siteConfig.name}</span>
    </Link>
  );
}
