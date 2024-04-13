import { useState } from "react";
import "../header/style.css";

const Header = () => {
  const [myName, setMyName] = useState("Zafarzhon");

  const removeName = () => {
    console.log("ПРивеететете");
    setMyName((currentValue) => {
      return currentValue === "Zafarzhon" ? "zafariii" : "Zafarzhon";
    });
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em onClick={removeName}>{myName}</em>
          </strong>
          <br />
          i'm frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
          <p>
            Lorem, Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Officia, ducimus? ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis, recusandae! with passion for learning and creating.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
            cupiditate. with passion for learning and creating.
          </p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
