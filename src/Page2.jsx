import React from 'react'
import Home2 from './Home2'
import Navbar1 from './Navbar1'
import web1 from './Images/Item.svg'
import web2 from './Images/Item (1).svg'
import web3 from './Images/Item (2).svg'
export default function Page2() {
  return (
    <div>
        <Navbar1></Navbar1>
        <div className='back1'>
                <div class="container">
                    <div className='row pt-3 pb-3 '>
                   
                    <div className='col-4'><p className='text-light'><img src={web1}></img>&nbsp;<br className='displayer1'></br>The Strand 14 Sector,<br  className='displayer1'></br>Faridabad,Haryana</p></div>
                      <div className='col-4'><p className='text-light'><img src={web2}></img>&nbsp;<br  className='displayer1'></br>Send an email,<br  className='displayer1'></br>helpus24<br  className='displayer1'></br>@gmail.com</p></div>
                      <div className='col-4'><p className='text-light'><img src={web3}></img>&nbsp;<br  className='displayer1'></br>Helpline and Support-8857002451</p></div>
                    
                    </div>
                    
                </div>
            </div>
      <Home2></Home2>
    </div>
  )
}
