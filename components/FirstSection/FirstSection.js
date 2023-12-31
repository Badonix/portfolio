import { Navbar } from "../Navbar";
import { motion } from "framer-motion";
import { useRef } from "react";
export const FirstSection = () => {
  const ref = useRef(null);
  return (
    <div className="absolute w-screen">
      <Navbar />
      <div className="">
        <div
          ref={ref}
          className="hello flex justify-center items-center h-screen flex-col gap-8"
        >
          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              delay: 1,
              type: "spring",
              stiffness: 200,
            }}
            initial={{ x: -3000, opacity: 0 }}
            className="font-rubik text-white text-8xl"
          >
            Hello there
          </motion.h1>
          <motion.a
            href="#second-section"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            type="button"
            transition={{
              delay: 2,
              duration: 2,
              type: "spring",
              stiffness: 100,
            }}
            class="inline-block font-rubik rounded-full border-2 border-neutral-50 px-6  py-2  text-2xl uppercase leading-normal text-neutral-50   hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            Start
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;