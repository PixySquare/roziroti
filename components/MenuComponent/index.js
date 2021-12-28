import Link from "next/link";
import MenuItem from "../MenuItem";
import styles from "./styles.module.css";

function MenuComponent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.upperInfo}>
        <h1 style={{ textAlign: "center", fontSize: 40 }}>Our Menu</h1>
        <p
          style={{ lineHeight: "33.5px", fontWeight: 300, textAlign: "center" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla
          urna porttitor rhoncus dolor. Ornare lectus sit amet est placerat in
          egestas. Ultricies
        </p>
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
      </div>

      <div className={styles.btn}>
        <Link href="/menu" passHref>
          <p style={{ textAlign: "center" }}>View More</p>
        </Link>
      </div>
    </div>
  );
}

export default MenuComponent;
