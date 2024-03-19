import React from 'react'
import web from './Images/scouting.svg'
export default function Scouting() {
    return (
        <>
            <div className='overflow1'>
                <div class="container pt-5">
                    <div className='row pt-5 pb-5'>
                     <h1>Scouting</h1>
                     <h5 className='ps-4'>Selection Procedure</h5>   
                    <img src={web} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}
