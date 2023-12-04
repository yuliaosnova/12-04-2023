import { useEffect } from "react";
import { createPortal } from "react-dom";
import sprite from "../../assets/sprite.svg";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ setIsModal, onClick }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      setIsModal();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      setIsModal();
    }
  };

  const handleLinkClick = (section) => {
    onClick(section);
    setIsModal();
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <div className={css.modalHeader}>
          <button className={css.modalClose} onClick={setIsModal}>
            <svg className={css.closeIcon}>
              <use href={`${sprite}#icon-close`} width={24} height={24}></use>
            </svg>
            <p className={css.btnText}>close</p>
          </button>
          <hr className={css.line} />
        </div>
        <nav className={css.navigation}>
          <ul className={css.list}>
            <li className={css.item}>
              <a
                className={css.link}
                href="#main"
                onClick={() => handleLinkClick("main")}
              >
                <p>Main</p>
                <svg className={[`${css.iconRight} ${css.icon}`]}>
                  <use href={`${sprite}#icon-arrow-right`}></use>
                </svg>
              </a>
            </li>
            <li className={css.item}>
              <a
                className={css.link}
                href="#about"
                onClick={() => handleLinkClick("about")}
              >
                <p>About</p>
                <svg className={[`${css.iconRight} ${css.icon}`]}>
                  <use href={`${sprite}#icon-arrow-right`}></use>
                </svg>
              </a>
            </li>
            <li className={css.item}>
              <a
                className={css.link}
                href="#cases"
                onClick={() => handleLinkClick("cases")}
              >
                <p>Cases</p>
                <svg className={[`${css.iconRight} ${css.icon}`]}>
                  <use href={`${sprite}#icon-arrow-right`}></use>
                </svg>
              </a>
            </li>
            <li className={css.item}>
              <a
                className={css.link}
                href="#faq"
                onClick={() => handleLinkClick("faq")}
              >
                <p>FAQ</p>
                <svg className={[`${css.iconRight} ${css.icon}`]}>
                  <use href={`${sprite}#icon-arrow-right`}></use>
                </svg>
              </a>
            </li>
            <li className={css.item}>
              <a
                className={css.link}
                href="#contactUs"
                onClick={() => handleLinkClick("contactUs")}
              >
                <p>Contact Us</p>
                <svg className={[`${css.iconRight} ${css.icon}`]}>
                  <use href={`${sprite}#icon-arrow-right`}></use>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <div className={css.sosialsGroup}>
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
    </div>,
    modalRoot
  );
};

export default Modal;
