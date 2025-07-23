"use client";
import { AnimatePresence, motion } from "framer-motion";
import useAnimating from "../hooks/useAnimating";
import "../main.css";
import NavBarLeft from "@/components/navBar/left";

export default function Home() {
  const { isAnimating, containerVariants, textVariants } = useAnimating();

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
                  <div className="content">
                    <motion.div
                      className="header-mask"
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                    >
                      <motion.h1
                        className="header header-large align-left"
                        variants={textVariants}
                      >
                        Hello.
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
                        >
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Veniam hic sequi corporis, excepturi
                          consequuntur quas nemo quisquam exercitationem dolorem
                          iure eum. Assumenda, non porro perspiciatis harum
                          necessitatibus veniam optio illo!
                          <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Aliquam eos at fugiat dolorum corporis qui
                          accusantium ipsam velit nostrum neque sapiente eius
                          vitae, consequatur possimus? Nemo possimus
                          voluptatibus modi dolor!
                        </motion.p>
                      </div>
                    </motion.div>
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
