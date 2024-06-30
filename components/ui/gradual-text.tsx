import { AnimatePresence, motion } from "framer-motion";

type GradualSpacingProps = {
  text: string;
};

export function GradualSpacing({ text }: GradualSpacingProps) {
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex space-x-1 justify-center">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={gradual}
            transition={{ duration: 0.25, delay: i * 0.025 }}
            className="text-center font-display font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
