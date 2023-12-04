// import Title from "../reusable/Title/Title/Title";
import css from "./ContactUs.module.css";
import sprite from "../../assets/sprite.svg";
import Form from "../Form/Form";
import { forwardRef } from "react";
import Title from "../reusable/Title/Title";
// import Title from "../reusable/Title/Title/Title";

const ContactUs = ({}, ref) => {
  return (
    <section ref={ref}>
      <Title title="Contact us" position="center"></Title>
      <div className={css.contactsContainer}>
        <div className={css.container}>
          <div className={css.group}>
            <p className={css.label}>Phone: </p>
            <a className={css.block} href="tel:+380981234567">
              <svg className={css.contactIcon}>
                <use href={`${sprite}#icon-call`} width={24} height={24}></use>
              </svg>
              <p className={css.adress}>38 (098) 12 34 567</p>
            </a>
            <a className={css.block} href="tel:+380931234567">
              <svg className={css.contactIcon}>
                <use href={`${sprite}#icon-call`} width={24} height={24}></use>
              </svg>
              <p className={css.adress}>38 (093) 12 34 567</p>
            </a>
          </div>
          <div className={css.group}>
            <p className={css.label}>Email: </p>
            <a className={css.block} href="mailto:office@ecosolution.com">
              <svg className={css.contactIcon}>
                <use href={`${sprite}#icon-mail`} width={24} height={24}></use>
              </svg>
              <p className={css.adress}>office@ecosolution.com</p>
            </a>
          </div>
          <div className={css.group}>
            <p className={css.label}>Address: </p>
            <a
              className={css.block}
              href="https://maps.app.goo.gl/AyT3DNC4Cco23Xoy7"
              target="_blank"
              rel="noreferrer"
            >
              <svg className={css.contactIcon}>
                <use href={`${sprite}#icon-map`} width={24} height={24}></use>
              </svg>
              <div className={css.adressContainer}>
                <p className={css.adress}>79005, Ukraine, Lvivstreet.</p>
                <p className={css.adress}>Shota Rustaveli, 7</p>
              </div>
            </a>
          </div>
          <div className={css.group}>
            <p className={css.label}>Social Networks: </p>
            <div className={css.block}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noferrer noreferrer"
                aria-label="icon Facebook"
              >
                <svg className={css.sosials}>
                  <use href={`${sprite}#icon-facebook`}></use>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noferrer noreferrer"
                aria-label="icon Instagram"
              >
                <svg className={css.sosials}>
                  <use href={`${sprite}#icon-instagram`}></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

// export default ContactUs;
export const ContactSection = forwardRef(ContactUs);
