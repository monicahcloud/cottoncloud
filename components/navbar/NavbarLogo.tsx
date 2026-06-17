import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link href="/" className="shrink-0">
      <Image
        src="/cottoncloudlogo.png"
        alt="Cotton Cloud Hospitality"
        width={560}
        height={260}
        priority
        className="h-auto w-[240px] md:w-[360px] xl:w-[430px]"
      />
    </Link>
  );
}
