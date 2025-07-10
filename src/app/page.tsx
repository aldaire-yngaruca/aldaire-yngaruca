"use client";
import Link from "next/link";
import "./projects/test.css";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
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
      <Head>
        <title>Aldaire Yngaruca </title>
        <meta property="og:title" content="Aldaire Yngaruca – Portfolio" />
        <meta property="og:description" content="Portafolio de Taxugarita" />
        <meta
          property="og:image"
          content="https://aldaire.netlify.app/stickers/alda.jpeg"
        />
        <meta property="og:url" content="https://aldaire.netlify.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
            <div className="container-page">
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
                        Aldaire Yngaruca
                      </motion.h1>

                      <div className="description-mask">
                        <motion.p
                          className="description"
                          variants={textVariants}
                        >
                          This is a showcase of my best work in a variety of
                          fields including Graphic and Web Design, No-Code
                          Development, Product Design and Product Management.
                        </motion.p>
                      </div>

                      <div className="description-mask">
                        <motion.p
                          className="description"
                          variants={textVariants}
                        >
                          This is a showcase of my best work in a variety of
                          fields including Graphic and Web Design, No-Code
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="section-right">
                  <div className="nav">
                    <div className="nav-item">
                      {["WORK", "ABOUT", "CONTACT"].map((item, index) => (
                        <motion.div
                          key={item}
                          variants={textVariants}
                          initial="hidden"
                          animate="show"
                          transition={{ delay: 0.5 + index * 0.2 }}
                        >
                          <Link
                            href={`/${item.toLowerCase()}`}
                            className="linky font-bold"
                          >
                            {item}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </>
  );
}
