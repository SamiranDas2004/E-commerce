import axios from "axios";
import {API_BASE_URL} from '../../config/apiConfig.js'
import {REGISTER_REQUEST,REGISTER_FAILURE,REGISTER_SUCCESS,LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_REQUEST,GET_USER_FAILURE,GET_USER_REQUSEST,GET_USER_SUCCESS, LOGOUT} from './ActionType.js'
const registerRequest=()=>({type:REGISTER_REQUEST})
const registerSuccess=(user)=>({type:REGISTER_SUCCESS,payload:user})
const registerFailure=(error)=>({type:REGISTER_FAILURE,payload:error})
const token=localStorage.getItem("jwt")

export const register=(userData)=>async (dispatch)=>{
dispatch(registerRequest())
    try {
        const response=await axios.post(`${API_BASE_URL}/auth/signup`,userData)
        const user=response.data
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt);
        }
        dispatch(registerSuccess(user.jwt))
    } catch (error) {
        dispatch(registerFailure(error.message ))
    }
}

const loginRequest=()=>({type:LOGIN_REQUEST})
const loginSuccess=(user)=>({type:LOGIN_SUCCESS,payload:user})
const loginFailure=(error)=>({type:LOGIN_FAILURE,payload:error})

export const login=(userData)=>async (dispatch)=>{
    dispatch(loginRequest())
        try {
            const response=await axios.post(`${API_BASE_URL}/auth/signup`,userData)
            const user=response.data
            if(user.jwt){
                localStorage.setItem("jwt",user.jwt);
            }
            dispatch(loginSuccess(user.jwt))
        } catch (error) {
            dispatch(loginFailure(error.message ))
        }
    }


    const userRequest=()=>({type:GET_USER_REQUSEST})
const userSuccess=(user)=>({type:GET_USER_SUCCESS,payload:user})
const userFailure=(error)=>({type:GET_USER_FAILURE,payload:error})


export const response=(userData)=>async (dispatch)=>{
    dispatch(userRequest())
        try {
            const response=await axios.post(`${API_BASE_URL}/api/users/profile`,userData,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            
            const user=response.data
     
            dispatch(userSuccess(user))
        } catch (error) {
            dispatch(userFailure(error.message ))
        }
    }

export const logout=()=>(dispatch)=>{
 dispatch({type:LOGOUT,payload:null})
} 