import React from 'react'
import { useEffect } from 'react';
import styles from  ".././Posts/styles.module.css"
import Divider from "../../public/svg/divider.svg"
import Image from "next/image"
const EmbedSocialWidget = (props) => {
    useEffect(() => {
        (function(d, s, id){var js;
             if (d.getElementById(id)) {
                 return;
                } 
                js = d.createElement(s);
                 js.id = id;
                  js.src = "https://embedsocial.com/cdn/ht.js"; 
                  d.getElementsByTagName("head")[0].appendChild(js);
                }(document, "script", "EmbedSocialHashtagScript"));
    }, [])
    
  return (
      <>
        {/* <div style={{ textAlign: "center" }} className={styles.heading}>
        More from us
      </div>
      <div className={styles.containerDivider} >
          <div className="DividerMidT">
            <Image alt={"Gayatri eats food roziroti  dwarka photo check out restaraunt now  www.gayatrieats.com "} src={Divider} />
          </div>
        </div> */}
    <div className='embedsocial-hashtag' data-ref={props.refId} style={{margin:'9vh 10vw',width:'80vw',alignContent:'center'}}>

    </div>
    </>
  )
}

export default EmbedSocialWidget