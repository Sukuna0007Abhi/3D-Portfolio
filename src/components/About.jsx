import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { RiBriefcase4Fill } from "react-icons/ri";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[255px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#111522] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Abhijit Das. A passionate Software Engineer with expertise in 
        Ruby, Python, JavaScript, C and full-stack development. 
        Currently pursuing my B Tech at Polaris School of Technology. I specialize in 
        building modern web applications and have experience with databases, 
        CLI development, computer engineering, Python and Ruby development. I'm always eager to learn 
        new technologies and solve complex problems through innovative solutions.
      </motion.p>
      <button
        className="mt-10 px-6 py-3 text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-cyan-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1ZxzaSqgUq6M3Y0Mz4e0n626R9PQXcAmz/view?usp=sharing"
          )
        }
      >
        <span className="font-semibold flex gap-1.5 items-center"><RiBriefcase4Fill />Download Resume</span>
      </button>
      <div className="mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
