import React from 'react'
import Count from 'react-countup';
import web from './Images/Leader.svg'
import leader from './Images/Leader1.svg'
import web1 from './Images/Item.svg'
import web2 from './Images/Item (1).svg'
import web3 from './Images/Item (2).svg'
import v from './Images/Vector.svg'
export default function About1() {
    return (

        <div className='overflow1 hero'>
            <div className='back1'>
                <div class="container">
                    <div className='row pt-3 pb-3 '>
                   
                    <div className='col-4'><p className='text-light'><img src={web1}></img>&nbsp;<br className='displayer1'></br>The Strand 14 Sector,<br  className='displayer1'></br>Faridabad,Haryana</p></div>
                      <div className='col-4'><p className='text-light'><img src={web2}></img>&nbsp;<br  className='displayer1'></br>Send an email,<br  className='displayer1'></br>helpus24<br  className='displayer1'></br>@gmail.com</p></div>
                      <div className='col-4'><p className='text-light'><img src={web3}></img>&nbsp;<br  className='displayer1'></br>Helpline and Support-8857002451</p></div>
                    
                    </div>
                    
                </div>
            </div>
            <div class="container">
                <div className='row pt-5'>

                    <h1 className='pb-5'><img src={v} className=''></img></h1>
                    <h1 className='clear2 position-absolute'>Our Leadership</h1>

                    <div className='col p1 pt-5'>
                    <img src={web} className=''></img>

                        
                    </div>
                    <div className='col text-align1 pt-5'>
                        <img src={leader} className=''></img>
                    </div>
                </div>
                <h1 className='pt-5 get2'><b>Our leader’s message</b></h1>
                <h3 className='ps-5 pt-5 pb-5 get1'>As leaders, we recognize the hurdles students face and stand ready to support and guide them. Embrace challenges, stay focused, and believe in your potential. You're not alone in this journey—we're here to champion your success and empower you to achieve your dreams. Let's create a community where every student thrives and shines.</h3>
                <div className='row align-items-center'>
                    <h1 className='text-center pt-5 pb-3'>Helping</h1>
                    <div className='col'>
                        <div className='text-center padder1'>
                            <div className='circle'>
                                <h1 className='text-center text-light padd'> <Count start={0} end={87} duration={2} delay={3} />% </h1>
                            </div>
                        </div>
                        <p className='pt-3 texter text-center'>Helping 87% of sportspersons who below age of 10</p>
                        <br></br>
                    </div>
                    <div className='col'>
                        <div className='text-center padder1'>
                            <div className='circle'>
                                <h1 className='text-center text-light padd'> <Count start={0} end={50} duration={2} delay={3} />% </h1>
                            </div>
                        </div>
                        <p className='pt-3 texter text-center'>Helping 50% of sportspersons who faces challenges like lack of coaches, equipment and physical infrastructure.</p>
                    </div>
                    <div className='col'>
                        <div className='text-center padder1'>
                            <div className='circle'>
                                <h1 className='text-center text-light padd'> <Count start={0} end={87} duration={2} delay={3} />% </h1>
                            </div>
                        </div>
                        <p className='pt-3 texter text-center'>Helping 87% of sportspersons who starts playing after age of 10 which is late for certain sports</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
