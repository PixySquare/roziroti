import Image from "next/image";
import styles from "./styles.module.css";
import food from "../../public/assets/images/food.png";

function MenuItem() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageDiv}>
        <Image src={food} />
      </div>
      <p>Dal Makhni</p>
    </div>
  );
}

export default MenuItem;
