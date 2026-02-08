import Hero from "@/components/HeroNew";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import FeaturedPainting from "@/components/FeaturedPainting";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import HeroNew from "@/components/HeroNew";

export default function Home() {
  return (
    <div>
      <HeroNew />
      {/* <Hero /> */}
      <FeaturedPainting />
      <About />
      <CTA />
      {/* <Gallery /> */}
      <Contact />
    </div>
  );
}