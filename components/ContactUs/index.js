import Image from "next/image";
import styles from "./styles.module.css";
import { FooterSection } from "../../data";

function ContactUs() {
  return (
    <div className={styles.container}>
      <div className={styles.imageLogoDiv}>
        <Image
          className={styles.image}
          src={FooterSection.logo}
          alt={"logo image"}
          height={350}
          width={350}
        />
      </div>
      <div className={styles.wrapper} id="contact">
        <div className={styles.flexDiv}>
          <div className={styles.info}>
            <div>
              <p>{FooterSection.locationText}</p>
              <p>{FooterSection.mail}</p>
            </div>
            <div>
              <p>
                {FooterSection.owner.name} - {FooterSection.owner.mobile}
              </p>
              <p>
                {FooterSection.manager.name} - {FooterSection.manager.mobile}
              </p>
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.8071986825257!2d77.2708664!3d28.5455143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564daac1d%3A0x2c582e340e7bc556!2sIndraprastha%20Institute%20of%20Information%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1640326742896!5m2!1sen!2sin"
              width="60%"
              height="350px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
