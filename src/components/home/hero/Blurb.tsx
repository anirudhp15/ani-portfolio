"use client";

import React from "react";
import { motion } from "framer-motion";

const Blurb: React.FC = () => {
  return (
    <section className="flex relative z-10 flex-col justify-center items-center px-8 py-24 text-center bg-transparent lg:py-32">
      {/* Left-aligned sentence */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl text-2xl font-light leading-relaxed text-left text-gray-100 sm:text-3xl lg:text-4xl"
      >
        i&apos;m a{" "}
        <span className="font-bold text-indigo-400 drop-shadow-md">
          math/cs student
        </span>
        ,{" "}
        <span className="font-bold text-indigo-400 drop-shadow-md">
          founder
        </span>
        ,{" "}
        <span className="font-bold text-indigo-400 drop-shadow-md">
          full-stack programmer
        </span>
        , and{" "}
        <span className="font-bold text-indigo-400 drop-shadow-md">
          magician
        </span>{" "}
        based in{" "}
        <span className="font-bold text-indigo-400 drop-shadow-md">NYC</span>.
      </motion.p>

      {/* Right-aligned sentence */}
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto mt-8 max-w-4xl text-2xl font-light leading-relaxed text-right text-gray-100 sm:text-3xl lg:text-4xl"
      >
        i&apos;m currently researching{" "}
        <span className="font-bold text-indigo-400 drop-shadow-md">
          probabilistic systems
        </span>{" "}
        and{" "}
        <span className="font-bold text-indigo-400 drop-shadow-md">
          combinatorial auction optimization
        </span>
        .
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="mx-auto mt-8 w-full max-w-4xl text-2xl font-light leading-relaxed text-left text-gray-100 sm:text-3xl lg:text-4xl"
      >
        i also love building{" "}
        <span className="font-bold text-indigo-400 drop-shadow-md">
          apps and websites
        </span>
        .
      </motion.p>
    </section>
  );
};

export default Blurb;
