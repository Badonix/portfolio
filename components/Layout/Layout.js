import { useEffect, useState } from "react";
import { Loading } from "../Loading";
import { AnimatePresence } from "framer-motion";
const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>
      {children}
    </>
  );
};

export default Layout;
