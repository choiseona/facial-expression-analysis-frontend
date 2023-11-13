import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function FadeFramerMotion({ children }: Props) {
  return (
    <Motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Motion>
  );
}

const Motion = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export default FadeFramerMotion;
