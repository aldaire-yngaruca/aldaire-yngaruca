"use client";
import Link from "next/link";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
import useAnimating from "./hooks/useAnimating";
import { NAVBAR_LIST } from "@/constants/navbarList";
import { useEffect } from "react";
import NavBarLeft from "@/components/navBar/left";

export default function Home() {
  const { isAnimating, containerVariants, textVariants } = useAnimating();

  useEffect(() => {
    // if (typeof window === "undefined") return;

    const handleMouseUp = () => {
      const selectedText = window.getSelection()?.toString().trim();
      if (selectedText) {
        const utterance = new window.SpeechSynthesisUtterance(selectedText);
        utterance.lang = "en-US";
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      }
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            aria-hidden="true"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full bg-[#ece7e1] z-50"
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
              <NavBarLeft />

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
                    </motion.div>
                    <motion.div
                      className="header-mask"
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                    >
                      <div className="description-mask">
                        <motion.p
                          className="description"
                          variants={textVariants}
                          initial="hidden"
                          animate="show"
                        >
                          Software developer with +6 years of experience working
                          in different companies from diverse fields such as
                          e-commerce, fintech, digital agency. Working on my
                          latest projects with React, Vue.js, Next.js using
                          Buefy as CSS framework also developed some REST API
                          with Koa and Express framework.
                        </motion.p>
                      </div>
                      {/* <div className="description-mask">
                        <motion.p
                          className="description"
                          variants={textVariants}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </motion.p>
                      </div> */}
                    </motion.div>
                  </div>
                </div>

                <div className="section-right">
                  <div className="nav">
                    <div className="nav-item">
                      {NAVBAR_LIST.map((item, index) => (
                        <motion.div
                          key={item}
                          variants={textVariants}
                          initial="hidden"
                          animate="show"
                          transition={{ delay: 0.5 + index * 0.2 }}
                        >
                          <Link
                            href={`/${item.toLowerCase()}`}
                            className="nav-link font-bold"
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
