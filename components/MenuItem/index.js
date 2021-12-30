import Image from "next/image";
import styles from "./styles.module.css";
import food from "../../public/assets/images/food.png";

function MenuItem(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageDiv}>
        <Image 
          height={"300px"}
          width={"300px"}
        src={props.data.image} alt={props.data.name} className="menuImage" />
      </div>
      <p>{props.data.name}</p>
    </div>
  );
}

export default MenuItem;
