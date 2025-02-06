"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileNavbar() {
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
    <nav className="sticky bottom-0 right-0 p-4 border border-border rounded-t-lg bg-[#282828] w-full sm:hidden">
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
