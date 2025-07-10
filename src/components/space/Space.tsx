"use client";

import { motion } from "framer-motion";

export default function SpaceBackground({ children }: any) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Estrellas animadas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="stars" />
        <div className="twinkling" />
      </div>

      {/* Contenido encima del fondo */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
