"use client";

import { useActionState } from "react";
import { Button } from "@/modules/design-system/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/modules/design-system/components/ui/card";
import { Input } from "@/modules/design-system/components/ui/input";
import { Textarea } from "@/modules/design-system/components/ui/textarea";

type FormState = {
  success: boolean;
  error: string | null;
};

async function submitForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Replace YOUR_FORM_ID with your actual Formspree form ID
  const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";

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
      error: "Something went wrong. Please try again.",
    };
  } catch {
    return {
      success: false,
      error: "Failed to send message. Please try again.",
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
            Thanks for reaching out! I&apos;ll get back to you soon.
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
          Fill out the form below and I&apos;ll get back to you as soon as
          possible.
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
          {state.error && (
            <p className="text-destructive text-sm">{state.error}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
