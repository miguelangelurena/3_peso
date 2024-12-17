import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { useAppStore } from "./stores/useAppStore";

type HeaderWrapperProps = PropsWithChildren & {
  headerAnimation?: boolean;
};

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({
  children,
  headerAnimation = true,
}) => {
  const { heroVideoLoaded } = useAppStore();

  return (
    <motion.header
      className="fixed top-0 z-30 w-full border-b border-slate-800 bg-dark/85 px-8 py-1 text-white backdrop-blur-md transition-all"
      initial={headerAnimation ? { y: "-100px" } : undefined}
      animate={
        headerAnimation ? { y: heroVideoLoaded ? "0" : undefined } : undefined
      }
      exit={headerAnimation ? { y: "-100px" } : undefined}
    >
      {children}
    </motion.header>
  );
};
export default HeaderWrapper;
