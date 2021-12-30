import React from 'react';
// import styles from './styles.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Image from '../../common/Image';
import PropTypes from 'prop-types';
import { Banner1, Banner2, Banner3, Banner4 } from "../../data";

function index(props) {
  const height = props.height;
  const width = props.width;
  return (
    <div className="carousel-wrapper" style={{marginTop: 80}}>
      <Carousel infiniteLoop={true} interval={3000} useKeyboardArrows autoPlay
        showThumbs={false} stopOnHover={true} 
        showArrows={true} emulateTouch={true} swipable={true} >
        <div>
          <Image src={Banner1} height={height} width={width}
            alt="legend 1"/>
        </div>
        <div>
          <Image src={Banner2} height={height} width={width}
            alt="legend 2"/>
        </div>
        <div>
          <Image src={Banner3}  height={height} width={width}
            alt="legend 1"/>
        </div>

      </Carousel>
    </div>
  );
}

index.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,

};

export default index;

