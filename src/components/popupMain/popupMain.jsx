import React from 'react';
import { useState } from 'react';
import star from '../../icon-star.svg';
import './popupMain.css';

const PopupMain = ({ratingsValue, successValue}) => {

    const title = "How did we do?"
    const subtitle = "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!" 
    // const thankYou = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
    const ratings = [
        {id: 1, val: '1'},
        {id: 2, val: '2'},
        {id: 3, val: '3'},
        {id: 4, val: '4'},
        {id: 5, val: '5'},
        ]

    const [isActive, setIsActive] = useState('');

    const submitRating = () => {
        if (!isActive) {
            return
        } else {
            ratingsValue(isActive);
            successValue('true');
            setIsActive('');
        }

    }

    return (
        <div className='Popup'>
        <div className='circle'>
          <img src={star} alt="star"></img>
        </div>
        {/* {divText} */}
        <h1 className="white-text">{title}</h1>
        <p className="white-text">{subtitle}</p>
        <div className="grid">
          {
            ratings.map((val) => (
              <div 
                key={val.id}
                className={isActive === val.id ? 'active-link circle white-text' : 'circle white-text'}
                onClick={() => setIsActive(val.id)}>
                {val.val} 
              </div>
            ))
          }
        </div>
        <button 
        className="submitBtn white-text"
        onClick={submitRating}>Submit</button>
      </div>
    );
};

export default PopupMain;