import { useState } from 'react';
import '../header/style.css';
import Confetti from 'react-confetti';
import { NavLink } from 'react-router-dom';
import splitStringUsingRegex from '../textEffect/utils/splitStringUsingRegex';
import { motion } from 'framer-motion'

// animation variants
const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
}

const Header = () => {
  const [myName, setMyName] = useState('Open CV');
  const [showConfetti, setShowConfetti] = useState(false);

  const removeName = () => {
    setMyName(currentValue =>
      currentValue === 'Open CV' ? 'zafariii' : 'Open CV'
    );
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 10000);
  };


  const heading = 'Hi, my name is Zafarzhon i am frontend developer';
  const text = "with passion for learning and creating.";
  const text2 = "Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the";
  const text3 = "I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then dont hesitate to contact me.";
  const charHeading = splitStringUsingRegex(heading);
  const charText = splitStringUsingRegex(text);
  const charText2 = splitStringUsingRegex(text2);
  const charText3 = splitStringUsingRegex(text3);

  return (
    <header className='header bg-overlay bg-overlay-dark bg-parallax opacity'>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={1000}
          gravity={0.3}
          recycle={false}
        />
      )}
      <div className='header__wrapper'>
        {/* <motion.div
          className="name-badge"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        >
          <em onClick={removeName}>{myName}</em>
        </motion.div> */}
        <motion.h1 className='header__title' initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.2 }}>{charHeading.map((head, index) => <motion.span key={`head-${index}-${head}`} transition={{ duration: 0.2 }} variants={charVariants}>{head}</motion.span>)}</motion.h1>
        <div className='header__text'>
          <motion.p initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.015 }}>{charText.map((text, index) => (<motion.span key={`text-${index}-${text}`} transition={{ duration: 0.2 }} variants={charVariants}>{text}</motion.span>))}</motion.p>
          <motion.p initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.015 }}>{charText2.map((text2, index) => (<motion.span key={`text-${index}-${text2}`} transition={{ duration: 0.2 }} variants={charVariants}>{text2}</motion.span>))}</motion.p>
          <p>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <NavLink to='/projects' className='projects-link'>
                Projects
              </NavLink>
              section.
            </motion.span>
          </p>
          <motion.p initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.015 }}>{charText3.map((text3, index) => (<motion.span key={`text-${index}-${text3}`} transition={{ duration: 0.2 }} variants={charVariants}>{text3}</motion.span>))}</motion.p>
        </div>
        <div onClick={removeName}>
          <a href='https://docs.google.com/document/d/1F4RwUzXb_p2fGNncFub_mWO-AauTw9E-olrEaMpkd_c/edit?usp=sharing' className='cv-btn' target='_blank' rel='noopener noreferrer'>
            {myName} <br />
            {/* <span className='span-text'>(not working)</span> */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
