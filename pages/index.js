import { motion } from "framer-motion";
import { Navbar } from "@/components";
import useParallax from "@/hooks/useParallax";
import { useRef } from "react";
import { SecondSection } from "@/components/SecondSection";
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
      <SecondSection />
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
