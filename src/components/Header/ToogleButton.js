import React,{useState} from 'react';
import {motion} from "framer-motion"

const ToogleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={isOn?"SwitchOn":"SwitchOff"} data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
    </div>
  )
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

export default ToogleButton;