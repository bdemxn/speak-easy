"use client";

import { Label } from "~/components/ui/label";
import { chatProvider } from "../context/chat-provider";
import { Textarea } from "~/components/ui/textarea";

export function OutputChat() {
  const translation = chatProvider((state) => state.translation);

  return (
    <div className="w-full">
      <Label>Output</Label>
      <Textarea value={translation} className="text-pretty resize-none" readOnly/>
    </div>
  );
}
