import { useFormik } from "formik";
import sprite from "../../assets/sprite.svg";
import { formValidationSchema } from "../../helpers/formValidationShema";
import css from "./Form.module.css";

const Form = () => {
  const { values, errors, touched, handleSubmit, handleChange, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },

      validationSchema: formValidationSchema,

      onSubmit: () => {
        resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name" className={css.label}>
        *Full name:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={values.name}
        placeholder="John Rosie"
        className={css.input}
        style={errors.name && touched.name && { borderBottomColor: "#D28B8B" }}
      />
      <span className={css.errorMessage}>
        {touched.name && errors.name && <div>{errors.name}</div>}
      </span>

      <label htmlFor="email" className={css.label}>
        *E-mail:
      </label>
      <input
        type="text"
        name="email"
        value={values.email}
        id="email"
        placeholder="johnrosie@gmail.com"
        onChange={handleChange}
        className={css.input}
        style={
          touched.email && errors.email && { borderBottomColor: "#D28B8B" }
        }
      />
      <span className={css.errorMessage}>
        {touched.email && errors.email && <div>{errors.email}</div>}
      </span>

      <label htmlFor="phone" className={css.label}>
        *Phone:
      </label>
      <input
        type="text"
        name="phone"
        value={values.phone}
        id="phone"
        onChange={handleChange}
        placeholder="+380961234567"
        className={css.input}
        style={errors.phone && { borderBottomColor: "#D28B8B" }}
      />
      <span className={css.errorMessage}>
        {touched.phone && errors.phone && <div>{errors.phone}</div>}
      </span>

      <label htmlFor="message" className={css.label}>
        Message:
      </label>
      <textarea
        name="message"
        id="message"
        onChange={handleChange}
        value={values.message}
        placeholder="Your message..."
        className={css.textarea}
        rows={8}
      ></textarea>

      <button type="submit" className={css.btn}>
        <p className={css.btnText}>Send</p>
        <div className={css.more}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-arrow-right`}></use>
          </svg>
        </div>
      </button>
    </form>
  );
};

export default Form;
