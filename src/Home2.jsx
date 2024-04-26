import React, { useState } from 'react'
import FormfacadeEmbed from "@formfacade/embed-react";
import s1 from './Images/1.svg'
import s2 from './Images/2.svg'
import s3 from './Images/3.svg'
import s4 from './Images/4.svg'
import s5 from './Images/5.svg'
import s6 from './Images/6.svg'
import s7 from './Images/7.svg'
import s8 from './Images/8.svg'
import s9 from './Images/9.svg'
import s10 from './Images/10.svg'
import s11 from './Images/11.svg'
import s12 from './Images/12.svg'
import s13 from './Images/13.svg'
import s14 from './Images/54.svg'
import s15 from './Images/15.svg'
import s16 from './Images/16.svg'
import s17 from './Images/17.svg'
import s18 from './Images/18.svg'
import s19 from './Images/19.svg'
import s20 from './Images/20.svg'
import s21 from './Images/21.svg'
import s22 from './Images/22.svg'
import s23 from './Images/23.svg'
import s24 from './Images/24.svg'
import s25 from './Images/25.svg'
const Home2 = () => {
    const [show, setshow]=useState(true);
    const [show1,setshow1]=useState(false);
    const [show2,setshow2]=useState(false);
    const [show3,setshow3]=useState(false);
    const [show4,setshow4]=useState(false);
    return (
        <>
            <div>
                <div className='overflow1 back'>
                    <div class="container pt-5">
                        <div className='row'>
                            <h1 className='text-light text-center'>Sports & Games</h1>
                            <div className='col'>
                                <div className='row zoomb'  onClick={()=>{setshow(true);setshow1(false);setshow2(false);setshow3(false);setshow4(false);}}>
                                    <h3 className='text-light pb-3 ps-3'>Jumps</h3>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s1 }></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s2}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s3}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s4}></img>
                                    </div>
                                    <div className='col text-center'>

                                    </div>
                                    <div className='col text-center'>

                                    </div>
                                    <div className='col text-center'>

                                    </div>
                                    <div className='col text-center'>

                                    </div>


                                </div>
                                <div className='row zoomb' onClick={()=>{setshow(false);setshow1(true);setshow2(false);setshow3(false);setshow4(false)}}>
                                    <h3 className='text-light pt-5 pb-3 ps-3'>Combat</h3>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s5}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s6}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s7}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s8}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s9}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s10}></img>
                                    </div>
                                    <div className='col displayer'>

                                    </div>
                                    <div className='col displayer'>

                                    </div>


                                </div>
                                <div className='row zoomb' onClick={()=>{setshow(false);setshow1(false);setshow2(true);setshow3(false);setshow4(false)}}>
                                    <h3 className='text-light pt-5 pb-3 ps-3'>Throws</h3>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s11}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s12}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s13}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s14}></img>
                                    </div>
                                    <div className='col'>

                                    </div>
                                    <div className='col'>

                                    </div>
                                    <div className='col'>

                                    </div>
                                    <div className='col'>

                                    </div>


                                </div>
                                <div className='row zoomb' onClick={()=>{setshow(false);setshow1(false);setshow2(false);setshow3(false);setshow4(true)}}>
                                    <h3 className='text-light pt-5 pb-3 ps-3'>Field</h3>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s15}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s16}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s17}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s18}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s19}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s20}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s21}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'>
                                        <img src={s22}></img>
                                    </div>
                                    <div className='col ps-4 pt-2'></div>

                                </div>
                                <div className='zoomb' onClick={()=>{setshow(false);setshow1(false);setshow2(false);setshow3(false);setshow4(true)}}>
                                <div className='row' >
                                    <h3 className='text-light pt-5 pb-3 ps-3'>Atheletics Track</h3>
                                    <div className='col'>
                                        <p className='super'> <img src={s23}></img>&nbsp;&nbsp;&nbsp;&nbsp;Sprints-60m,&nbsp;100m,&nbsp;200m,&nbsp;400m <br className='displayer1'></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            Middle Distance-&nbsp;800m,&nbsp;1500m,&nbsp;3000m<br className='displayer1'></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Long Distance-&nbsp;5000m,&nbsp;10000m</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='super'><img src={s24}></img>&nbsp;&nbsp;&nbsp;&nbsp;60m,&nbsp;100m,&nbsp;110m,&nbsp;400m</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='super'><img src={s25}></img>&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;x&nbsp;100m&nbsp;4&nbsp;x&nbsp;400m</p>
                                    </div>
                                </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                { show &&
                <div className='overflow1 backer'>
                    <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/115577192390460274657/form/1FAIpQLSe0SIW-k947cwpG2LMrz_qelZ96xgfDqgXRQs3CmB5_buUlVg/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>





                </div>}
                {show1 &&
                <div className='overflow1 backer'>
                    <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/115577192390460274657/form/1FAIpQLSd7q6OGxgA7utL5X8BJIiKV80jvpXCOpCNNAn_17-VZQ6gkyA/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>








                </div>}
                {show2 &&
                <div className='overflow1 backer'>
                    <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/115577192390460274657/form/1FAIpQLSe5HFw07oOxNUOvzQJfIR64r9uNKtmbVsWTjKtYAPXbqkfG1Q/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>


 </div>}
 {show3 &&
                <div className='overflow1 backer'>
                    <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/115577192390460274657/form/1FAIpQLSfMlCdxfJWN1vPfrQhaYJKKGN9jk0IarvhzETqvyFkps9Rd-g/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>



 </div>}
 {show4 &&
                <div className='overflow1 backer'>
                    <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/115577192390460274657/form/1FAIpQLSezl7jr3IW9qbLEU9Dwo4mXmEtRcMLx5nntazzm7PIlZCniqw/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>



 </div>}
                
            </div>
        </>
    )
}

export default Home2
