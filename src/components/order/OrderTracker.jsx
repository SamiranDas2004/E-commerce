import React from 'react'
import { Step, StepLabel, Stepper} from '@mui/material'

function OrderTracker({activeStape}) {
const steps=[
    "Placed",
    'orderConfirmed',
    'Shipped',
    "out For Delivey",
    'delivered'
]

  return (
    <div className=' w-full'>
        <Stepper activeStep={activeStape} alternativeLabel>
            {steps.map((label)=> <Step>
                <StepLabel  sx={{ color:'#9155fd', fontSize:"44px"}}>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker