import Link from "next/link";
import Hero from "../components/UI/Hero";

const Home = () => (
  <Hero>
    <h1 className="text-5xl font-bold">Michael Xymitoulias</h1>
    <p className="pt-6">Technical Software Manager</p>
    <Link
      href="https://nanoporetech.com/"
      className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      @Oxford Nanopore Technologies
    </Link>
    <p className="pt-6">Code. Innovate. Lead.</p>
  </Hero>
);

export default Home;
