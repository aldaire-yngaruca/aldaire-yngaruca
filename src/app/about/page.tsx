"use client";
import Link from "next/link";
import "../main.css";
import { AnimatePresence, motion } from "framer-motion";
import foto from "../../assets/alda.jpeg";
import Image from "next/image";
import useAnimating from "../hooks/useAnimating";
import NavBarLeft from "@/components/navBar/left";

export default function AboutPage() {
  const { isAnimating, containerVariants, textVariants } = useAnimating();

  const MotionImage = motion(Image);

  return (
    <>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            aria-hidden="true"
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed top-0 left-0 w-full h-full bg-white z-50"
          />
        )}
      </AnimatePresence>

      <main className="font-serif">
        {!isAnimating && (
          <motion.section
            className="container-page"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <NavBarLeft />

            <div className="wrapper">
              <div className="section-left section-long">
                <div className="content">
                  <MotionImage
                    src={foto}
                    alt="Lauren Waller"
                    className="profile-img"
                    width={400}
                    height={500}
                    variants={textVariants}
                  />

                  <motion.div
                    className="header-mask"
                    variants={containerVariants}
                  >
                    <motion.h1
                      className="header header-large align-left"
                      variants={textVariants}
                    >
                      About
                    </motion.h1>
                  </motion.div>

                  <motion.p
                    className="description-static description-long"
                    variants={textVariants}
                  >
                    <span className="quote">
                      I'm Aldaire. A Web UI developer, maker and problem solver.{" "}
                      <br />
                    </span>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae beatae aliquid natus, voluptates maxime maiores
                    cupiditate quas perferendis odit consequatur, ut molestias,
                    consectetur sit. Accusantium eius obcaecati perferendis
                    nesciunt dolores? <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione rerum quis, hic labore quod odio, iure mollitia,
                    velit molestiae aut dicta rem? Quisquam quam consectetur
                    incidunt doloribus. Veniam, qui molestiae!
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae recusandae odio tempora, ad ipsum mollitia quaerat
                    omnis labore qui! Voluptate est ipsum ut corporis eaque
                    commodi quo earum eveniet numquam! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Voluptas amet quos,
                    sapiente necessitatibus laborum pariatur, quis reiciendis
                    provident dolorem earum fugit repellat non sunt aliquam
                    blanditiis commodi. Mollitia, illo neque.
                    <br />
                    <br />
                    This is one of my favourite quotes (by Peter Drucker):
                    <br />
                    <br />
                    <span className="quote">
                      “There is nothing so useless as doing efficiently that
                      which should not be done at all.”
                    </span>
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eius eligendi sequi neque asperiores quia culpa expedita,
                    minima dolores perspiciatis in maxime vel soluta temporibus
                    obcaecati quis dolor eveniet sit sunt?
                    <br />
                    <br />
                    <span className="header">
                      <br />
                      Experience
                    </span>
                    <br />
                    <br />- Degree in Brand Communications
                    <br />- 15 years experience in Digital Design, Web
                    Development, Advertising and Product&nbsp;Development
                    <br />
                    <br />
                    Within those 15 years, I have:
                    <br />‍<br />- 12 years experience in Web Design
                    <br />- 10 years experience in Software Design
                    <br />- 3 years experience in Front-end Web Development{" "}
                    <br />
                    - 5 years experience in Webflow Development
                    <br />- 1 year experience in Framer Development
                    <br />- 4 years experience in Product Management
                    <br />
                    <br /> <br />
                    <span className="header">Skills</span>
                    <br />
                    <br />
                    UI/UX Design / Strategy / Product Management / User Research
                    / Agile Methodologies / Collaboration / Design Sprints /
                    Design Systems / HTML and CSS / CMS Design &amp;
                    Architecture / Webflow Development / Framer Development /
                    Photography / Graphic Design
                    <br />
                    ‍‍
                    <br />
                  </motion.p>

                  <motion.a
                    href="https://aldaire.netlify.app/"
                    target="_blank"
                    className="button w-button"
                    variants={textVariants}
                  >
                    My CV
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </main>
    </>
  );
}
