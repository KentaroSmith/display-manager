/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class FieldCarousel extends Component {
    render() {
    
        return (
            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={9000}>

                <div id="slide1">
                <iframe height="900"  scrolling="no" title="schedule" src="https://picsum.photos/1200/900"></iframe>
                </div>
                <div id="slide2">
                <iframe height="900" scrolling="no" title="Four Year Tracking" src="https://picsum.photos/1200/900"></iframe>
                </div>
                <div id="slide3">
                <iframe height="900" scrolling="no" title="onboarding" src="https://picsum.photos/1200/900"></iframe>
                </div>
            </Carousel>
        );
    }
};

export default FieldCarousel;