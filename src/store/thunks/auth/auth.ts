import { createAsyncThunk } from "@reduxjs/toolkit";
import { iLoginData, iRegisterData } from "../../../components/common/types/auth";
import { instance, instanceAuth } from "../../../utils/axios";

export const loginUser =  createAsyncThunk(
    'auth/login',
    async (data: iLoginData,{rejectWithValue}) => {
        try{


        const user = await instance.post('auth/login', data);
        console.log(user)
        sessionStorage.setItem('token',user.data.token);

        sessionStorage.setItem('name',user.data.user.firstName);
        
        return user.data;


        }catch(error: any){
            if(error.response && error.response.data.message){

                return rejectWithValue(error.response.data.message);

            }else{
                return rejectWithValue(error.message);
            }

        }
    }
)

export const registerUser =  createAsyncThunk(
    'auth/register',
    async (data: iRegisterData,{rejectWithValue}) => {
        try{


        const user = await instance.post('auth/register', data);
        console.log(user)
        sessionStorage.setItem('token',user.data.token);

        sessionStorage.setItem('name',user.data.firstName);
        
        return user.data;


        }catch(error: any){
            if(error.response && error.response.data.message){

                return rejectWithValue(error.response.data.message);

            }else{
                return rejectWithValue(error.message);
            }

        }
    }
)

export const getPublicUserInfo =  createAsyncThunk(
    'auth/get-public-user-info',
    async (_,{rejectWithValue}) => {
        try{


        const user = await instanceAuth.get('auth/get-public-user-info');
        console.log(user.data)
       
        
        return user.data;


        }catch(error: any){
            if(error.response && error.response.data.message){

                return rejectWithValue(error.response.data.message);

            }else{
                return rejectWithValue(error.message);
            }

        }
    }
)

export const updatePublicUserInfo =  createAsyncThunk(
    'users/update',
    async (data : any,{rejectWithValue}) => {
        try{


        const user = await instanceAuth.patch('users',data);
        sessionStorage.setItem('name',user.data.firstName);
       
        
        return user.data;


        }catch(error: any){
            if(error.response && error.response.data.message){

                return rejectWithValue(error.response.data.message);

            }else{
                return rejectWithValue(error.message);
            }

        }
    }
)