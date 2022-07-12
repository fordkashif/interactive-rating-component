import React from 'react';
import thanksImg from '../../illustration-thank-you.svg';
import './popupSuccess.css'

const PopupSuccess = ({ratingsValue}) => {

    const thankYou = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"

    return (
        <div className='Popup'>
            <div className="imgDiv">
                <img src={thanksImg} alt="thank-you" />
            </div>
            {/* <h1>Popup Success Works</h1> */}
            <div className="cover">
                <p className='orange-text'>You selected {ratingsValue} out of 5</p>
            </div>
            <h1 className='white-text'>Thank you!</h1>
            <p className='white-text'>{thankYou}</p>
        </div>
    );
};

export default PopupSuccess;