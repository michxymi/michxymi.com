"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type CopyButtonProps = {
  code: string;
};

export function CopyButton({ code }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    if (typeof window === "undefined" || !navigator.clipboard.writeText) {
      return;
    }

    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const Icon = isCopied ? CheckIcon : CopyIcon;

  return (
    <Button
      className="shrink-0"
      onClick={copyToClipboard}
      size="icon"
      variant="ghost"
    >
      <Icon className="text-muted-foreground" size={14} />
    </Button>
  );
}
