import React from 'react';
import './ContentStyle.css';

const Content = (props) => {

  return (
    <div className="homepage-first-area">
    <div className="homepage-first-area-left-side">
        <div className="title homepage-title">
            {props.title}
        </div>

        <div className="subtitle homepage-subtitle">
            {props.description}
        </div>
    </div>  {/* End left-side */}

    <div className="homepage-first-area-right-side">
        <div className="homepage-image-container">
            <div className="homepage-image-wrapper">
                <img
                    src={props.image}
                    alt="about"
                    className="homepage-image"
                />
            </div>
        </div>
    </div> {/* End right-side */}

    </div>  
  )
}

export default Content