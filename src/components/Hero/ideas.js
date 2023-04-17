import React from 'react';
import Idea from './idea';
import {motion} from "framer-motion";

const Ideas = () => {
  return (
    <motion.div className='ideas'
    initial={{x: -1000}}
      animate={{x: 0, y: 0}}
      transition={{
        duration:"1",
      }}>
        <Idea number="1" title="Contribute" description="Contribute to our open source projects and open endless possibilities"/>
        <Idea number="2" title="Develop" description="Develop and build high quality software solution and make a valuable impact in the society"/>
        <Idea number="3" title="Grow" description="Learn and Grow into the community and empower/motivate the developers for building real-life useful solution"/>
    </motion.div>
  )
}

export default Ideas;