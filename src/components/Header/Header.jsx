import css from "./Header.module.css";
import sprite from "../../assets/sprite.svg";

const Header = ({ setIsModal }) => {
  return (
    <header className={css.header}>
      <div className={css.infoContainer}>
        <svg className={css.logoIcon}>
          <use href={`${sprite}#logo-icon`}></use>
        </svg>
        <p className={css.companyName}>ecosolution</p>
        {/* <img src={companyName} alt="logo" /> */}
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
		<button className={css.contsctUsBtn}>
      <p className={css.btnText}>Get in touch</p>
      <svg className={css.icon}>
        <use href={`${sprite}#icon-dot`}></use>
      </svg>
    </button>
    </header>
  );
};

export default Header;
