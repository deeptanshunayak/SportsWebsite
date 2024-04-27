import React, { useState } from 'react'
import web from './Images/upper4.svg'
import web2 from './Images/upper2.svg'
import web1 from './Images/upper6.svg'
import web3 from './Images/upper7.svg'
import web4 from './Images/upper3.svg'
import web5 from './Images/upper5.svg'
import v from './Images/Vector.svg'
import b1 from './Images/arrow.svg'
export default function Scouting() {
  const [show, setshow] = useState(true);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  return (
    <>
      <div className='overflow1 hero'>
        <div class="container pt-5">
          <div className='row pt-5 pb-5'>
            <h1 className=''><img src={v}></img>{show && <span className='district position-absolute pt-5 animated'>Step-1: District Tournament <p className='district1'>School Teams are grouped into different clusters and will compete in Single Leak Cum
              Knockout Tournament.</p></span>}
              {show2 && <span className='district position-absolute pt-5 animated'>Step-3: National Tournament <p className='district1'>State teams are grouped into different zones and will compete in single league cum knock out Tournament</p></span>}
              {show1 && <span className='district position-absolute pt-5 animated'>Step-2: State Tournament <p className='district1'>District Teams are grouped into different regions and will compete in single league cum knockout Tournament</p></span>}</h1>
            <h1 className='position-absolute clear4'>Scouting</h1>

          </div>
        </div>
        <div className='d-flex justify-content-center pb-5'>
          <div>
            <button className='button2' onClick={() => { setshow(true); setshow1(false); setshow2(false) }}>&#9668;</button>
          </div>
          <div className='ps-5'>
            <button className='button2' onClick={() => { setshow(false); setshow1(true); setshow2(false) }}>&#9658;</button>
          </div>
        </div>
      </div>
      <div className='overflow1 hero bbg'>
        <div class="container pt-5">
          <div className='row pt-5 pb-5'>


            {show &&
              <div className=''>
                <img src={web1} className='animated  dd'></img>
                <img src={web3} className='animated  dd1'></img>
              </div>
            }
            {show1 &&
              <div className=''>
                <img src={web2} className='animated  dd'></img>
                <img src={web4} className='animated  dd1'></img>
              </div>}
            {show2 &&
              <div className=''>
                <img src={web} className='animated  dd'></img>
                <img src={web5} className='animated  dd1'></img>
              </div>}
            {/* <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
                <div class="carousel-item active">
                  <img src={web} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={web1} class="d-block w-100" alt="..." />
                </div>

              </div>

            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
