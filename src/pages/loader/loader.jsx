import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Represents the Loader component.
 * Displays an animated loader with SVG icons.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    // Automatically hide the loader after a delay
    setTimeout(() => {
      setShowLoader(false);
    }, 2800);
  }, [setShowLoader]);

  // Animation variants for the SVG icons
  const iconVariant1 = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
    },
    visible: {
      pathLength: 5,
      fill: "rgb(243, 243, 243)",
      stroke: "rgb(243, 243, 243)",
      strokeWidth: 3,
      scale: 0,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {/* Animated SVG */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        style={{ width: "30vw", height: "30vw" }}
      >
        {/* Second SVG path */}
        <motion.path
          d="m435.12,681.97v15.71h-107.83v-391.77l-27.76,34.72-26.81,33.43-42.28,52.68-42.17-52.68-26.81-33.43-22.91-28.58c-9.09,19.72-16.42,40.51-21.85,62.01-2.48,9.8-4.49,19.84-6.14,30-2.95,18.43-4.49,37.32-4.49,56.57,0,7.09.24,14.17.71,21.26,1.65,28.11,6.5,55.28,14.29,81.26,31.06,103.11,107.6,186.38,206.22,226.65,33.66,13.7,69.92,22.44,107.83,25.16v106.3c-37.32-2.01-73.35-8.62-107.83-19.02-124.84-37.91-227.36-127.32-282.76-243.54-18.43-38.74-31.54-80.43-38.62-124.13-2.72-17.24-4.61-34.84-5.43-52.68-.24-7.09-.47-14.17-.47-21.26,0-29.53,2.83-58.46,8.15-86.57,10.39-54.68,30.35-105.94,58.23-152.01,19.25-31.77,42.17-60.94,68.27-87.17l66.85,83.5,28.94,36.02,96.85-120.71,2.6-3.31L434.41,0h.47l.24.12v681.85Z"
          variants={iconVariant1}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>{" "}
    </div>
  );
};

export default Loader;
