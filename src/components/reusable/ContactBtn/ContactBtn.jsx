import css from "./ContactBtn.module.css";
import sprite from "../../../assets/sprite.svg";

const ContactBtn = ({ title }) => {
  return (
    <button className={css.contsctUsBtn}>
      <p className={css.btnText}>{title}</p>
      <svg className={css.icon}>
        <use href={`${sprite}#icon-dot`}></use>
      </svg>
    </button>
  );
};

export default ContactBtn;
