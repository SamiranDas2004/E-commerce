import { Password } from '@mui/icons-material';
import { TextField,Grid, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginForm() {
const navigate=useNavigate()

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
            login
        </Button>
        </Grid>
        </Grid>
        </form>
        <div className='flex justify-center flex-col'>
            <div className='py-3 flex items-center'>
                <p>if you have already account?</p>
                <Button onClick={()=>navigate("/Register")} className='ml-5' size='small' >
                Register
                </Button>
            </div>
        </div>
    </div>
 
  )
}

export default LoginForm