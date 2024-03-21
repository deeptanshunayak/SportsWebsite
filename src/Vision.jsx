import React from 'react'
import web from './Images/vision.svg'
import v from './Images/vision.png'
export default function Vision() {
  return (
    <>
    <div className='overflow1'>
        <div className='container pt-5'>
            <div className='row'>
            <h1 className=''><img src={v}></img></h1>
           
                <div className='col pb-3 pt-5'>
               
                    <h4 className='fonter'>To make India stand out as a nation of champions, with sport as in integral ingredient of education. 
                    To help India make winning a habit, to encourage sporting talent and to promote and celebrate success 
                    across wide range of sport.</h4>
                    <h4 className='pt-3 pb-3'><b>We Provide:</b></h4>
                    <p className='alignment fonter'>*&nbsp;Play field development.</p>
                    <p className='alignment fonter'>*&nbsp;Community coaching development.</p>
                    <p className='alignment fonter'>*&nbsp;State level Samarth Bharat Sports Association centres.</p>
                    <p className='alignment fonter'>*&nbsp;Play field development.</p>
                    <p className='alignment fonter'>*&nbsp;Talent search and development.</p>
                    <p className='alignment fonter'>*&nbsp;Utilization and creation / upgradation of sports infrastructure.</p>
                    <p className='alignment fonter'>*&nbsp;Support to national/ state sports academics.</p>
                    <p className='alignment fonter'>*&nbsp;Physical fitness of school children</p>
                    <p className='alignment fonter'>*&nbsp;Sports for women.</p>
                    <p className='alignment fonter'>*&nbsp;Promotion of sports amongst people with disablities.</p>
                    <p className='alignment fonter'>*&nbsp;Promotion of Sports in rural and tribal area</p>

                </div>

                <div className='col'>
                  <div className='ps-5'>
                  <img src={web}></img>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
