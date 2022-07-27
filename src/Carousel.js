import React from 'react'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";




const Carousels = () => {
  return (
    <div style={{width:"60%",marginLeft:"20%",marginTop:"2%"}}>
        <Carousel autoplay>
    <div>
      <img alt="" src={image1}/>
    </div>
    <div>
      <img alt="" src={image2} />
    </div>
    <div>
      <img alt="" src={image3}/>
    </div>
    </Carousel>
</div>
   )
}

export default Carousels