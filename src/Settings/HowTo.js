import React, {useState, useEffect, Fragment} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import Pic1 from './action1.jpg'
// import Pic2 from './action2.jpg'
// import Pic3 from './action3.webp'
import Modal from 'react-modal';
import Filt2 from '../Images/Tutorial/tut-filt-2red.png';
import Filt4 from '../Images/Tutorial/tut-filt-3best.png';
import Drag1 from '../Images/Tutorial/drag3.png';
import Drag2 from '../Images/Tutorial/drag-sub2.png';
import Order1 from '../Images/Tutorial/order2.png';
import Order2 from '../Images/Tutorial/notice-with-arrow.png';
//var Carousel = require('react-responsive-carousel').Carousel;

export const HowTo = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const TheCarousel = () => {
    return(
      <div className="carousel-wrap ">
        <Carousel 
          showArrows={true} 
          showStatus={false}
          showThumbs={false}
          
          dynamicHeight={true}
          useKeyboardArrows={true}
          infiniteLoop={true}
          >
          <div>
            <img src={Drag2} />            
            <p className="legend">Categorize & order your subscriptions</p>
          </div>
          <div>
          <img src={Drag1} />
            <p className="legend">Categorize & order your subscriptions</p>
          </div>
          <div>
            <img src={Filt2} />
            <p className="legend">Choose the min or max of a subscription's videos</p>
          </div>
          {/* <div>
            <img src={Filt1} />
          </div> */}
          <div>
            <img src={Filt4} />
            <p className="legend">Choose the min or max of a subscription's videos</p>
          </div>
          <div>
            <img src={Order1} />
            <p className="legend">Loading order - right side first</p>
          </div>
          <div>
            <img src={Order2} />
            <p className="legend">Loading order </p>
          </div>
        </Carousel>
      </div>
    )
  }

  return(
    <Fragment>
        {/* Modal Trigger */}
      <div className='set-howto2 valign-wrapper'> 
       <i className="set-howto-aux  z-depth-0 material-icons"
          onClick={() => { setIsModalOpen(true);  }}>info_outline</i>
        
        {/* <a
          className="btn filt-button z-depth-0"
          onClick={() => { setIsModalOpen(true);  } }
        >
          How to
        </a> */}
      </div>

      {/* Modal Content */}
      <Modal 
        isOpen={isModalOpen}
        onRequestClose={() => {setIsModalOpen(false)} }
        shouldCloseOnEsc={ true}
        className="Modal "
        overlayClassName="Overlay"
      >
        {/* Idk if this is hacky, but solves a mem-leak . "To fix, cancel all subscriptions and async..." */}
        {isModalOpen ? <TheCarousel/> : null }
      </Modal>
    </Fragment>
    );
  }