import styles from "./styles.module.css";
import ContactUs from "../ContactUs"; 
function Footer() {
  return (
    <>
    <ContactUs />
    <div className={styles.wrapper}>
      <p>Designed by <a target="_blank" href="http://pixysquare.github.io" rel="noreferrer">PixySquare</a></p>
      <p>@ Gayatri, 2021</p>
    </div>
    </>
  );
}

export default Footer;
