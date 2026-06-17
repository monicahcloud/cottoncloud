import NavbarLogo from "./NavbarLogo";
import DesktopNav from "./DesktopNav";
import OwnerPortalButton from "./OwnerPortalButton";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto grid w-full grid-cols-[auto_1fr_auto] items-start px-6 py-6 md:px-30">
        <NavbarLogo />

        <div className="flex justify-center pt-8 xl:pt-10">
          <DesktopNav />
        </div>

        <div className="flex justify-end pt-5 xl:pt-7">
          <OwnerPortalButton />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
