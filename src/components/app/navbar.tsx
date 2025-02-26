"use client";

import { AvatarApp } from "./avatar-app";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-200 p-3 flex justify-between items-center">
      <span className="font-semibold">Speak Easy</span>

      <AvatarApp />
    </nav>
  );
}
