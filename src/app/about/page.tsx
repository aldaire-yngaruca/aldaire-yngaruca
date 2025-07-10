// src/app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí | Aladaire Yngaruca",
  description:
    "Conoce más sobre mí, mi experiencia y habilidades como Web UI Developer.",
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Sobre mí</h1>
      <p className="text-lg leading-relaxed mb-4">
        ¡Hola! Soy <strong>Aladaire Yngaruca</strong>, un{" "}
        <strong>Web UI Developer</strong> con más de 6 años de experiencia
        desarrollando interfaces web modernas, accesibles y optimizadas usando
        tecnologías como <strong>JavaScript</strong>, <strong>React</strong> y{" "}
        <strong>TypeScript</strong>.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        A lo largo de mi carrera he trabajado en{" "}
        <strong>agencias digitales</strong>, <strong>startups</strong> y{" "}
        <strong>empresas de e-commerce</strong>, colaborando con equipos
        multidisciplinarios y aplicando metodologías ágiles como{" "}
        <strong>Scrum</strong> y <strong>Kanban</strong>.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        Me apasiona crear experiencias digitales intuitivas y centradas en el
        usuario. Siempre busco mantenerme actualizado con las últimas tendencias
        del desarrollo frontend y compartir conocimientos con la comunidad.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Tecnologías que domino:
      </h2>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>JavaScript (ES6+), TypeScript</li>
        <li>React, Next.js, Tailwind CSS</li>
        <li>HTML5, CSS3, Sass</li>
        <li>Git, GitHub, CI/CD</li>
        <li>Pruebas con Jest y React Testing Library</li>
      </ul>
    </section>
  );
}
