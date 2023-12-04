import { useEffect, useState } from "react";
import sprite from "../../assets/sprite.svg";
import css from "./Header.module.css";

const Header = ({ setIsModal, onClick }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerColor = scrollPosition > 100 ? "#FFFFFF" : "transparent";

  return (
    <header className={css.header} style={{ backgroundColor: headerColor }}>
      <div className={css.infoContainer}>
        <svg className={css.logoIcon}>
          <use href={`${sprite}#logo-icon`}></use>
        </svg>
        <p className={css.companyName}>ecosolution</p>
        <div className={css.companyMoto}>
          <span className={css.textGreen}>GREEN</span>
          <span>ERGY</span> <br />
          <span>FOR LIFE</span>
        </div>
      </div>

      <button className={css.burgerContainer} onClick={setIsModal}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-burger-menu`}></use>
        </svg>
      </button>
      <button className={css.contsctUsBtn} onClick={() => onClick("contactUs")}>
        <p className={css.btnText}>Get in touch</p>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-dot`}></use>
        </svg>
      </button>
    </header>
  );
};

export default Header;
