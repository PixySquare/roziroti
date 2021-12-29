import Head from "next/head";
import Image from "next/image";
import AboutUs from "../components/AboutUs";
import MenuComponent from "../components/MenuComponent";
import ContactUs from "../components/ContactUs";
import Gallery from "../components/Gallery";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroComponent from "../components/IntroComponent";
import Testimonials from "../components/Testimonials";
import Reservation from "../components/Reservation";
import Posts from "../components/Posts";


export default function Home() {
  return (
    <div>
      <Header />
      <IntroComponent />
      <AboutUs />
      <MenuComponent />
      <Gallery />
      <Testimonials />
      <Reservation />
      <br />
      <br />
      <br />

      <Posts />
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}
