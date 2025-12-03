import type { Metadata } from "next";

const description =
  "Get in touch for collaboration, questions, or just to say hello.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  openGraph: {
    title: "Contact",
    description,
  },
  twitter: {
    title: "Contact",
    description,
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
