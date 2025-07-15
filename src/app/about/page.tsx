"use client";
import Link from "next/link";
import "../work/test.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import foto from "../../assets/alda.jpeg";
import Image from "next/image";
export default function AboutPage() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timeout);
  }, []);
  const MotionImage = motion(Image);

  // VARIANTES DE ANIMACIÓN
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textVariants: any = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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
            <div className="nav-left">
              <div className="nav-left-item">
                <Link href="/" className="nav-left-link is-pink">
                  HOME
                </Link>
              </div>
              <div className="nav-line is-pink"></div>
              <div className="nav-left-item nav-copyright">
                <div className="copyright">©/2025</div>
              </div>
            </div>

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
                      I'm Lauren. A designer, maker and problem solver. <br />
                    </span>
                    <br />
                    The cusp of art and technology has always fascinated me and
                    I've never been afraid to just jump in and give it a go,
                    whether it's Paint, Photoshop, Sketch&nbsp;or CSS. I’ve been
                    designing with computers since the day I first opened
                    Microsoft Paint. <br />
                    <br />
                    Fast forward to 2023 and I’ve tried it all, from Digital
                    Campaign Design and Flash Actionscript to Web Design,
                    Animation, HTML/CSS, No-Code Web Development, Product Design
                    and Product Management. Everything I have done, small or
                    big, has been a vital stepping stone for where I am today.
                    <br />
                    <br />
                    What excites me most about being a Product Designer is being
                    able to design and create things that have purpose and solve
                    real problems. It goes beyond designing buttons and websites
                    and involves having a passion for designing experiences and
                    solutions that help people, whether it's helping them make
                    better videos, market themselves online, or buy something
                    online. Leaning into customer insight and understanding
                    their needs, finding the right problems to solve, delivering
                    solutions as quickly as possible, learning from those and
                    then iterating and improving that value over time is the key
                    to great product design.
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
                    This resonates so deeply with me because I have no desire to
                    make pretty things just for the sake of it. Some people love
                    that!&nbsp;But it's not for me. I only want to make, design
                    or build ideas and products that are real, that matter and
                    have an impact in the world.
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
                    href="https://cdn.prod.website-files.com/5343bca08039b78d170002c4/620953e18255891c95514868_My%20CV.pdf"
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
