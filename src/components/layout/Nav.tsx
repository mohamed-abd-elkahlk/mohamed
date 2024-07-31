"use client";
import { links } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const path = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === path && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
