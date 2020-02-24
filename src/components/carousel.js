/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
require('dotenv').config()

class StreetsCarousel extends Component {
    state = {
        firstSlide: process.env.SOURCE1,
        secondSlide: process.env.SOURCE2,
        thirdSlide: process.env.SOURCE3,
    }
    componentDidMount(){
        this.refresh()
    }
    refresh = () =>{
        setTimeout(this.forceUpdate(),10000)
    }
    render() {
    
        return (
            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={9000}>

                <div id="slide1">
                <iframe height="900"  scrolling="no" title="schedule" src="https://lawrenceks.sharepoint.com/sites/StreetsDisplay/_layouts/15/Doc.aspx?sourcedoc={10f2a30f-d993-42c6-9595-63b16abe36c1}&action=embedview&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True"></iframe>
                </div>
                <div id="slide2">
                <iframe height="900" scrolling="no" title="Four Year Tracking" src="https://lawrenceks-my.sharepoint.com/personal/bwoods_lawrenceks_org/_layouts/15/Doc.aspx?sourcedoc={58e36265-ab24-4bbb-bee3-e588a333ae8e}&action=embedview&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True"></iframe>
                </div>
            </Carousel>
        );
    }
};

export default StreetsCarousel