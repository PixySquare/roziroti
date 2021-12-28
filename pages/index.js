import Head from "next/head";
import Image from "next/image";
import AboutUs from "../components/AboutUs";
import MenuComponent from "../components/MenuComponent";
import ContactUs from "../components/ContactUs";
import Gallery from "../components/Gallery";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <MenuComponent />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}
