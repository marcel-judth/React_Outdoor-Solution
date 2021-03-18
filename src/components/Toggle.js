import { motion } from 'framer-motion';

const Toggle = ({
  children,
  title,
  iconName,
  toggleStates,
  setToggleStates,
  index,
}) => {
  const settoggle = () => {
    setToggleStates(
      toggleStates.map((item, i) => {
        return i == index ? !toggleStates[i] : false;
      })
    );
  };
  return (
    <motion.div className="question" layout onClick={() => settoggle()}>
      <div className="toggle-title">
        <motion.div layout className="toggle-icon-container">
          <i className={iconName}></i>
        </motion.div>
        <motion.h4 layout>{title}</motion.h4>
        <motion.div layout className="toggle-arrow-container">
          {toggleStates[index] ? (
            <i className="fas fa-angle-up"></i>
          ) : (
            <i className="fas fa-angle-down"></i>
          )}
        </motion.div>
      </div>
      {toggleStates[index] ? children : ''}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
