import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { apiBaseUrl } from './apiBaseUrl';
import toast from 'react-hot-toast';
import Cookies from 'universal-cookie';

export const registerUser = createAsyncThunk(
    'auth/registerUser', 
    async ({
        UtilityBill,
        IdCardFront,
        Passport,
        IdCardBack
    }, {rejectWithValue}) =>{
    try{
        const itemStored = JSON.parse(localStorage.getItem('auth_input_values'));
        const{
            AccountNumber,
            Agent_Type,
            BState,
            BusinessName,
            id_card_type_id,
            State,
            accName,
            bank,
            btype,
            businessAddress,
            bvn,
            cpassword,
            dob,
            gender,
            email,
            firstName,
            idcNumber,
            lastName,
            localG,
            password,
            phone,
            res_address
        }=itemStored;

        
        const response = await axios.post(
            `${apiBaseUrl}auth/register`,{
                "id_card_front" :IdCardFront,
                "utility_bill": UtilityBill,
                "passport_photograph": Passport,
                "first_name":firstName,
                "last_name":lastName,
                "email":email,
                "password":password,
                "password_confirmation":cpassword,
                "dob":dob,
                gender:gender,
                "agent_type":Agent_Type,
                "business_name":BusinessName,
                "business_address":businessAddress,
                "business_phone":phone,
                "account_name":accName,
                "account_number": AccountNumber,
                "bvn":bvn,
                "bank_id":bank,
                "local_government":localG,
                "business_state":BState,
                "business_type_id":btype,
                "id_card_type_id":id_card_type_id,
                "id_card_number":idcNumber,
                "residential_address": res_address,
                "state": State,
                "id_card_back":IdCardBack
            },{
                headers:{
                    "Content-Type": 'multipart/form-data',
                    "Accept":'application/json',

                }
            }
        );
        console.log(response?.data)
        return response?.data
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)

export const LogInUser = createAsyncThunk(
    'auth/LogInUser', 
    async ({
        email,
        password
    },{rejectWithValue}) =>{
        try{
            const response = await axios.post(
                `${apiBaseUrl}auth/login`,{
                    email,
                    password
                }
            );
            return response?.data
        }catch(err){
            return rejectWithValue(
                err.response?.data?.message
            )
        }
    }
)

export const ForgetPassword = createAsyncThunk(
    'auth/ForgetPassword', 
    async ({
        email
    },{rejectWithValue}) =>{
        try{
            const response = await axios.post(
                `${apiBaseUrl}auth/forgot-password`,{
                    email
                }
            );
            return response?.data
        }catch(err){
            const{
                error,
                message
            }=err.response?.data
            console.log(err)
            if(error){
                return rejectWithValue(
                    error
                )
            }
            return rejectWithValue(
                message
            )
        }
    }
)

const auth_Slice = createSlice({
    name:"auth",
    initialState: {
        userdata:localStorage.getItem('paylonyToken') ? JSON.parse(localStorage.getItem('paylonyToken')):{},
        registerStatus:'',
        accountData:{},
        forgetStatus:'',
        registerError:'',
       LoginStatus:'',
       LoginError:'',
       userLoaded:localStorage.getItem('paylonyToken')?true:false,
    },
    reducers:{ 
        logOutUser(state,action){
            localStorage.removeItem('paylonyToken');
            localStorage.removeItem('lastLoginTime')
            window.location.replace("/login");
        }
    },

    extraReducers:(builder)=>{
        
        builder.addCase(registerUser.pending,(state, action)=>{
            return {
                ...state,
                registerStatus:'pending'
            }

        });
        builder.addCase(registerUser.fulfilled,(state, action)=>{
            const{
                message,
            }=action.payload;
            toast.success(message,{
                style:{
                    background:"#ecfdf5",
                },
                iconTheme:{
                    primary:"#6ee7b7"
                }
            })
            window.location.replace("/login")
            console.log(action?.payload)
            return{
                ...state,
                registerStatus:'success'
            }
        })
        builder.addCase(registerUser.rejected,(state, action)=>{
            toast.error(action?.payload,{
                    style:{
                        background:"#fff1f2"
                    }
                })
            return{
                ...state,
                registerStatus:'rejected',
                registerError:action.payload
            }
        })

        builder.addCase(ForgetPassword.pending,(state, action)=>{
            return {
                ...state,
               forgetStatus:'pending'
            }

        });
        builder.addCase(ForgetPassword.fulfilled,(state, action)=>{
            const{
                message,
            }=action.payload;
            toast.success(message,{
                style:{
                    background:"#ecfdf5",
                },
                iconTheme:{
                    primary:"#6ee7b7"
                }
            })
            return{
                ...state,
                forgetStatus:'success'
            }
        })
        builder.addCase(ForgetPassword.rejected,(state, action)=>{
            toast.error(action?.payload,{
                    style:{
                        background:"#fff1f2"
                    }
                })
            return{
                ...state,
                forgetStatus:'rejected'
            }
        })

        builder.addCase(LogInUser.pending,(state, action)=>{
            return {
                ...state,
                LoginStatus:'pending'
             }
        });

        builder.addCase(LogInUser.fulfilled,(state, action)=>{
                const{
                    data,
                    message
                }=action.payload;
                toast.success(message,{
                   style:{
                        background:"#ecfdf5",
                    },
                    iconTheme:{
                        primary:"#6ee7b7"
                    }
                })
                const cookies = new Cookies(null, { path: '/' });
                const expiresIn = new Date(new Date().getTime() + data?.authorization?.expires_in * 60000);
                cookies.set(
                    'paylonyToken', 
                    JSON.stringify(data),
                    {
                        expires: expiresIn
                    }
                )
                localStorage.setItem(
                    'lastLoginTime',
                    new Date()
                )
                if(
                    localStorage.getItem(
                        'lastLoginTime'
                    ) !==null
                ){
                    window.location.replace("/");
                }

                return{
                    ...state,
                    userdata:data,
                    LoginStatus:'success'
                }

        })
        builder.addCase(LogInUser.rejected,(state, action)=>{
           toast.error(action?.payload,{
                    style:{
                        background:"#fff1f2"
                    }
                })
            return{
                ...state,
               LoginStatus:'rejected',
               LoginError:action.payload
            }
        })
    }
})

export const {
    logOutUser
} = auth_Slice.actions;
export default auth_Slice;