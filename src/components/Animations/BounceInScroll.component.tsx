import { Variants } from "framer-motion";
// CircleCI doesn't like import { motion } from "framer-motion" here, so we use require
const { motion } = require("framer-motion");

import { IAnimateBounceProps } from "./types/Animations.types";

const bounceVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2
    }
  }
};

/**
 * Bounce in content when content becomes visible in viewport
 * @function BounceInScroll
 * @param {ReactNode} children - Children content to render
 * @param {string} cssClass - CSS classes to apply to component
 * @param {"some" | "all" | number} viewAmount - Amount of component needed to be visible before animating
 * @returns {JSX.Element} - Rendered component
 */

const BounceInScroll = ({ children, cssClass, viewAmount }: IAnimateBounceProps): JSX.Element => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: viewAmount || 0.2 }}
    className={cssClass}
    data-testid="bounceinscroll"
  >
    <motion.div variants={bounceVariants}>{children}</motion.div>
  </motion.div>
);

export default BounceInScroll;
