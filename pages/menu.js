import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Menu.module.css";
import intro from "../public/assets/images/intro.png";
import MenuItem from "../components/MenuItem";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function menu() {
  return (
    <div>
      <Header />
      <div className={styles.cover}>
        <h1>Our Menu</h1>
      </div>
      <div className={styles.menuFlex}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default menu;
