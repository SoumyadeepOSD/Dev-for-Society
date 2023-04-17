import React from 'react'
import {FaDiscord, FaGithub} from 'react-icons/fa';
import {motion} from "framer-motion"

const Bonding = () => {
  return (
    <div id='bonding'>
        <p id='black-text'>Join Us Now 👇</p>
        <section className='bonding-content'>
        <div className='bonding-section'>
        <FaGithub color='black' size={50}/>
        <a href='https://github.com/SoumyadeepOSD/Remove_Hunger'>
        <motion.button whileHover={{ scale: 1.1 }} className='join-button'>Contribute Project</motion.button>
        </a>
        </div>
        <div className='bonding-section'>
        <FaDiscord color='blue' size={50}/>
        <a href='https://discord.gg/6ZYSs7zr'>
        <motion.button whileHover={{ scale: 1.1 }} className='join-button'>Join discord</motion.button>
        </a>
        </div>
        </section>
    </div>
  )
}

export default Bonding