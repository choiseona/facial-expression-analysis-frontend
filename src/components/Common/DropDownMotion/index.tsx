import { motion, AnimationControls } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  controls: AnimationControls;
  initial: "open" | "closed";
}
function DropDownMotion({ children, controls, initial }: Props) {
  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };
  return (
    <Motion
      initial={initial}
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
      style={{
        overflow: "hidden",
      }}
    >
      {children}
    </Motion>
  );
}

const Motion = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export default DropDownMotion;
