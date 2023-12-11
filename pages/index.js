import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components";
export default function Home() {
  var parallax;
  useEffect(() => {
    let background = document.querySelector(".lines-cont");

    parallax = (e) => {
      let x = (e.clientX * 5) / 400;
      let y = (e.clientY * 5) / 400;
      if (background) {
        background.style.backgroundPositionX = `${x}px`;
        background.style.backgroundPositionY = `${y}px`;
      }
    };
  });
  return (
    <>
      <motion.div
        initial={{ x: 0, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 3, type: "spring", stiffness: 100 }}
        className="cont"
      >
        <div onMouseMove={(e) => parallax(e)} className="lines-cont"></div>
      </motion.div>
      <motion.div className="absolute w-screen">
        <Navbar />
      </motion.div>
    </>
  );
}
