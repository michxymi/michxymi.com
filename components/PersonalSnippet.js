import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const PersonalSnippet = () => (
  <p className="leading-relaxed mb-4 tracking-tight">
    Hey! I&apos;m <strong>Michael Xymitoulias</strong>
    <em className={inter.className}> (/ksɪˌmiː&apos;tuːliəs/)</em>, a
    <strong> Software Engineer</strong> residing in the vibrant
    <strong> Oxfordshire</strong>.<br />
    <br />
    When I&apos;m not
    <strong> leading teams</strong> and
    <strong> driving technical innovation</strong>, you&apos;ll find me
    exploring the art of culinary delights or embracing the tranquility of the
    Aegean Islands alongside my beautiful wife and daughter.
    <br />
    <br />
    With a <strong>passion for technology</strong> and a knack for
    <strong> problem-solving</strong>, I&apos;m committed to delivering
    <strong> innovative</strong> solutions.
  </p>
);

export default PersonalSnippet;
