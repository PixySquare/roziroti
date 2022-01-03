import Image from "next/image";
import styles from "./styles.module.css";
import { FooterSection } from "../../data";

function ContactUs() {
  return (
    <div className={styles.container}>
      <div className={styles.imageLogoDiv}>
        <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "}
          className={styles.image}
          src={FooterSection.logo}
          height={350}
          width={350}
        />
      </div>
      <div className={styles.wrapper} id="contact">
        <div className={styles.flexDiv}>
          <div className={styles.info}>
            <div>
              <p style={{ margin: "0" }}>{FooterSection.locationText}</p>
              <p style={{ margin: "0" }}><b>{FooterSection.mail}</b></p>
            </div>
            <div>
              <p style={{ margin: "0" }}>
              <b>{FooterSection.owner.name}</b> - {FooterSection.owner.mobile}
              </p>
              {/* <p style={{ margin: "0" }}>
                <b>{FooterSection.manager.name}</b> - {FooterSection.manager.mobile}
              </p> */}
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14009.689362921355!2d77.0234889!3d28.6171016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8442a6a0878bbb64!2sRozi%20Roti!5e0!3m2!1sen!2sin!4v1640929843887!5m2!1sen!2sin"
              width="60%"
              height="300px"
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
