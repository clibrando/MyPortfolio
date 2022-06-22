import React from 'react';
import { motion, AnimatePresence } from "framer-motion"

const FadeIn = (props) => {
  const { children, duration, ease } = props;


  return (
    <AnimatePresence>
      <motion.div
          style={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ ease: (!ease) ? "easeOut" : ease , duration: duration }
        }>
          {children}
      </motion.div>
    </AnimatePresence>
 )
}


              {/* | "linear"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | "circIn"
    | "circOut"
    | "circInOut"
    | "backIn"
    | "backOut"
    | "backInOut"
    | "anticipate" */}

export default FadeIn;