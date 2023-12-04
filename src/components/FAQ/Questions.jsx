import { forwardRef, useEffect, useState } from "react";
import data from "../../assets/faq.json";
import sprite from "../../assets/sprite.svg";
import Title from "../reusable/Title/Title";
import css from "./Questions.module.css";

const Questions = ({ onClick }, ref) => {
  const [elements, setElements] = useState([]);

  if (elements.length > 0) {
    elements[0].setAttribute("open", "open");
  }

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("details"));
    setElements(elements);
  }, []);

  useEffect(() => {
    if (elements.length > 0) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("toggle", accordion);
      }
    }
    return () => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener("toggle", accordion);
      }
    };
  }, [elements]);

  function accordion(event) {
    if (!event.target.open) return;

    for (let i = 0; i < elements.length; i++) {
      if (
        elements[i].tagName != "DETAILS" ||
        !elements[i].hasAttribute("open") ||
        event.target == elements[i]
      ) {
        continue;
      }
      elements[i].removeAttribute("open");
    }
  }

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
          <button
            className={css.contsctUsBtn}
            onClick={() => onClick("contactUs")}
          >
            <p className={css.btnText}>Contact Us</p>
            <svg className={[`${css.iconRight} ${css.icon}`]}>
              <use href={`${sprite}#icon-dot`}></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export const FaqSection = forwardRef(Questions);
