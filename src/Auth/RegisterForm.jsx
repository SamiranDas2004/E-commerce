import { Password } from '@mui/icons-material';
import { TextField,Grid, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const navigate= useNavigate()

        const handelSubmit=(event)=>{
            event.preventDefault();

            const data=new FormData(event.currentTarget);

            const userData={
                firstName:data.get("firstName"),
                lastName:data.get("lastName"),
                email:data.get("email"),
                Password:data.get("password")
            }
            console.log(userData);
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
            fullWidth
            label='email'
            autoComplete='email'
        />
     
        </Grid>
        <Grid item xs={12} >
        <TextField
            required
            fullWidth
            id='password'
            name='password'
            label='Password'
            autoComplete='password'
        />
        </Grid>
        <Grid item xs={12}>
        <Button 
        fullWidth
        className='bg-[#9155FD] w-full'
        type='submit'
        variant='conatained'
        size='large'
        sx={{padding:".8rem 0"}}
        >
            Register
        </Button>
        </Grid>
        </Grid>
        </form>
        <div className='flex justify-center flex-col'>
            <div className='py-3 flex items-center'>
                <p>if you have already account?</p>
                <Button onClick={()=>navigate("/login")} className='ml-5' size='small' >
                Login
                </Button>
            </div>
        </div>
    </div>
  )
}

export default RegisterForm