/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class FieldCarousel extends Component {
    render() {
    
        return (
            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={90000}>

                <div id="slide1">
                <iframe height="900"  scrolling="no" title="Four Year tracking" src="https://lawrenceks-my.sharepoint.com/personal/bwoods_lawrenceks_org/_layouts/15/Doc.aspx?sourcedoc={58e36265-ab24-4bbb-bee3-e588a333ae8e}&action=embedview&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True"></iframe>
                </div>
                <div id="slide2">
                <iframe height="900" scrolling="yes" title="On Call" src="https://lawrenceks.sharepoint.com/sites/utilities_spvrsmgrs/_layouts/15/Doc.aspx?sourcedoc={c71437e5-ce85-46b8-af56-7337d56d36c2}&action=embedview&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True"></iframe>
                </div>
                <div id="slide3">
                <iframe height="900" scrolling="no" title="Shift Schedule" src="https://lawrenceks.sharepoint.com/sites/utilities_spvrsmgrs/_layouts/15/Doc.aspx?sourcedoc={582abd4f-f906-4d8c-ae4b-6fabe879576e}&action=embedview&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True"></iframe>
                </div>
            </Carousel>
        );
    }
};

export default FieldCarousel;