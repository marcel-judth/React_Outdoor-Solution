export const flyInAnim = {
  x: 100,
};

export const titleAnim = {
  hidden: { y: -200 },
  show: {
    y: 0,
    transition: { delay: 2, duration: 0.75, ease: "easeOut" },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "95%", transition: { duration: 1 } },
};

export const lineAnimAboutUs = {
  hidden: { width: "0%" },
  show: { width: "90%", transition: { delay: 1, duration: 1 } },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};
