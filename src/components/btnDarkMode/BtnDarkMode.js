import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import sun from "./Sun.svg";
import moon from "./Moon.svg";
import "./style.css";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "Light");
  const btnRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "Light" ? "Dark" : "Light";
    });
  };

  useEffect(() => {
    if (darkMode === "Dark") {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  return (
    <>
      <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
        <img src={sun} alt="Light" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark" className="dark-mode-btn__icon" />
      </button>
    </>
  );
};

export default BtnDarkMode;
