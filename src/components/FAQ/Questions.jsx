// import Title from "../reusable/Title/Title/Title";
import css from "./Questions.module.css";
import data from "../../assets/faq.json";
import sprite from "../../assets/sprite.svg";
import { forwardRef } from "react";
import Title from "../reusable/Title/Title";
// import ContactBtn from "../reusable/ContactBtn/ContactBtn";

const Questions = ({}, ref) => {
  return (
    <section ref={ref}>
      <div className={css.container}>
        <div className={css.titleContainer}>
          <Title title="Frequently Asked Questions" />
        </div>
        <ul className={css.list}>
          {data.map((item) => (
            <li key={item.id}>
              <hr className={css.line} />
              <details>
                <summary className={css.summary}>
                  <p className={css.text}>{item.question}</p>
                </summary>
                <p className={css.description}>{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
        <div className={css.block}>
          <p className={css.note}>
            Didn&#39;t find the answer to your question?
          </p>
          <button className={css.contsctUsBtn}>
            <p className={css.btnText}>Contact Us</p>
            <svg className={[`${css.iconRight} ${css.icon}`]}>
              <use href={`${sprite}#icon-dot`}></use>
            </svg>
          </button>
        </div>
      </div>

      {/* <ContactBtn title='Contact Us' /> */}
    </section>
  );
};

// export default Questions;
export const FaqSection = forwardRef(Questions);
