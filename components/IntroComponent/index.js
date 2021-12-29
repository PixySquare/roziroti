import Image from "next/image";
import styles from "./styles.module.css";
import img from "../../public/assets/images/intro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function IntroComponent() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Image src={img} />
      </div>
      <div className={styles.iconsColumn}>
        <Link href={"https://www.facebook.com"}>
          <a target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              size="3x"
              style={{ color: "#006AFF" }}
            />
          </a>
        </Link>
        <br />
        <Link href={"https://www.whatsapp.com"}>
          <a target="_blank" className={styles.nav_item}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="3x"
              style={{ color: "#25D366" }}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default IntroComponent;
