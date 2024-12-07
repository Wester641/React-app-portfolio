import { useState } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import RequestForm from '../components/requestform/RequestForm';
// import TextAnimation from '../components/textEffect/textEffect';
import splitStringUsingRegex from '../components/textEffect/utils/splitStringUsingRegex';
import { motion, variants } from 'framer-motion';


const stacksFront = [
  'JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents',
]
const stacksBack = [
  "MongoDB, MySQL, NodeJS",
]
const stacksQA = [
  "Selenium, Cypress, Unit testing, Manual testing, Postman, Insomnia, Git, GitHub",
]


const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
}

const Home = () => {

  const stacksChar = splitStringUsingRegex(stacksFront)
  const stacksBackChar = splitStringUsingRegex(stacksBack)
  const stacksQaChar = splitStringUsingRegex(stacksQA)
  const frontChar = splitStringUsingRegex("Frontend")
  const backChar = splitStringUsingRegex("Backend")
  const qaChar = splitStringUsingRegex("QA")

  const [showConfetti, setShowConfetti] = useState(false);
  return (
    <>
      <Navbar setShowConfetti={setShowConfetti} showConfetti={showConfetti} />
      <Header />
      <main className='section'>
        <div className='container'>
          <ul className='content-list'>
            <li className='content-list__item'>
              <motion.h2 className='title-2' initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.2 }}>{frontChar.map((front, index) => <motion.span key={`front-${index}-${front}`} transition={{ duration: 0.2 }} variants={charVariants}>{front}</motion.span>)}</motion.h2>
              <motion.p initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.015 }}>{stacksChar.map((frontStack, index) => (<motion.span key={`stack-${index}-${frontStack}`} transition={{ duration: 0.2 }} variants={charVariants}>{frontStack}</motion.span>))}</motion.p>
            </li>
            <li className='content-list__item'>
              <motion.h2 className='title-2' initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.2 }}>{backChar.map((back, index) => <motion.span key={`back-${index}-${back}`} transition={{ duration: 0.2 }} variants={charVariants}>{back}</motion.span>)}</motion.h2>
              <motion.p initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.015 }}>{stacksBackChar.map((backStack, index) => (<motion.span key={`backstack-${index}-${backStack}`} transition={{ duration: 0.2 }} variants={charVariants}>{backStack}</motion.span>))}</motion.p>
            </li>
            <li className='content-list__item'>
              <motion.h2 className='title-2' initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.2 }}>{qaChar.map((qa, index) => <motion.span key={`qa-${index}-${qa}`} transition={{ duration: 0.2 }} variants={charVariants}>{qa}</motion.span>)}</motion.h2>
              <motion.p initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.015 }}>{stacksQaChar.map((qaCharText, index) => (<motion.span key={`qatext-${index}-${qaCharText}`} transition={{ duration: 0.2 }} variants={charVariants}>{qaCharText}</motion.span>))}</motion.p>
            </li>
          </ul>
        </div>
      </main>
      <RequestForm
        showConfetti={showConfetti}
        setShowConfetti={setShowConfetti}
      />
      {/* <TextAnimation /> */}
      <Footer />
    </>
  );
};

export default Home;
