import React, {useEffect, useState} from 'react';
import Carousel from '../Carousel';

function CarouselCover() {
  const [height, setHeight] = useState(600);
  const [width, setWidth] = useState(1650);

  useEffect(()=> {
    if (process.browser) {
      if (window.innerWidth < 800) {
        setHeight(250);
        setWidth(500);
      }
    }
  }, []);

  return (
    <Carousel height={height} width={width}/>
  );
}

export default CarouselCover;
