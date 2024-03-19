import React from 'react'
import web from './Images/vision.svg'
export default function Vision() {
  return (
    <>
    <div className='overflow1'>
        <div className='container pt-5'>
            <div className='row'>
                <div className='col pb-3'>
                    <h1 className='pb-4'>Our Vision</h1>
                    <h6>To make India stand out as a nation of champions, with sport as in integral ingredient of education. 
                    To help India make winning a habit, to encourage sporting talent and to promote and celebrate success 
                    across wide range of sport.</h6>
                    <h4 className='pt-3 pb-3'>We Provide:</h4>
                    <p className='alignment'>*&nbsp;Play field development.</p>
                    <p className='alignment'>*&nbsp;Community coaching development.</p>
                    <p className='alignment'>*&nbsp;State level Samarth Bharat Sports Association centres.</p>
                    <p className='alignment'>*&nbsp;Play field development.</p>
                    <p className='alignment'>*&nbsp;Talent search and development.</p>
                    <p className='alignment'>*&nbsp;Utilization and creation / upgradation of sports infrastructure.</p>
                    <p className='alignment'>*&nbsp;Support to national/ state sports academics.</p>
                    <p className='alignment'>*&nbsp;Physical fitness of school children</p>
                    <p className='alignment'>*&nbsp;Sports for women.</p>
                    <p className='alignment'>*&nbsp;Promotion of sports amongst people with disablities.</p>
                    <p className='alignment'>*&nbsp;Promotion of Sports in rural and tribal area</p>

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
