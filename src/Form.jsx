import React from 'react'
import FormfacadeEmbed from "@formfacade/embed-react";


export default function Form() {
  return (
    <div className='overflow1 backer'>
      <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/115577192390460274657/form/1FAIpQLSdTRrHgTGstpE73QZstr3-SgF2cSMM0bnHWuHYRLHv8Q95VLw/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>

    </div>
  )
}
