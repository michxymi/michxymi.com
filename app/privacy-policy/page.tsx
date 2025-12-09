import type { Metadata } from "next";
import { Prose } from "@/features/content/components/prose";
import { PageHeader } from "@/features/navigation/components/page-header";

const description =
  "Privacy policy for michxymi.com - how your data is collected and used.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  openGraph: {
    title: "Privacy Policy",
    description,
  },
  twitter: {
    title: "Privacy Policy",
    description,
  },
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <article>
      <PageHeader title="Privacy Policy" />
      <p className="mb-8 text-muted-foreground text-sm">
        Last updated: December 2025
      </p>
      <Prose>
        <h2>Who I Am</h2>
        <p>
          This website, michxymi.com, is operated by Michael Xymitoulias as a
          personal portfolio and blog.
        </p>
        <p>
          For any privacy-related questions, you can contact me through the{" "}
          <a href="/contact">contact form</a> on this website or via the social
          links provided.
        </p>

        <h2>What Data I Collect</h2>
        <p>I collect minimal personal data to operate this website:</p>
        <p>
          <strong>Contact Form Submissions</strong>
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Message content</li>
        </ul>
        <p>
          <strong>Analytics Data (Anonymous)</strong>
        </p>
        <ul>
          <li>Page views and navigation patterns</li>
          <li>Device type and browser information</li>
          <li>Geographic region (country-level)</li>
          <li>Referrer information</li>
        </ul>
        <p>
          This analytics data is collected anonymously and cannot be used to
          identify you personally.
        </p>

        <h2>How I Collect Your Data</h2>
        <p>
          <strong>Directly from you:</strong>
        </p>
        <ul>
          <li>When you submit the contact form</li>
        </ul>
        <p>
          <strong>Automatically:</strong>
        </p>
        <ul>
          <li>
            Through Vercel Analytics and Speed Insights when you browse the
            website
          </li>
        </ul>

        <h2>How I Use Your Data</h2>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Purpose</th>
              <th>Lawful Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contact form data</td>
              <td>To respond to your enquiries</td>
              <td>Legitimate interest / Consent</td>
            </tr>
            <tr>
              <td>Analytics data</td>
              <td>To understand how visitors use the site and improve it</td>
              <td>Legitimate interest</td>
            </tr>
          </tbody>
        </table>
        <p>
          I do not use your data for marketing purposes, and I will never sell
          your personal data.
        </p>

        <h2>Data Sharing</h2>
        <p>Your data may be processed by the following third-party services:</p>
        <p>
          <strong>Formspree</strong> (contact form processor)
        </p>
        <ul>
          <li>Processes contact form submissions</li>
          <li>
            Privacy Policy:{" "}
            <a
              href="https://formspree.io/legal/privacy-policy"
              rel="noopener noreferrer"
              target="_blank"
            >
              formspree.io/legal/privacy-policy
            </a>
          </li>
        </ul>
        <p>
          <strong>Vercel</strong> (hosting and analytics)
        </p>
        <ul>
          <li>Hosts this website and provides analytics</li>
          <li>Privacy-focused, cookie-less analytics</li>
          <li>
            Privacy Policy:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              rel="noopener noreferrer"
              target="_blank"
            >
              vercel.com/legal/privacy-policy
            </a>
          </li>
        </ul>
        <p>I do not share your personal data with any other third parties.</p>

        <h2>Cookies</h2>
        <p>
          This website does not use cookies. Vercel Analytics is designed to be
          privacy-friendly and operates without cookies or tracking scripts that
          follow you across the web.
        </p>

        <h2>Data Retention</h2>
        <ul>
          <li>
            <strong>Contact form submissions:</strong> Retained by Formspree
            according to their data retention policy. I may keep correspondence
            records for as long as necessary to address your enquiry.
          </li>
          <li>
            <strong>Analytics data:</strong> Aggregated and anonymised, retained
            by Vercel according to their policies.
          </li>
        </ul>

        <h2>Your Rights</h2>
        <p>Under UK GDPR, you have the following rights:</p>
        <ul>
          <li>
            <strong>Right of access</strong> - Request a copy of your personal
            data
          </li>
          <li>
            <strong>Right to rectification</strong> - Request correction of
            inaccurate data
          </li>
          <li>
            <strong>Right to erasure</strong> - Request deletion of your data
            (&ldquo;right to be forgotten&rdquo;)
          </li>
          <li>
            <strong>Right to restrict processing</strong> - Request limitation
            of how your data is used
          </li>
          <li>
            <strong>Right to data portability</strong> - Request your data in a
            portable format
          </li>
          <li>
            <strong>Right to object</strong> - Object to processing based on
            legitimate interests
          </li>
          <li>
            <strong>Right to withdraw consent</strong> - Where processing is
            based on consent
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact me through the{" "}
          <a href="/contact">contact form</a> or social links on this website.
        </p>
        <p>
          You also have the right to lodge a complaint with the Information
          Commissioner&apos;s Office (ICO) if you believe your data protection
          rights have been violated:{" "}
          <a
            href="https://ico.org.uk/make-a-complaint/"
            rel="noopener noreferrer"
            target="_blank"
          >
            ico.org.uk/make-a-complaint
          </a>
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          I may update this privacy policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this privacy policy or how your data
          is handled, please contact me through the{" "}
          <a href="/contact">contact form</a> on this website.
        </p>
      </Prose>
    </article>
  );
}
