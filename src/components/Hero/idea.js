import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import {motion} from "framer-motion";

const Idea = ({number, title, description}) => {
  return (
    <div className='idea'>
        <div id='idea-number'>
            <p>{number}</p>
        </div>
        <section>
            <p id='idea-title'>{title}</p>
            <p id='idea-desc'>{description}</p>
            <motion.div
            whileHover={{ scale: 1.5 }} 
            whileTap={{ scale: 0.5 }} 
            >
            <FaArrowAltCircleRight id='arrow' color=''/>
            </motion.div>
        </section>
    </div>
  )
}

export default Idea