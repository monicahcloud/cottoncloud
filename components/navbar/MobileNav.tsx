import Image from "next/image";
import Link from "next/link";
import { Menu, UserRound } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "./DesktopNav";

export default function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="rounded-full bg-white/80 p-3 shadow-lg backdrop-blur">
            <Menu className="h-6 w-6 text-[#082A63]" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[88vw] max-w-[360px] border-l border-white/40 bg-gradient-to-b from-white via-[#F3F8FF] to-[#DCEBFA] px-0 py-0 shadow-2xl">
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-[#9CC8F5]/30 blur-3xl" />
            <div className="absolute -left-20 bottom-20 h-56 w-56 rounded-full bg-white/80 blur-3xl" />

            <div className="relative border-b border-blue-100/80 px-7 pb-6 pt-10">
              <Image
                src="/cottoncloudlogo.png"
                alt="Cotton Cloud Hospitality"
                width={220}
                height={100}
                className="h-auto w-[190px]"
              />
            </div>

            <nav className="relative flex flex-1 flex-col px-7 py-8">
              <div className="space-y-3">
                {navLinks.map((link, index) => (
                  <Link
                    key={link}
                    href={link === "Home" ? "/" : `#${link.toLowerCase()}`}
                    className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#061B3F] transition-all hover:border-blue-100 hover:bg-white/70 hover:text-[#1D64B7] hover:shadow-sm">
                    <span>{link}</span>
                    <span className="text-xs font-semibold text-[#8DB8E8]">
                      0{index + 1}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-xl shadow-blue-200/40 backdrop-blur">
                <Link
                  href="#portal"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#082A63] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-300/40 transition hover:bg-[#0B3B86]">
                  <UserRound className="h-4 w-4" />
                  Owner Portal
                </Link>
              </div>

              <div className="mt-auto border-t border-blue-100/80 pt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#2B75C9]">
                  Cotton Cloud Hospitality
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Elevated stays. Exceptional care.
                </p>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
