import { useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./App.module.css";
import { CasesSection } from "./components/Cases/Cases";
import { ContactSection } from "./components/ContactUs/ContactUs";
import Electricity from "./components/Electricity/Electricity";
import { FaqSection } from "./components/FAQ/Questions";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { MainSection } from "./components/Main/Main";
import { ValuesSection } from "./components/Values/Values";
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const refMain = useRef(null);
  const refAbout = useRef(null);
  const refCases = useRef(null);
  const refFaq = useRef(null);
  const refContactUs = useRef(null);

  const handleClick = (section) => {
    switch (section) {
      case "main":
        refMain.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        refAbout.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "cases":
        refCases.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "faq":
        refFaq.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contactUs":
        refContactUs.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  const setIsModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={css.container}>
      {isModalOpen && <Modal setIsModal={setIsModal} onClick={handleClick} />}
      <Header setIsModal={setIsModal} onClick={handleClick} />
      <MainSection ref={refMain} onClick={handleClick} />
      <ValuesSection ref={refAbout} />
      <Electricity />
      <CasesSection ref={refCases} />
      <FaqSection ref={refFaq} onClick={handleClick} />
      <ContactSection ref={refContactUs} />
      <Footer onClick={handleClick} />
      <ToastContainer />
    </div>
  );
}

export default App;
