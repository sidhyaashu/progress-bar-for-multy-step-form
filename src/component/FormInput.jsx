import React from 'react'
import useFormContext from '../hooks/useFormContext'
import Billing from './Billing'
import Optin from './Optin'
import Shipping from './Shipping'


const FormInput = () => {
    const { page } = useFormContext()

    const display ={
        0: <Billing/>,
        1: <Shipping/>,
        2: <Optin/>,
    }

    const content = (
        <div className="form-input">
            {display[page]}
        </div>
    )


  return content
}

export default FormInput
