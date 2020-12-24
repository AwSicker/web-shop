import React from 'react';
import { Carousel } from 'antd';



export const ItemCarousel = () => {

  return (
    <div>
        <Carousel autoplay>
            <div>
                <h3 className="item-carousel-content">1</h3>
            </div>
            <div>
                <h3 className="item-carousel-content">2</h3>
            </div>
            <div>
                <h3 className="item-carousel-content">3</h3>
            </div>
            <div>
                <h3 className="item-carousel-content">4</h3>
            </div>
        </Carousel>
    </div>
  )
}
