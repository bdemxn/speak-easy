"use client";

import Navbar from "~/components/app/navbar";
import { InputChat } from "~/features/chat/components/input-chat";
import { OutputChat } from "~/features/chat/components/output-chat";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <section className="w-[900px] mx-auto mt-10 flex gap-x-2">
        <InputChat />
        <OutputChat />
      </section>
    </main>
  );
}
