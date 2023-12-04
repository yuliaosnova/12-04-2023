import css from "./Title.module.css";

const Title = ({ title, position }) => {
  return (
    <h2
      className={css.title}
      style={
        position
          ? {
              textAlign: "center",
            }
          : { textAlign: "start" }
      }
    >
      {title}
    </h2>
  );
};

export default Title;
