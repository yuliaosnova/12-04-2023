// import Title from "../reusable/Title/Title/Title";
import Title from "../reusable/Title/Title";
import css from "./Electricity.module.css";

const Electricity = () => {
  return (
    <section>
		<div className={css.titleContainer}>
		<Title
        title="Electricity we produced for all time"
        position="center"
      ></Title>
		</div>
     
      {/* <h2 className={css.title}>Electricity we produced for all time</h2> */}
      <hr className={css.line} />
      <p className={css.quantity}>
        <span className={css.number}>1.134.147.814</span>
        <span className={css.measure}>kWh</span>
      </p>
    </section>
  );
};

export default Electricity;
