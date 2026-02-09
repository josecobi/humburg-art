import Hero from "@/components/HeroNew";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import FeaturedPainting from "@/components/FeaturedPainting";
import FeaturedPaintingParallax from "@/components/FeaturedPaintingParallax";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import HeroNew from "@/components/HeroNew";

export default function Home() {
  return (
    <div className="scroll-smooth" style={{ scrollSnapType: 'y mandatory', scrollPaddingTop: '0px' }}>
      <HeroNew />
      {/* <Hero /> */}
      {/* <FeaturedPainting /> */}
      {/* Wrapper to control sticky range - section is sticky only within this wrapper */}
      <div style={{ height: '150vh' }}>
        <FeaturedPaintingParallax />
      </div>
      <About />
      <CTA />
      {/* <Gallery /> */}
      <Contact />
    </div>
  );
}