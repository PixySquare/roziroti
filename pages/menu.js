import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Menu.module.css";
import intro from "../public/assets/images/intro.png";
import MenuItem from "../components/MenuItem";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { AllMenu , Divider, MainCourse } from "../data";

function menu() {
  return (
    <><div>
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
