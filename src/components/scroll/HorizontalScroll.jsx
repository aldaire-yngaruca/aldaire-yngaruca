// app/page.jsx o donde uses tu scroll
"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      direction: "vertical", // 👈 clave para scroll lateral
      smooth: true,
      lerp: 0.6, // velocidad y suavidad
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className="flex w-[400vw]  overflow-x-auto">
      <section className="w-screen h-screen bg-red-500 flex items-center justify-center text-white text-4xl">
        Sección 1
      </section>
      <section className="w-screen h-screen bg-orange-500 flex items-center justify-center text-white text-4xl">
        Sección 2
      </section>
      <section className="w-screen h-screen bg-yellow-300 flex items-center justify-center text-black text-4xl">
        Sección 3
      </section>
      <section className="w-screen h-screen bg-green-400 flex items-center justify-center text-black text-4xl">
        Sección 4
      </section>
    </div>
  );
}
