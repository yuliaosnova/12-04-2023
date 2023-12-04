import { useRef, useState } from "react";
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
    if (section === "main") {
      refMain.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "about") {
      refAbout.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "cases") {
      refCases.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "faq") {
      refFaq.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "contactUs") {
      refContactUs.current?.scrollIntoView({ behavior: "smooth" });
    }

    setIsModal();
  };

  const setIsModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={css.container}>
      {isModalOpen && <Modal setIsModal={setIsModal} onClick={handleClick} />}
      <Header setIsModal={setIsModal} />
      <MainSection ref={refMain} />
      <ValuesSection ref={refAbout} />
      <Electricity />
      <CasesSection ref={refCases} />
      <FaqSection ref={refFaq} />
      <ContactSection ref={refContactUs} />
      <Footer />
    </div>
  );
}

export default App;
