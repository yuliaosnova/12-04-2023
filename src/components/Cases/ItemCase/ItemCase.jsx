import data from "../../../assets/slider.json";
import sprite from "../../../assets/sprite.svg";
import css from "./ItemCase.module.css";

const ItemCase = ({ onTouchStart, onTouchMove, onTouchEnd, images, index }) => {
  const totalArticles = data.length;
  return (
    <article
      className={css.article}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className={css.counter}>
        <span className={css.pictureNumber}>0{index + 1}</span>
        <span className={[`${css.pictureNumber} ${css.total}`]}>
          /0{totalArticles}
        </span>
      </div>
      <img
        className={css.articleImg}
        src={images[index]}
        alt={data[index].title}
      ></img>
      <div className={css.description}>
        <div className={css.block}>
          <p className={css.articleTitle}>
            {data[index].city},<span> {data[index].title}</span>
          </p>
          <button className={css.articleBtn}>
            <svg className={css.articleIcon}>
              <use href={`${sprite}#icon-arrow-right`}></use>
            </svg>
          </button>
        </div>
        <hr className={css.line} />
        <div className={css.footnotes}>
          <p>{data[index].description}</p>
          <p>{data[index].date}</p>
        </div>
      </div>
    </article>
  );
};

export default ItemCase;
