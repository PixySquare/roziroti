import styles from "./styles.module.css";
import Image from "next/image";
import person from "../../public/assets/images/person.png";

function TeamCard() {
  return (
    <div className={styles.wrapper}>
      <Image src={person} />
      <p>Name Surname</p>
      <p>Position</p>
    </div>
  );
}

export default TeamCard;
