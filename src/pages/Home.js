import { useState } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import RequestForm from '../components/requestform/RequestForm';

const Home = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  return (
    <>
      <Navbar setShowConfetti={setShowConfetti} showConfetti={showConfetti} />
      <Header />
      <main className='section'>
        <div className='container'>
          <ul className='content-list'>
            <li className='content-list__item'>
              <h2 className='title-2'>FrontEnd</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </p>
            </li>
            <li className='content-list__item'>
              <h2 className='title-2'>BackEnd</h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </main>
      <RequestForm
        showConfetti={showConfetti}
        setShowConfetti={setShowConfetti}
      />
      <Footer />
    </>
  );
};

export default Home;
