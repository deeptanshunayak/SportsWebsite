import React from 'react'
import web from './Images/scouting.svg'
import v from './Images/scouting.png'
export default function Scouting() {
    return (
        <>
            <div className='overflow1 hero'>
                <div class="container pt-5">
                    <div className='row pt-5 pb-5'>
                     <h1><img src={v}></img></h1>
                        
                    <img src={web} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}
