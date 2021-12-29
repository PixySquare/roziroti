/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "../../public/assets/images/logo.png";
import { Whatsapp, Instagram, Facebook } from "../../data";


function Header() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 1055) {
        setOpen(false);
      }
    }
  }, []);

  useEffect(() => {
    const url = window.location.href.split("/");
    const target = url[url.length - 1].toLowerCase();
    const element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  if (process.browser) {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1055) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }

  return (
    <div className={styles.header}>
      <div
        className={styles.logoDiv}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // flex: 0.3,
        }}
      >
        <div
          style={{
            minWidth: 20,
            maxWidth: 50,
            padding: 7,
            display: "flex",
            alignItems: "center",
          }}
        >
        </div>
        <Link
          href="/"
          passHref
          onClick={(e) => {
            e.preventDefault();
            if (process.browser) {
              if (window.innerWidth < 1055) {
                setOpen(false);
              }
            }
          }}
        >
          <Image className={styles.image} src={Icon} alt={"title"} height={"60rem"} width={"70rem"} />
        </Link>
      </div>

      <div className={styles.menu} onClick={() => setOpen(!open)}>
        {open ? (
          <>
            <div className={styles.change1}></div>
            <div className={styles.change2}></div>
            <div className={styles.change3}></div>
          </>
        ) : (
          <>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </>
        )}
      </div>
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      >
        {open && (
          <div className={styles.collapse}>
            <div className={styles.linkDiv}>
              <a
                href="/"
                onClick={(e) => {
                  const menu = document.getElementById("home");
                  e.preventDefault();
                  if (process.browser) {
                    if (window.innerWidth < 1055) {
                      setOpen(false);
                    }
                  }
                  menu &&
                    menu.scrollIntoView({ behavior: "smooth", block: "start" });
                  if (
                    window.location.href != "http://localhost:3000/" &&
                    window.location.href != "https://pizzacassino.vercel.app/"
                  ) {
                    location.href = "/#home";
                  }
                }}
              >
                <div className={styles.nav_item}>Home</div>
              </a>
              <a
                href="/"
                onClick={(e) => {
                  const about = document.getElementById("aboutus");
                  e.preventDefault();
                  if (process.browser) {
                    if (window.innerWidth < 1055) {
                      setOpen(false);
                    }
                  }
                  about &&
                    about.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });

                  if (
                    window.location.href != "http://localhost:3000/" &&
                    window.location.href != "https://pizzacassino.vercel.app/"
                  ) {
                    location.href = "/#aboutus";
                  }
                }}
              >
                <div className={styles.nav_item}>About Us</div>
              </a>

              <a
                href="/"
                onClick={(e) => {
                  const blogs = document.getElementById("academics");
                  e.preventDefault();
                  if (process.browser) {
                    if (window.innerWidth < 1055) {
                      setOpen(false);
                    }
                  }
                  blogs &&
                    blogs.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  // window.history.pushState("blogs", "blogs", "/blogs");
                  if (
                    window.location.href != "http://localhost:3000/" &&
                    window.location.href != "https://pizzacassino.vercel.app/"
                  ) {
                    location.href = "/#academics";
                  }
                }}
              >
                <div className={styles.nav_item}>Menu</div>
              </a>

              <a
                href="/"
                onClick={(e) => {
                  const findus = document.getElementById("gallery");
                  e.preventDefault();
                  if (process.browser) {
                    if (window.innerWidth < 1055) {
                      setOpen(false);
                    }
                  }
                  findus &&
                    findus.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  // window.history.pushState("findus", "findus", "/findus");
                  if (
                    window.location.href != "http://localhost:3000/" &&
                    window.location.href != "https://pizzacassino.vercel.app/"
                  ) {
                    location.href = "/#gallery";
                  }
                }}
              >
                <div className={styles.nav_item}>Gallery</div>
              </a>
              <a
                href="/"
                onClick={(e) => {
                  const team = document.getElementById("contact");
                  e.preventDefault();
                  if (process.browser) {
                    if (window.innerWidth < 1055) {
                      setOpen(false);
                    }
                  }
                  team &&
                    team.scrollIntoView({ behavior: "smooth", block: "start" });
                  // window.history.pushState("team", "team", "/team");
                  if (
                    window.location.href != "http://localhost:3000/" &&
                    window.location.href != "https://pizzacassino.vercel.app/"
                  ) {
                    location.href = "/#contact";
                  }
                }}
              >
                <div className={styles.nav_item}>Contact Us</div>
              </a>
            </div>
            <div className={styles.socials}>
              <Link href={"https://www.instagram.com"}>
                <a target="_blank" className={styles.nav_item}>
                  <Image className={styles.image} src={Whatsapp} alt={"Respct.Club"} width={60} height={60}/>
                </a>
              </Link>
              <Link href={"https://www.facebook.com"}>
                <a target="_blank">
                  <Image className={styles.image} src={Facebook} alt={"Respct.Club"} width={60} height={60}/>
                </a>
              </Link>
              <Link href={"https://www.whatsapp.com"}>
                <a target="_blank" className={styles.nav_item}>
                  <Image className={styles.image} src={Instagram} alt={"Respct.Club"} width={60} height={60}/>
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
