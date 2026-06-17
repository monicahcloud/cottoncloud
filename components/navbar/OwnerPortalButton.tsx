import Link from "next/link";
import { UserRound } from "lucide-react";

export default function OwnerPortalButton() {
  return (
    <Link
      href="#portal"
      className="hidden items-center gap-2 rounded-full bg-[#082A63] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#0B3B86] lg:inline-flex">
      <UserRound className="h-4 w-4" />
      Owner Portal
    </Link>
  );
}
