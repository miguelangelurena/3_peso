import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { useAppStore } from "./stores/useAppStore";

type HeaderWrapperProps = PropsWithChildren;

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  const { heroVideoLoaded } = useAppStore();

  return (
    <motion.header
      className="fixed top-0 z-10 w-full border-b border-slate-800 bg-slate-800/25 py-1 backdrop-blur-md transition-all"
      initial={{ y: "-100px" }}
      animate={{ y: heroVideoLoaded ? "0" : undefined }}
      exit={{ y: "-100px" }}
    >
      {children}
    </motion.header>
  );
};
export default HeaderWrapper;
