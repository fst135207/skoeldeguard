import Image from "next/image";
import Hero from "./components/Home/Hero";
import ServicesSection from "./components/Home/Service";
import Projekte from "./components/Home/Projekte";
import FAQSection from "./components/Home/faq";
import ContactForm from "./components/Form/Contact";

export default function Home() {
  return (
    <>
    <Hero />
    <ServicesSection />
    <Projekte/>
    <FAQSection/>
    <ContactForm />
    </>
  );
}
