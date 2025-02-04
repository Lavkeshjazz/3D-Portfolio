import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { socials } from  '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { faceDirection } from 'three/examples/jsm/nodes/Nodes.js'
import { pic } from "../assets";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index,title,icon,visit})=>{
  return (
    <Tilt>
      <motion.div variants={fadeIn("right", "spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-full shadow-card'>
        <div
        options={{
          max:45,
          scale:1,
          speed:300
        }}
        className='bg-tertiary rounded-full flex justify-evenly items-center'
        >
          <a href={visit} target="_blank">
            <img
            src={icon}
            alt="icon"
            className="w-16 h-16 object-contain p-2"
            />
          </a>
        </div>
        </motion.div> 
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>
        <div className="w-full mx-auto flex md:flex-row flex-col py-4 justify-between">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="py-5 flex items-start justify-center"
        >
          <img
            src={pic}
            alt="pic"
            className="md:w-72 w-70 rounded-full shadow-card"
          />
        </motion.div>
        <div className="flex flex-col px-8">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[16px] max-w-3xl leading -[30px]"
          >
            Welcome to my portfolio website! I'm{" "}
            <span className="text-[20px] text-[#9226ff]">Lavkesh Jaiswal</span>,
            an enthusiastic student who thrives on learning new things.
            Currently pursuing my Bachelors <span className="text-[20px] text-[#9226ff]">(B.Tech) </span> in <span className="text-[20px] text-[#9226ff]">Computer Science </span>Engineering
            from the prestigious <span className="text-[20px] text-[#9226ff]">Birla of Technology (BIT), Mesra, </span>I
            possess a strong background and active involvement in various
            College Clubs. My expertise lies in Fullstack Development,
            complemented by a growing interest in Artificial intelligence. Alongside
            these technical skills, I bring excellent communication and
            leadership abilities to the table. As you explore my portfolio,
            you'll delve into my journey, notable achievements, and the value I
            can bring to your team or organization. Let's connect and discuss
            potential collaborations, as I eagerly seek Software Developer roles
            to further enhance my skills and contribute to the real industry.
            <br />
            <br />
            Thank you for visiting, and I look forward to connecting with you
            soon!
          </motion.p>
          <div className="mt-12 flex flex-wrap gap-8 justify-center">
            {socials.map((social, index) => (
              <ServiceCard key={social.title} index={index} {...social} />
            ))}
          </div>
        </div>
        </div>
        </>
        );
        };


export default SectionWrapper(About, "about")