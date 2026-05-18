// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  const video = "/Hero.mp4";
  return (
    <section
      className="relative w-full overflow-hidden min-h-screen"
      id="home"
    >
      {/* Desktop / Tablet video */}
      <video
        className="absolute inset-0 hidden h-full w-full object-cover brightness-75 sm:block"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Mobile video */}
      <video
        className="absolute inset-0 block h-full w-full object-cover brightness-75 sm:hidden"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/hero2.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

      {/* Content area */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 md:px-8">
        {/* yaha Hero ka text / button / etc */}
      </div>
    </section>
  );
};

export default Hero;