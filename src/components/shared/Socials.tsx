import { socials } from "@/constants";
import Link from "next/link";

export default function Socials({
  iconStyle,
  containerStyle,
}: {
  iconStyle: string;
  containerStyle: string;
}) {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyle}>
          <item.icon />
        </Link>
      ))}
    </div>
  );
}
