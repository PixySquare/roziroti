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
    <div>
      <Header />
      <div className={styles.cover}>
        <div className={styles.heading}>Our Menu</div>
      </div>

      <div>
      <div className={styles.heading2}>Main Course</div>
      <div className="Divider">
        <Image src={Divider}  alt={"main menu"} />
      </div>
        <div className={styles.menuFlex}>

          {AllMenu.map((item,index) => (
              <MenuItem key={index} data={item} />
            ))}
        </div>
      </div>
      
      <div>
      <div className={styles.heading2}>Main Course</div>
        <div className="Divider">
          <Image src={Divider} alt={"main menu"} />
        </div>
        <div className={styles.menuFlex}>
          {MainCourse.map((item,index) => (
              <MenuItem key={index} data={item} />
            ))}
        </div>
      </div>

      <div>
      <div className={styles.heading2}>Main Course</div>
      <div className="Divider">
        <Image src={Divider}  alt={"main menu"} />
      </div>
        <div className={styles.menuFlex}>

          {AllMenu.map((item,index) => (
              <div key={index}  className={styles.menuflexItem}>
                <MenuItem data={item} />
              </div>
            ))}
        </div>
      </div>

      <div>
      <div className={styles.heading2}>Main Course</div>
      <div className="Divider">
        <Image src={Divider}  alt={"main menu"} />
      </div>
        <div className={styles.menuFlex}>

          {AllMenu.map((item,index) => (
              <MenuItem key={index} data={item} />
            ))}
        </div>
      </div>

      
      <ContactUs />
      <Footer />
    </div>
  );
}

export default menu;
