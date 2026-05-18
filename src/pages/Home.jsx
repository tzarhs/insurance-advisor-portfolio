import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="h-6 bg-gradient-to-b from-black to-white" />
      <About />
      <div className="h-6 bg-gradient-to-b from-white to-neutral-800" />
      <Services />
    </>
  );
}
