import { motion } from "framer-motion";
import useParallax from "@/hooks/useParallax";
import { SecondSection } from "@/components/SecondSection";
import FirstSection from "@/components/FirstSection/FirstSection";
export default function Home() {
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
      <FirstSection />
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
