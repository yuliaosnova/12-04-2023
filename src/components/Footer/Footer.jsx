import css from "./Footer.module.css";
// import companyName from "../../assets/ecosolution.png";
import sprite from "../../assets/sprite.svg";

const Footer = () => {
  return (
    <section>
      <hr className={css.line} />

      <div className={css.block}>
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

        <div className={css.sosialsForLargeScreen}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noferrer noreferrer"
            aria-label="icon Facebook"
          >
            <svg className={css.sosials}>
              <use href={`${sprite}#icon-facebook`}></use>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noferrer noreferrer"
            aria-label="icon Instagram"
          >
            <svg className={css.sosials}>
              <use href={`${sprite}#icon-instagram`}></use>
            </svg>
          </a>
        </div>

        <button className={css.buttonContainer}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-arrow-up`}></use>
          </svg>
        </button>
      </div>

      <div className={css.sosialsGroup}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noferrer noreferrer"
          aria-label="icon Facebook"
        >
          <svg className={css.sosials}>
            <use href={`${sprite}#icon-facebook`}></use>
          </svg>
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noferrer noreferrer"
          aria-label="icon Instagram"
        >
          <svg className={css.sosials}>
            <use href={`${sprite}#icon-instagram`}></use>
          </svg>
        </a>
      </div>

      <div className={css.adressContainer}>
        <p className={css.adress}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
        <p className={css.adress}>office@ecosolution.com</p>
        <p className={css.adress}>ecosolution &copy; 2023</p>
      </div>
    </section>
  );
};

export default Footer;
