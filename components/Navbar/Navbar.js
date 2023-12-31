import { motion, useScroll, useSpring } from "framer-motion";
export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      {/* <motion.nav className="flex items-center justify-between py-6 px-16 fixed w-full top-0 left-0">
        <div>
          
        </div>
        <ul className="flex text-white gap-8 items-center text-2xl">
          <li className="underline-hover cursor-pointer">Experience</li>
          <li className="cursor-pointer underline-hover">Skills</li>
          <li className="cursor-pointer underline-hover">Contact</li>
        </ul>
      </motion.nav> */}
    </>
  );
};

export default Navbar;
