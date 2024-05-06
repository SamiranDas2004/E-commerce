import { TextField,Grid, Button } from '@mui/material'
import React from 'react'

function RegisterForm() {

    const handelSubmit=()=>{

    }
  return (
    <div>
        <form onSubmit={handelSubmit}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id='firstName'
            name='firstName'
            label='First Name'
            autoComplete='given-name'
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id='lastName'
            name='lastName'
            label='Last Name'
            autoComplete='last-Name'
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            id='email'
            name='email'
            label='email'
            autoComplete='email'
        />
     
        </Grid>
        <Grid item xs={12} >
        <TextField
            required
            id='password'
            name='password'
            label='Password'
            autoComplete='password'
        />
        </Grid>
        <Grid item xs={12}>
        <Button >
            Register
        </Button>
        </Grid>
        </Grid>
        </form>
    </div>
  )
}

export default RegisterForm