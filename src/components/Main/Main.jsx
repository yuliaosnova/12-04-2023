import css from "./Main.module.css";
import sprite from "../../assets/sprite.svg";
import {
  wind_turbine_sm,
  wind_turbine_md,
  wind_turbine_lg,
} from "../../assets/bg-images";
import { forwardRef } from "react";

const Main = ({}, ref) => {
  return (
    <section className={css.section} ref={ref}>
      <div className={css.mainContainer}>
        <h1 className={css.title}>RENEWABLE ENERGY For any task</h1>
        <div className={css.block}>
          <p className={css.text}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <button className={css.btn}>
            <p className={css.btnText}>Learn more</p>
            <div className={css.more}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-arrow-right`}></use>
              </svg>
            </div>
          </button>
        </div>
      </div>

      <hr className={css.line} />
      <div className={css.adressContainer}>
        <p className={[`${css.adress} ${css.location}`]}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
        <p className={[`${css.adress} ${css.email}`]}>office@ecosolution.com</p>
        <p className={[`${css.adress} ${css.copyright}`]}>
          ecosolution &copy; 2023
        </p>
      </div>
		<img
            srcSet={`${wind_turbine_sm} 320w, ${wind_turbine_md} 709w, ${wind_turbine_lg} 1240w`}
            sizes="(min-width: 1280px) 1240px, (min-width: 768px) 709px, (min-width: 360px) 320px"
            src={wind_turbine_md}
            alt="turbine"
				className={css.image}
          />
    </section>
  );
};

// export default Main;
export const MainSection = forwardRef(Main);
