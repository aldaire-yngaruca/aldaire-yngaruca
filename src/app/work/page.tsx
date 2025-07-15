"use client";
import "./test.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timeout);
  }, []);

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
      transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] }, // reemplaza aquí
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <section className="container-page">
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
              <div className="wrapper w-clearfix">
                <div className="section-left">
                  <div className="content content-main">
                    <motion.div
                      className="header-mask"
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                    >
                      <motion.h1
                        className="header swipe-up"
                        variants={textVariants}
                      >
                        Work
                      </motion.h1>
                    </motion.div>
                    <motion.div
                      className="header-mask"
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                    >
                      <div className="description-mask">
                        <motion.p
                          className="description "
                          variants={textVariants}
                        >
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur est, nam ratione suscipit amet,
                          accusantium nobis, nisi ut facere asperiores natus
                          quia fugit expedita similique libero at cumque enim
                          quam?
                          <br />
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="section-right section-long">
                  <div className="nav">
                    <div className="nav-item">
                      {[
                        "Globant",
                        "Fabrik",
                        "WePayU",
                        "BrainRed",
                        "Rodo",
                        "SEBAS",
                      ].map((item, index) => (
                        <div key={index} className="nav-link-wrapper">
                          <motion.div
                            key={item}
                            variants={textVariants}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.5 + index * 0.2 }}
                          >
                            <Link
                              href={`/${item.toLowerCase()}`}
                              className="nav-link is-pink font-bold"
                            >
                              {item}
                            </Link>
                            <div className="nav-sub">
                              <div className="role">- Web UI Developer</div>
                              <div className="badge w-condition-invisible">
                                NEW
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </main>
    </>
  );
}
