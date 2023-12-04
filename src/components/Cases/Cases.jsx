import { forwardRef, useState } from "react";
import sprite from "../../assets/sprite.svg";
import { images } from "../../assets/bg-images/slider_images";
import Title from "../reusable/Title/Title";
import data from "../../assets/slider.json";
import ItemCase from "./ItemCase/ItemCase";
import css from "./Cases.module.css";

const Cases = ({}, ref) => {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const pageWidth = document.documentElement.scrollWidth;

  function onTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function onTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function onTouchEnd() {
    if (touchStart - touchEnd > 100) {
      clickRight();
    }

    if (touchStart - touchEnd < -100) {
      clickLeft();
    }
  }

  function clickRight() {
    if (
      (pageWidth < 768 && index < data.length - 1) ||
      (pageWidth >= 768 && index < data.length - 2)
    ) {
      setIndex((index) => index + 1);
    }
  }

  function clickLeft() {
    if (index === 0) {
      return;
    } else {
      setIndex((index) => index - 1);
    }
  }

  return (
    <section ref={ref} className={css.section}>
      <div className={css.titleContainer}>
        <Title title={"Successful cases of our company"} />
      </div>
      <div className={css.sliderSwitch}>
        <button className={css.btn} onClick={clickLeft}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-arrow-right`}></use>
          </svg>
        </button>
        <button className={css.btn} onClick={clickRight}>
          <svg className={[`${css.iconRight} ${css.icon}`]}>
            <use href={`${sprite}#icon-arrow-right`}></use>
          </svg>
        </button>
      </div>
      <div className={css.slider}>
        <ItemCase
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          images={images}
          data={data}
          index={index}
        />
        {index + 1 < data.length && pageWidth >= 768 && (
          <ItemCase
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            images={images}
            data={data}
            index={index + 1}
          />
        )}
      </div>
    </section>
  );
};

export const CasesSection = forwardRef(Cases);
