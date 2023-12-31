import { motion } from "framer-motion";
import { Navbar } from "@/components";
import useParallax from "@/hooks/useParallax";
export default function Home() {
  useParallax();
  return (
    <>
      <motion.div
        initial={{ x: 0, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 3, type: "spring", stiffness: 100 }}
        className="cont"
      >
        <div className="lines-cont"></div>
      </motion.div>
      <motion.div className="absolute w-screen">
        <Navbar />
      </motion.div>
    </>
  );
}
