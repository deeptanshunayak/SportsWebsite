import React, { useState } from 'react';
import web from './Images/upper4.svg';
import web2 from './Images/upper2.svg';
import web1 from './Images/upper6.svg';
import web3 from './Images/upper7.svg';
import web4 from './Images/upper3.svg';
import web5 from './Images/upper5.svg';
import v from './Images/Vector.svg';

export default function Scouting() {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handlePreviousClick = () => {
    if (show1) {
      setShow1(false);
      setShow(true);
    } else if (show2) {
      setShow2(false);
      setShow1(true);
    }
  };

  const handleNextClick = () => {
    if (show) {
      setShow(false);
      setShow1(true);
    } else if (show1) {
      setShow1(false);
      setShow2(true);
    }
  };

  return (
    <>
      <div className='overflow1 hero'>
        <div class="container pt-5">
          <div className='row pt-5 pb-5'>
            <h1 className=''>
              <img src={v} alt="vector"></img>
              {show && <span className='district position-absolute pt-5 animated'>Step-1: District Tournament <p className='district1'>School Teams are grouped into different clusters and will compete in Single Leak Cum Knockout Tournament.</p></span>}
              {show2 && <span className='district position-absolute pt-5 animated'>Step-3: National Tournament <p className='district1'>State teams are grouped into different zones and will compete in single league cum knockout Tournament</p></span>}
              {show1 && <span className='district position-absolute pt-5 animated'>Step-2: State Tournament <p className='district1'>District Teams are grouped into different regions and will compete in single league cum knockout Tournament</p></span>}
            </h1>
            <h1 className='position-absolute clear4'>Scouting</h1>
          </div>
        </div>
        <div className='d-flex justify-content-center pb-5'>
          <div>
            <button className='button2' onClick={handlePreviousClick}>&#9668;</button>
          </div>
          <div className='ps-5'>
            <button className='button2' onClick={handleNextClick}>&#9658;</button>
          </div>
        </div>
      </div>
      <div className='overflow1 hero bbg'>
        <div class="container pt-5">
          <div className='row  pb-5'>
            {show &&
              <div className=''>
                <img src={web1} className='animated  dd' alt="image1"></img>
                <img src={web3} className='animated  dd1 mb-5' alt="image2"></img>
              </div>
            }
            {show1 &&
              <div className=''>
                <img src={web2} className='animated  dd' alt="image3"></img>
                <img src={web4} className='animated  dd1' alt="image4"></img>
              </div>
            }
            {show2 &&
              <div className=''>
                <img src={web} className='animated  dd' alt="image5"></img>
                <img src={web5} className='animated  dd1 pb-5' alt="image6"></img>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}
