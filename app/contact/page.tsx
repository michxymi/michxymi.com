"use client";

import Link from "next/link";
import { useRef } from "react";
import { ContactForm } from "@/features/design-system/components/contact-form";
import { PageHeader } from "@/features/design-system/components/navigation/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/features/design-system/components/ui/card";
import {
  SOCIAL_LINKS,
  type SocialIconHandle,
} from "@/features/design-system/lib/social-links";

function SocialLink({ link }: { link: (typeof SOCIAL_LINKS)[number] }) {
  const iconRef = useRef<SocialIconHandle>(null);

  return (
    <Link
      className="group flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/30"
      href={link.url}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      rel="noopener noreferrer"
      target="_blank"
    >
      <link.icon
        className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary"
        ref={iconRef}
      />
      <div>
        <div className="font-display text-sm">{link.name}</div>
        <div className="text-muted-foreground text-xs">{link.description}</div>
      </div>
    </Link>
  );
}

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        description="You've read this far. Might as well send a message."
        title="Contact"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ContactForm />

        <Card>
          <CardHeader>
            <CardTitle className="font-display">Connect</CardTitle>
            <CardDescription>
              Other ways to find me - if the form felt too formal.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.name} link={link} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
