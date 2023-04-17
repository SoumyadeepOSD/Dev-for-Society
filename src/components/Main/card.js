import React from 'react'
import { motion } from "framer-motion"
import {FaGithub, FaLink} from 'react-icons/fa';

export const Card = ({Pimg, PDescription}) => (
    <motion.div id='btn'
      whileHover={{ scale: 0.9 }} 
      whileTap={{ scale: 1.2 }} 
    >
    <img src={Pimg} alt='img' id='img'/>
    <p>{PDescription}</p>
    <div className='card-btn'>
      <FaGithub size={50}/>
      <FaLink size={50} color='blue'/>
    </div>
    </motion.div>
)