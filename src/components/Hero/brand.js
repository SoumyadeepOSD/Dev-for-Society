import React from 'react'
import {motion} from "framer-motion";
const subtitle = "Community of developers towards change";

const Brand = () => {
  return (
    <div>
      <motion.div 
      initial={{x: -1000, y: 100}}
      animate={{x: 0, y: 0}}
      transition={{
        duration:"1",
      }}
      id='title-wrapper' 
      className='gap'>
        <p id='blue-text'
        >Dev</p>
        <p id='black-text'>for Society</p>
      </motion.div>
      <motion.p 
      id='subtitle-text' 
      className='gap'
      initial={{x: 1000}}
      animate={{x: 0}}
      transition={{
        duration:"1",
      }}>
        {subtitle}
      </motion.p>
    </div>
  )
}

export default Brand;
