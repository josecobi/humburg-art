import Hero from "@/components/HeroNew";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import FeaturedPainting from "@/components/FeaturedPainting";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <HeroVideoBackground />
      <Hero />
      <FeaturedPainting />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}