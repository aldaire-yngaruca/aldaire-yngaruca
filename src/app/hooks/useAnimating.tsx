import { useState, useEffect } from "react";

const useAnimating = () => {
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
      transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return {
    isAnimating,
    containerVariants,
    textVariants,
  };
};

export default useAnimating;
