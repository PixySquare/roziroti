/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Gallery.module.css";
import intro from "../public/assets/images/intro.png";
import MenuItem from "../components/MenuItem";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Photo1,Photo2,Photo3,Photo4, Photo5,Photo6, Divider, MainCourse, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10} from "../data";

function menu() {
  return (
    <div>
      <Header />
      <div className={styles.cover}>
        <div className={styles.heading}>Let&apos;s Explore More</div>
      </div>
      <br />
      <br />
      <br />


      <div className={styles.row}>
        <div className={styles.column}>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery1} style={{width: '100%'}} />
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery2} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery3} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery4} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery5} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery6} style={{width: '100%'}}/>
        </div>
        <div className={styles.column}>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery7} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery3} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery5} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery8} style={{width: '100%'}}/>
        </div>
        <div className={styles.column}>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery10} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery4} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery5} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery6} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery1}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery2}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery10} style={{width: '100%'}} />

        </div>
        <div className={styles.column}>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery5} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery9} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery3} style={{width: '100%'}}/>
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={gallery7} style={{width: '100%'}}/>
        </div>
    </div>
    <br />
      <br />
      <Footer />
    </div>
  );
}

export default menu;
