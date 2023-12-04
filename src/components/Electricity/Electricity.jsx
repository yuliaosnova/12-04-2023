import { useCallback, useEffect, useRef, useState } from "react";
import Title from "../reusable/Title/Title";
import css from "./Electricity.module.css";

const Electricity = () => {
  const [quantity, setQuantity] = useState(714);
  let intervalRef = useRef();
  const lastQuantity = 814;

  const increaseQuantity = useCallback(() => {
    setQuantity((prev) => {
      const nextValue = prev + 1;

      if (nextValue === lastQuantity) {
        clearInterval(intervalRef.current);
      }

      return nextValue;
    });
  }, [setQuantity, intervalRef]);

  useEffect(() => {
    intervalRef.current = setInterval(increaseQuantity, 1000);
    return () => clearInterval(intervalRef.current);
  }, [increaseQuantity]);

  return (
    <section>
      <div className={css.titleContainer}>
        <Title
          title="Electricity we produced for all time"
          position="center"
        ></Title>
      </div>
      <hr className={css.line} />
      <p className={css.quantity}>
        <span className={css.number}>1.134.147.{quantity}</span>
        <span className={css.measure}>kWh</span>
      </p>
    </section>
  );
};

export default Electricity;
