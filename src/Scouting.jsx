import React,{ useState } from 'react'
import web from './Images/sporter1.png'
import web2 from './Images/sporter.png'
import web1 from './Images/upper.svg'
import web3 from './Images/upper1.svg'
import v from './Images/scouting.png'
export default function Scouting() {
    const [show, setshow]=useState(true);
    const [show1,setshow1]=useState(false);
  return (
    <>
    <div className='overflow1 hero'>
      <h1> <img src={v} className='leftp'></img></h1>
    <div className='d-flex justify-content-center pb-5'>
              <div>
           <button className='button2' onClick={()=>{setshow(true);setshow1(false)}}>&#x2190;</button>
           </div>
           <div className='ps-5'>
           <button className='button2' onClick={()=>{setshow(false);setshow1(true)}}>&#x2192;</button>
           </div>
           </div>
    </div>
      <div className='overflow1 hero bbg'>
        <div class="container pt-5">
          <div className='row pt-5 pb-5'>
            
            
           {show &&
          <div className=''>
               <img src={web1} className='animated ps-5 dd'></img>
               <img src={web3} className='animated  dd1'></img>
          </div>
          }
           {show1 &&
           <img src={web3} className='d-block w-100'></img>}
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
