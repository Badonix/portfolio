import { animate, inView, motion, useInView } from "framer-motion";
import { Navbar } from "@/components";
import useParallax from "@/hooks/useParallax";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const ref = useRef(null);
  useParallax();
  return (
    <>
      <motion.div
        initial={{ x: 0, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        // transition={{ duration: 4, type: "spring", stiffness: 200 }}
        className="cont"
      >
        <div className="lines-cont"></div>
      </motion.div>
      <motion.div className="absolute w-screen">
        <Navbar />
        <div className="">
          <div
            ref={ref}
            className="hello flex justify-center items-center h-screen"
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
          </div>
        </div>
      </motion.div>
      <img
        src="/assets/black-cat.gif"
        className="fixed w-24 bottom-0 right-5"
      />
      <img src="/assets/quby.gif" className="fixed w-24 bottom-0 left-5" />
      <motion.img
        src="/assets/running-cat.gif"
        className="fixed w-24 bottom-0 -left-24"
        animate={{ x: "120vw" }}
        transition={{
          duration: 10,
          delay: Math.random() * 5 + 5,
        }}
      />
      <motion.img
        src="/assets/running-cat.gif"
        className="fixed w-24 bottom-0 flip right-24"
        initial={{ right: -100 }}
        animate={{ left: "-110vw" }}
        transition={{
          duration: 15,
          delay: Math.random() * 5 + 20,
        }}
      />
    </>
  );
}
