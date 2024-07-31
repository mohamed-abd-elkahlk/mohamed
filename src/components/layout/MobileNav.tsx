"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { links } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
export default function MobileNav() {
  const path = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-accent text-[32px]" />
      </SheetTrigger>

      <SheetContent className="flex flex-col bg-primary">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold ">
              Luke<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === path && "text-accent border-b-2 border-accent"
              } capitalize font-medium hover:text-accent transition-all text-xl`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
