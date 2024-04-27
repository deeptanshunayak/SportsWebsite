import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import web1 from './Images/Brand logo.svg'
import web2 from './Images/i1.svg'
import web3 from './Images/i2.svg'
export default function Bottom() {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block text-white'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='' className='me-4 text-white'>
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a href='' className='me-4 text-white'>
          <MDBIcon fab icon="twitter" />
        </a>
        <a href='' className='me-4 text-white'>
          <MDBIcon fab icon="google" />
        </a>
        <a href='' className='me-4 text-white'>
          <MDBIcon fab icon="instagram" />
        </a>
        <a href='' className='me-4 text-white'>
          <MDBIcon fab icon="linkedin" />
        </a>
        <a href='' className='me-4 text-white'>
          <MDBIcon fab icon="github" />
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon  className="me-3" />
             <img src={web1}></img>
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <button className='button-17'>JOIN NOW</button>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 text-white'>Address</h6>
            <p>
              <a href='#!' className='text-white'>
                Our Address
              </a>
              <br></br>
              <img src={web2}></img> Haryana Faridabad
            </p>
            
            <p>
              <a href='#!' className='text-white'>
                Customer Help
              </a>
              <br></br>
              <img src={web3}></img>02 92 92 16 215 <br></br>+088 11 22 00 77
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 text-white'>Explore Links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Home
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                About us
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Registration
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Contact Us
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Sports
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                T & C
              </a>
            </p>
          </MDBCol>

          
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2021 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        MDBootstrap.com
      </a>
    </div>
  </MDBFooter>
);
  
}
