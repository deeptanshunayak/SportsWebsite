import React from 'react'
import Count from 'react-countup';
import web from './Images/page1.svg'
import web1 from './Images/Item.svg'
import web2 from './Images/Item (1).svg'
import web3 from './Images/Item (2).svg'
import v from './Images/about.png'
export default function About1() {
    return (

        <div className='overflow1'>
            <div className='back1'>
            <div class="container">
            <div className='row pt-3 pb-3'>
                
                <div className='col ps-5'><img src={web1}></img></div> 
                <div className='col pe-5'><p className='text-light'>The Strand, 14 sector Faridabad,Haryana</p></div>   
                <div className='col ps-5'><img src={web2}></img></div>
                <div className='col pe-5'><p className='text-light'>You may send an email,helpus24@gmail.com</p></div>
                <div className='col ps-5'><img src={web3}></img></div>
                <div className='col pe-5'><p className='text-light'>Helpline and support,8857002451</p></div>
            </div>
            </div>
            </div>
            <div class="container">
                <div className='row pt-5'>
                
                        <h1 className=''><img src={v}></img></h1>
                       
                    <div className='col'>

                       
                        <p>The A4SBA  aims to encourage sports all over the country, thus allowing the population to harness the power of sports through its cross-cutting influence, namely,holistic development of children & youth, community development, social integration, gender equality, healthy lifestyle, national pride and economic opportunities related to sports development.</p>
                    </div>
                    <div className='col ps-3'>
                        <img src={web} className='img-fluid'></img>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <h1 className='text-center pt-5 pb-3'>Helping</h1>
                    <div className='col'>
                        <div className='text-center padder'>
                            <div className='circle'>
                                <h1 className='text-center text-light padd'> <Count start={0} end={87} duration={2} delay={3} />% </h1>
                            </div>
                        </div>
                        <p className='pt-3 texter'>Helping 87% of sportspersons who below age of 10</p>
                    </div>
                    <div className='col'>
                        <div className='text-center padder'>
                            <div className='circle'>
                                <h1 className='text-center text-light padd'> <Count start={0} end={50} duration={2} delay={3} />% </h1>
                            </div>
                        </div>
                        <p className='pt-3 texter'>Helping 50% of sportspersons who faces challenges like lack of coaches, equipment and physical infrastructure.</p>
                    </div>
                    <div className='col'>
                        <div className='text-center padder'>
                            <div className='circle'>
                                <h1 className='text-center text-light padd'> <Count start={0} end={87} duration={2} delay={3} />% </h1>
                            </div>
                        </div>
                        <p className='pt-3 texter'>Helping 87% of sportspersons who starts playing after age of 10 which is late for certain sports</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
