"use client";

import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/features/navigation/components/page-header";
import { SOCIAL_LINKS } from "@/lib/social-links";

function SocialLink({ link }: { link: (typeof SOCIAL_LINKS)[number] }) {
  return (
    <Link
      className="group flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/30"
      href={link.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
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
