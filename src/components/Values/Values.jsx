import { forwardRef } from "react";
import sprite from "../../assets/sprite.svg";
import Title from "../reusable/Title/Title";
import {
  value_img_1_md,
  value_img_2_md,
  value_img_1_lg,
  value_img_2_lg,
} from "../../assets/bg-images";
import css from "./Values.module.css";

const Values = ({}, ref) => {
  return (
    <section ref={ref}>
      <div className={css.valuesTitleBlock}>
        <div className={css.titleContainer}>
          <Title title={"Main values of our company"}></Title>
        </div>
        <p className={css.text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world&lsquo;s energy needs.
        </p>
      </div>
      <div className={css.parent}>
        <div className={css.sell_1}>
          <div className={css.valueBlock}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-maximize-circle`}></use>
            </svg>
            <h4 className={css.value}>Openness</h4>
          </div>
          <hr className={css.line}></hr>
          <p className={css.definition}>
            to the world, people, new ideas and projects
          </p>
        </div>
        <div className={css.sell_2}>
          <div className={css.valueBlock}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-global-edit`}></use>
            </svg>
            <h4 className={css.value}>Responsibility</h4>
          </div>
          <hr className={css.line}></hr>
          <p className={css.definition}>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </div>
        <div className={css.sell_3}>
          <img
            srcSet={`${value_img_1_md} 345w, ${value_img_1_lg} 600w`}
            sizes="(min-width: 1280px) 600px, (min-width: 768px) 347px, 345vw"
            src={value_img_1_md}
            alt="Two men on the wind farms field"
            className={css.image}
          />
        </div>
        <div className={css.sell_4}>
          <img
            srcSet={`${value_img_2_md} 345w, ${value_img_2_lg} 600w`}
            sizes="(min-width: 1280px) 600px, (min-width: 768px) 347px, 345vw"
            src={value_img_2_md}
            alt="Two men on the wind farms field"
            className={css.image}
          />
        </div>

        <div className={css.sell_5}>
          <div className={css.valueBlock}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-cpu-charge`}></use>
            </svg>
            <h4 className={css.value}>Innovation</h4>
          </div>
          <hr className={css.line}></hr>
          <p className={css.definition}>
            we use the latest technology to implement non-standard solutions
          </p>
        </div>

        <div className={css.sell_6}>
          <div className={css.valueBlock}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-ranking`}></use>
            </svg>
            <h4 className={css.value}>Quality</h4>
          </div>
          <hr className={css.line}></hr>
          <p className={css.definition}>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </div>
      </div>
    </section>
  );
};

export const ValuesSection = forwardRef(Values);
