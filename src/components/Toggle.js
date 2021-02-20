import { useState } from 'react';
import { motion } from 'framer-motion';

const Toggle = ({ children, title, iconName }) => {
  const [toggle, settoggle] = useState(false);
  return (
    <motion.div className="question" layout onClick={() => settoggle(!toggle)}>
      <div className="toggle-title">
        <motion.div layout className="toggle-icon-container">
          <i class={iconName}></i>
        </motion.div>

        <motion.h4 layout>{title}</motion.h4>
        <motion.div className="toggle-arrow-container" layout>
          {toggle ? (
            <i class="fas fa-angle-up"></i>
          ) : (
            <i class="fas fa-angle-down"></i>
          )}
        </motion.div>
      </div>

      {toggle ? children : ''}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
