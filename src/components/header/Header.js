import { useState } from 'react';
import '../header/style.css';
import Confetti from 'react-confetti';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [myName, setMyName] = useState('Zafarzhon');
  const [showConfetti, setShowConfetti] = useState(false);

  const removeName = () => {
    setMyName(currentValue =>
      currentValue === 'Zafarzhon' ? 'zafariii' : 'Zafarzhon'
    );
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 10000);
  };

  return (
    <header className='header bg-overlay bg-overlay-dark bg-parallax opacity'>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={2000}
          gravity={0.3}
          recycle={false}
        />
      )}
      <div className='header__wrapper'>
        <h1 className='header__title'>
          <strong>
            Hi, my name is <em onClick={removeName}>{myName}</em>
          </strong>
          <br />
          i'm frontend developer
        </h1>
        <div className='header__text'>
          <p>with passion for learning and creating.</p>
          <p>
            Focused Web Developer building and managing the Front-end of
            Websites and Web Applications that leads to the success of the
            overall product. Check out some of my work in the{' '}
            <NavLink to='/projects' className='strong-text'>
              Projects
            </NavLink>{' '}
            section.
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
        <a href='#!' className='btn'>
          Open CV <br /> <span className='span-text'>(not working)</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
