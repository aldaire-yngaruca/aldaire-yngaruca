"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import useAnimating from "../hooks/useAnimating";
import "../main.css";
import { COMPANIES } from "@/constants/companies";
import NavBarLeft from "@/components/navBar/left";

export default function Projects() {
  const { isAnimating, containerVariants, textVariants } = useAnimating();

  return (
    <>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
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
            <section className="container-page">
              <NavBarLeft />
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
                      {COMPANIES.map((item, index) => (
                        <div key={index} className="nav-link-wrapper">
                          <motion.div
                            key={item.id}
                            variants={textVariants}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.5 + index * 0.2 }}
                          >
                            <p className="nav-link is-pink font-bold">
                              {item.name}
                            </p>
                            <div className="nav-sub">
                              <div className="role">- Web UI Developer</div>
                              {item.isNew && (
                                <div className="badge w-condition-invisible">
                                  NEW
                                </div>
                              )}
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
