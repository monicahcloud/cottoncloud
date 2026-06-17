import Link from "next/link";

const navLinks = ["Home", "About", "Services", "Properties", "FAQ", "Contact"];

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 pt-2 text-[20px] font-semibold uppercase tracking-[0.12em] text-[#061B3F] lg:flex xl:gap-10">
      {navLinks.map((link) => (
        <Link
          key={link}
          href={link === "Home" ? "/" : `#${link.toLowerCase()}`}
          className="relative transition hover:text-[#1D64B7]">
          {link}

          {link === "Home" && (
            <span className="absolute -bottom-3 left-0 h-[2px] w-full bg-[#1D64B7]" />
          )}
        </Link>
      ))}
    </nav>
  );
}

export { navLinks };
