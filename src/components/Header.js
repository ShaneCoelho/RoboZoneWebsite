import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Header = ({ text }) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <motion.h1
          ref={ref}
          initial={{ opacity: 0 }} // Initial position (off-screen to the left)
          animate={{ opacity: inView ? 1 : 0 }} // Target position (move to the center)
          transition={{ type: "spring", stiffness: 50 }}
          class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mt-12 text-4xl text-center font-extrabold leading-none tracking-tight  md:text-3xl lg:text-5xl "
        >
          {text}
        </motion.h1>
      )}
    </InView>
  );
};

export default Header;
