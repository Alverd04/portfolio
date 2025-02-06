"use client";

import {
  ChevronDown,
  Github,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

export function ContactInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <ChevronDown
        className={`absolute top-6 right-6 h-6 w-6 text-green-500 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="mt-8">
          <div className="w-full mb-8 gap-4">
            <div className="flex items-center space-x-3 text-zinc-300">
              <Mail className="w-5 h-5 text-cyan-500" />
              <span>albert.font.fernandez@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-zinc-300">
              <MapPin className="w-5 h-5 text-cyan-500" />
              <span>Barcelona, SPAIN</span>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <a
              href="https://github.com/Alverd04"
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/Alverd04"
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/albert-font-fernandez/"
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
