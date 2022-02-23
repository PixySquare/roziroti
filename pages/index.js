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
      <Head>
        <title>RoziRoti - Order Now </title>
          <meta name="og:description" content="RoziRoti is gayatri's new venture into the food world, providing people with low cost high quality food items in dwarka, Visit now to try out the best food in Dwarka "></meta>
          <meta property="og:title" content="GayatriEats presents RoziRoti, an everyday food store."></meta>
          <meta property="description" content="A love for food and a very special attachment to the coziness of home are the two central components of Rozi Roti. We're a bunch of people who are extremely passionate about food. We love to eat and feed just as well. On a serious note, at Rozi Roti, we believe that food shouldn't only be affordable and convenient but also fresh, fun and delicious. And what could be better than home-cooked food served at your disposal. Moreover we ourselves are food lovers & great foodies, hence we believe that cooking and catering is an art that is mastered through experience along with great passion for food. Rozi Roti brings to you sumptuous yet nutritious meals prepared by very talented chefs from the freshest seasonal ingredients and delivered to your workplace with unswerving promptness. And the best bit is affordable prices, since our food is your Craving."></meta>
          {/* <meta property="og:url" content="https://gayatrieats.com/"></meta> */}
          <meta property="og:type" content="website"></meta>
          <meta name="robots" content="index, follow"></meta>
          <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
          {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <IntroComponent />
      <AboutUs />
      <MenuComponent />
      <Gallery />
      <Testimonials />
      <br />
      <Reservation />
      <br />
      <Posts />
      <Footer />
    </div>
  );
}
