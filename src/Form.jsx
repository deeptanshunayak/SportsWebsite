import React from 'react'
import FormfacadeEmbed from "@formfacade/embed-react";


export default function Form() {
  return (
    <div>
      <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/113192116416777457332/form/1FAIpQLSfLvYNfXPWldzPWOIu8LM_eeyzGKxThKFztZVCHHQEMUMXTnQ/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>
    </div>
  )
}
