import FeaturedPaintingParallax from "@/components/FeaturedPaintingParallax";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import HeroNew from "@/components/HeroNew";

export default function Home() {
  return (
    <div
      className="scroll-smooth"
      style={{
        scrollSnapType: 'y mandatory',
        scrollPaddingTop: '5rem'
      }}
    >
      <HeroNew />
      {/* <Hero /> */}
      {/* <FeaturedPainting /> */}
      {/* Wrapper to control sticky range - section is sticky only within this wrapper */}
      <div style={{ height: '150vh' }}>
        <FeaturedPaintingParallax />
      </div>
      <div style={{ height: '100vh' }}>
        <About />
      </div>
      <div style={{ height: '100vh' }}>
        <CTA />
      </div>
      {/* <Gallery /> */}
      <div style={{ height: '100vh' }}>
        <Contact />
      </div>
    </div>
  );
}