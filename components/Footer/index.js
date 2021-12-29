import styles from "./styles.module.css";
import ContactUs from "../ContactUs"; 
function Footer() {
  return (
    <>
    <ContactUs />
    <div className={styles.wrapper}>
      <p>Designed by KSM @ PixySquare</p>
      <p>@ Gayatri Institute, 2021</p>
    </div>
    </>
  );
}

export default Footer;
