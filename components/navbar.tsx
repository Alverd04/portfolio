"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/expertise", label: "Expertise" },
  ];

  return (
    <nav className="hidden sm:block absolute top-0 right-0 p-4 border-l border-b border-border rounded-bl-lg rounded-tr-3xl bg-[#282828] w-1/2 2xl:w-1/3">
      <ul className="flex items-center justify-between px-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`font-bold cursor-pointer hover:text-green-400 ${
                mounted && pathname === item.href
                  ? "text-green-400"
                  : "text-white"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
