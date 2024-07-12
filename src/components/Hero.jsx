import React from "react";
import { motion } from "framer-motion"
import { styles } from "../styles"
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className={`${styles.paddingX} absolute inset-0 top-[170px] justify-center align-middle max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className=" mt-20 w-5 h-5 rounded-full bg-[#9226ff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className={`${styles.heroHeadText} mt-20`}>
          <h3 className={`${styles.heroHeadText} text-white`}>Hola, I'm <span className="text-[#9226ff]">Lavkesh Jaiswal</span></h3>
          <p className={`${styles.heroSubText} mt-9 text-white flex`}>
            I'm&nbsp;
            <span>
              <Typewriter
                options={{
                  strings: [
                    "a FullStack Developer",
                    "a Problem Solver",
                    "a Computer Science Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
        </div>

        <div className="absolute sm:bottom-12 bottom-24 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div 
                animate={{
                  y: [0,24,0]
                }}
                transition={{
                  duration: 1.5,
                  repeat:Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div> 
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero