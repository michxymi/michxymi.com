"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  success: boolean;
  error: string | null;
};

async function submitForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const formspreeEndpoint = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`;

  if (!process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID) {
    return {
      success: false,
      error: "Form's broken. And not in a way you can fix. This one's on me.",
    };
  }

  try {
    const res = await fetch(formspreeEndpoint, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      return { success: true, error: null };
    }
    return {
      success: false,
      error:
        "Something broke. Try again. If it persists, the irony of a contact form preventing contact is not lost on me.",
    };
  } catch {
    return {
      success: false,
      error: "Message didn't send. Try again. The internet is having a moment.",
    };
  }
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitForm, {
    success: false,
    error: null,
  });

  if (state.success) {
    return (
      <Card className="border-green-500/20 bg-green-500/10">
        <CardContent className="pt-6">
          <p className="font-display text-green-500 text-sm">
            Got it. I&apos;ll be in touch. Assuming the internet continues to
            function.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display">Send a Message</CardTitle>
        <CardDescription>
          Form&apos;s below. I&apos;ll get back to you. Unless you&apos;re
          trying to sell me crypto - in which case, I won&apos;t.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div>
            <label className="mb-2 block font-display text-sm" htmlFor="name">
              Name
            </label>
            <Input
              disabled={isPending}
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="mb-2 block font-display text-sm" htmlFor="email">
              Email
            </label>
            <Input
              disabled={isPending}
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>
          <div>
            <label
              className="mb-2 block font-display text-sm"
              htmlFor="message"
            >
              Message
            </label>
            <Textarea
              disabled={isPending}
              id="message"
              name="message"
              placeholder="Your message..."
              required
              rows={5}
            />
          </div>
          <Button className="font-display" disabled={isPending} type="submit">
            {isPending ? "Sending..." : "Send Message"}
          </Button>
          <p className="text-muted-foreground text-xs">
            By submitting, you agree to the{" "}
            <Link
              className="underline hover:text-primary"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            .
          </p>
          {state.error && (
            <p className="text-destructive text-sm">{state.error}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
