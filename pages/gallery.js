/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Gallery.module.css";
import intro from "../public/assets/images/intro.png";
import MenuItem from "../components/MenuItem";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Photo1,Photo2,Photo3,Photo4, Photo5,Photo6, Divider, MainCourse } from "../data";

function menu() {
  return (
    <div>
      <Header />
      <div className={styles.row}>
        <div className={styles.column}>
            <Image src={Photo1} style={{width: '100%'}} />
            <Image src={Photo2} style={{width: '100%'}}/>
            <Image src={Photo3} style={{width: '100%'}}/>
            <Image src={Photo4} style={{width: '100%'}}/>
            <Image src={Photo5} style={{width: '100%'}}/>
            <Image src={Photo6} style={{width: '100%'}}/>
        </div>
        <div className={styles.column}>
            <Image src={Photo1} style={{width: '100%'}}/>
            <Image src={Photo2} style={{width: '100%'}}/>
            <Image src={Photo3} style={{width: '100%'}}/>
            <Image src={Photo4} style={{width: '100%'}}/>
            <Image src={Photo5} style={{width: '100%'}}/>
            <Image src={Photo6} style={{width: '100%'}}/>
        </div>
        <div className={styles.column}>
            <Image src={Photo1} style={{width: '100%'}}/>
            <Image src={Photo2} style={{width: '100%'}}/>
            <Image src={Photo3} style={{width: '100%'}}/>
            <Image src={Photo4} style={{width: '100%'}}/>
            <Image src={Photo5}/>
            <Image src={Photo6}/>
        </div>
        <div className={styles.column}>
            <Image src={Photo1} style={{width: '100%'}}/>
            <Image src={Photo2} style={{width: '100%'}}/>
            <Image src={Photo3} style={{width: '100%'}}/>
            <Image src={Photo4} style={{width: '100%'}}/>
            <Image src={Photo5} style={{width: '100%'}} />
            <Image src={Photo6} style={{width: '100%'}}/>
        </div>
    </div>
      <Footer />
    </div>
  );
}

export default menu;
