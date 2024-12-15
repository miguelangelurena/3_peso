import { ChevronsDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Logo from "../vectors/logo";
import { useSteps } from "./hooks/useSteps";
import { useAppStore } from "./stores/useAppStore";

const Video = ({ onLoaded }: { onLoaded: () => void }) => (
  <video
    className="absolute -z-10 h-full w-full object-cover"
    muted
    autoPlay
    loop
    disablePictureInPicture
    playsInline
    onLoadedData={onLoaded}
    preload="metadata"
  >
    <source src="/bg-video.webm" type="video/webm" />
    <p>Your browser does not support the video tag.</p>
  </video>
);

const ScrollIndicator = () => (
  <a
    href="#about"
    className="absolute bottom-4 animate-bounce"
    title="Scroll down"
  >
    <ChevronsDown size="48" className="text-black" />
  </a>
);

const HeroContent = ({
  steps,
  videoLoaded,
}: {
  steps: number;
  videoLoaded: boolean;
}) => {
  if (steps === 0) {
    return (
      <Logo
        width="290"
        height="200"
        initial={{ scale: 1, className: "animate-ping" }}
        animate={{
          scale: [1, 1, 1.5, 1, 1.5],
          rotate: [0, 0, 0, 0, 10],
          y: [0, 0, 0, 0, -200],
          opacity: [0, 1, 1, 1, 0],
          className: [""],
        }}
        transition={{ ease: "easeInOut", duration: 2 }}
      />
    );
  }

  if (steps > 0 && !videoLoaded) {
    return (
      <div className="text-center text-black">
        <motion.p
          className="font-cursive text-4xl font-bold md:text-6xl"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Llevando
        </motion.p>
        <motion.p
          className="animate-pulse font-outline text-6xl font-bold uppercase md:text-8xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          La Chercha
        </motion.p>
        <motion.p
          className="text-2xl md:text-4xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          A otro Level
        </motion.p>
      </div>
    );
  }

  return null;
};

export const HeroVideo = () => {
  const steps = useSteps();
  const { heroVideoLoaded, setHeroVideoLoaded } = useAppStore();

  return (
    <section
      className="zdv-hero relative h-[75vh] max-h-[2600px] sm:h-[100vh]"
      id="hero"
    >
      {steps === 2 && (
        <div className="relative flex h-[75vh] max-h-[2600px] shrink-0 flex-col items-center justify-center text-white transition-all sm:h-[100vh]">
          <Video onLoaded={() => setHeroVideoLoaded(true)} />
          <ScrollIndicator />
        </div>
      )}

      <motion.div
        className="absolute left-0 top-0 grid h-full w-full place-content-center transition-colors"
        key="logo"
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        initial={{ backgroundColor: "black" }}
        animate={{
          backgroundColor: steps === 0 ? "black" : "white",
          opacity: steps === 2 && heroVideoLoaded ? 0 : 1,
          display: steps === 2 && heroVideoLoaded ? "none" : "grid",
        }}
      >
        <AnimatePresence>
          <HeroContent steps={steps} videoLoaded={heroVideoLoaded} />
        </AnimatePresence>
      </motion.div>
      {/* Tailwind CSS JIT */}
      <span className="hidden animate-ping" />
    </section>
  );
};
