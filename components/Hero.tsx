import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-b from-primary-900/70 to-primary-900/30 absolute inset-0 z-10"></div>
        <Image
          src="/hero-video-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          Contemporary Artist
        </h1>
        <p className="text-xl md:text-2xl text-primary-100 mb-8 font-light">
          Exploring the boundaries of modern art
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-primary">
            View Gallery
          </button>
          <button className="btn btn-secondary">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}