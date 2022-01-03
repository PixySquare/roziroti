import Image from "next/image";
import styles from "./styles.module.css";
import { FooterSection, Divider } from "../../data";

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
              <p style={{ margin: "0" }}>
                <br />
              <h1 style={{ margin: "0" }} >Contact Us</h1>
              <div className="DividerMidFooter">
                <Image alt={"Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "} src={Divider}  />
              </div>

              <b>{FooterSection.owner.mobile}</b>
              </p>
              <p style={{ margin: "0" }}><b><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=roziroti2021@gmail.com&su=Celebrate With us&body=Photos%20Text" target="_blank" rel="noreferrer">{FooterSection.mail}</a></b></p>
            </div>
            <div>
             
              {/* <p style={{ margin: "0" }}>
                <b>{FooterSection.manager.name}</b> - {FooterSection.manager.mobile}
              </p> */}
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.7228964505944!2d77.02170629307396!3d28.617212719955237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0565d8dd1c07%3A0x8442a6a0878bbb64!2sRozi%20Roti!5e0!3m2!1sen!2sin!4v1641210191046!5m2!1sen!2sin"
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
