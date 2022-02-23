import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Menu.module.css";
import intro from "../public/assets/images/intro.png";
import MenuItem from "../components/MenuItem";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { AllMenu , Divider, MainCourse } from "../data";
import Head from "next/head"
function menu() {
  return (
    <>
    <Head>
        <title>Our Menu</title>
          <meta name="og:description" content="RoziRoti is gayatri's new venture into the food world, providing people with low cost high quality food items in dwarka, Visit now to try out the best food in Dwarka "></meta>
          <meta property="og:title" content="GayatriEats presents RoziRoti, an everyday food store."></meta>
          <meta property="description" content="A love for food and a very special attachment to the coziness of home are the two central components of Rozi Roti. We're a bunch of people who are extremely passionate about food. We love to eat and feed just as well. On a serious note, at Rozi Roti, we believe that food shouldn't only be affordable and convenient but also fresh, fun and delicious. And what could be better than home-cooked food served at your disposal. Moreover we ourselves are food lovers & great foodies, hence we believe that cooking and catering is an art that is mastered through experience along with great passion for food. Rozi Roti brings to you sumptuous yet nutritious meals prepared by very talented chefs from the freshest seasonal ingredients and delivered to your workplace with unswerving promptness. And the best bit is affordable prices, since our food is your Craving."></meta>
          {/* <meta property="og:url" content="https://gayatrieats.com/"></meta> */}
          <meta property="og:type" content="website"></meta>
          <meta name="robots" content="index, follow"></meta>
          <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
          {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    <div>

      <Header />
      <div className={styles.cover}>
        <div className={styles.heading}>Our Menu</div>
      </div>

      <div>
        <div className={styles.heading2}>Main Course</div>
        <div className="Divider">
          <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={Divider}  />
        </div>
        <div className={styles.menuFlex}>

          {MainCourse.map((item, index) => (
            <MenuItem key={index} data={item} />
          ))}
        </div>
      </div>

      <div>
        <div className={styles.heading2}>Chinese Choice</div>
        <div className="Divider">
          <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={Divider}  />
        </div>
        <div className={styles.menuFlex}>
          {MainCourse.map((item, index) => (
            <MenuItem key={index} data={item} />
          ))}
        </div>
      </div>

      <div className={styles.heading2}>Snacks and More</div>
      <div className="Divider">
        <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={Divider} />
      </div>
      <div className={styles.menuFlex}>
        {MainCourse.map((item, index) => (
          <MenuItem key={index} data={item} />
        ))}
      </div>
      <br />
      <br />
      <br />

    </div><Footer /></>
  );
}

export default menu;
