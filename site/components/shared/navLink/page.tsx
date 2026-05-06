"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Link href={href} passHref>
      <h3
        className={`text-base leading-4 w-36 my-auto text-center screen1420:w-28 screen1180:w-[84px] screen900:text-xl  screen900:text-right screen900:w-fit ${
          isActive
            ? `${
                theme === "light" ? "text-[#844DB4]" : "text-[#7A60FF]"
              } font-bold rounded-full`
            : ""
        } cursor-pointer`}
      >
        {children}
      </h3>
    </Link>
  );
};

export default NavLink;
