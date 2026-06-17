import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061B3F] text-white">
      {/* Glow */}
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#2B75C9]/20 blur-3xl" />

      <div className="relative mx-auto max-w-8xl px-20 py-20">
        <div className="grid gap-16 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Image
              src="/cottoncloudlogo.png"
              alt="Cotton Cloud Hospitality"
              width={260}
              height={120}
              className="w-[220px]"
            />

            <p className="mt-6 max-w-sm leading-8 text-white/70">
              Exceptional property management and elevated guest experiences
              designed to maximize your investment and create unforgettable
              stays.
            </p>
            {/* 
            <p className="mt-8 text-4xl font-light italic text-[#8DB8E8]">
              Just Imagine.
            </p> */}
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.3em] text-[#8DB8E8]">
              Explore
            </h3>

            <div className="space-y-4">
              <Link
                href="/"
                className="block text-white/70 transition hover:text-white">
                Home
              </Link>

              <Link
                href="#about"
                className="block text-white/70 transition hover:text-white">
                About
              </Link>

              <Link
                href="#services"
                className="block text-white/70 transition hover:text-white">
                Services
              </Link>

              <Link
                href="#properties"
                className="block text-white/70 transition hover:text-white">
                Properties
              </Link>

              <Link
                href="#contact"
                className="block text-white/70 transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.3em] text-[#8DB8E8]">
              Services
            </h3>

            <div className="space-y-4 text-white/70">
              <p>Vacation Rental Management</p>
              <p>Guest Experience</p>
              <p>Cleaning Coordination</p>
              <p>Maintenance Oversight</p>
              <p>Revenue Optimization</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.3em] text-[#8DB8E8]">
              Contact
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 text-[#8DB8E8]" />
                <span className="text-white/70">(242) 000-0000</span>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 text-[#8DB8E8]" />
                <span className="text-white/70">
                  hello@cottoncloudhospitality.com
                </span>
              </div>

              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 text-[#8DB8E8]" />
                <span className="text-white/70">Nassau, Bahamas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
            <p>
              © {new Date().getFullYear()} Cotton Cloud Hospitality. All Rights
              Reserved.
            </p>
            <Link href="vitanovadesigns.cloud" target="-blank">
              Designed by VitaNova Designs & Marketing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
