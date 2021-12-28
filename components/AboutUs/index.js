import styles from "./styles.module.css";
import about from "../../public/assets/images/about.png";
import Image from "next/image";
import person from "../../public/assets/images/person.png";
import TeamCard from "../TeamCard";

function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <h1>About Us</h1>
      <div className={styles.flexDiv}>
        <div className={styles.leftContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla urna porttitor rhoncus dolor. Ornare lectus sit amet est
            placerat in egestas. Ultricies lacus sed turpis tincidunt. In nisl
            nisi scelerisque eu ultrices vitae auctor. Felis imperdiet proin
            fermentum leo vel orci. Sed odio morbi quis commodo odio aenean.
            Massa vitae tortor condimentum lacinia quis vel eros donec ac. Sed
            viverra tellus in hac. Egestas sed tempus urna et. Sed viverra
            tellus in hac. Egestas sed tempus urna et.
          </p>
        </div>
        <div className={styles.rightContainer}>
          <Image src={about} />
        </div>
      </div>

      <div className={styles.teamFlex}>
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
}

export default AboutUs;
