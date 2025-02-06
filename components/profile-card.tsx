import { Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactInfo } from "./contact-info";

export default function ProfileCard() {
  return (
    <div className="block xl:sticky top-10 w-full  xl:w-96 h-fit p-2 2xl:max-w-80 bg-secondary border-border border rounded-3xl lg:p-8">
      <div className="flex flex-col sm:flex-row xl:flex-col items-center">
        <div className="relative flex items-center gap-4 space-x-2 sm:mb-6 xl:flex-col w-full">
          <div className="relative w-24 h-24 sm:w-48 sm:h-48">
            <Image
              src="/avatar.png"
              alt="Profile picture"
              width={200}
              height={200}
              className="absolute bg-zinc-800 rounded-3xl"
              priority
            />
          </div>
          <div className="flex flex-col items-start lg:items-center">
            <h1 className="text-2xl font-bold text-start text-white mb-1">
              Albert Font
            </h1>
            <p className="text-white text-xs lg:text-sm lg:mb-6 bg-[#2B2B2C] py-1 px-2 rounded-lg truncate">
              Full Stack Web Developer
            </p>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="w-full space-y-4 mb-8">
            <div className="flex items-center space-x-3 text-zinc-300">
              <Mail className="w-5 h-5 text-cyan-500" />
              <span>albert.font.fernandez@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-zinc-300">
              <MapPin className="w-5 h-5 text-cyan-500" />
              <span>Barcelona, SPAIN</span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Link
              href="https://github.com/Alverd04"
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/Alverd04"
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/albert-font-fernandez/"
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <ContactInfo />
      </div>
    </div>
  );
}
