import React from 'react';
import splitStringUsingRegex from './utils/splitStringUsingRegex'
import { motion, Variants } from 'framer-motion'

const heading = 'Text Editor';
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
}

const TextAnimation = () => {
  const charHeading = splitStringUsingRegex(heading);
  const charText = splitStringUsingRegex(text);

  return (
    <div>
      <motion.h1 initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.02 }}>{charHeading.map((char) => <motion.span key={char} transition={{ duration: 0.2 }} variants={charVariants}>{char}</motion.span>)}</motion.h1>
      <motion.p initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.015 }}>{charText.map((textChar) => <motion.span key={textChar} transition={{ duration: 0.2 }} variants={charVariants}>{textChar}</motion.span>)}</motion.p>
    </div>
  );
};

export default TextAnimation;
