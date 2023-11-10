// import { Text } from "../elements/text"
// import { AuthLayout } from "./authLayout"
import { useForm } from "react-hook-form"
// import { InputField } from "./cutormFormField";
import { Link} from "react-router-dom";
import { Text } from "../components/global/text";
import { AuthLayout } from "../components/auth/authLayout";
import {
    Input,
    initTE,
  } from "tw-elements";
import { useEffect } from "react";

// import { Btn } from "../elements/btn";
// import { useDispatch, useSelector } from "react-redux";
// import { LogInUser } from "../store/authSlice";

export const Reset =()=>{
    useEffect(()=>{
        initTE({ Input });
    })
    // const dispatch = useDispatch();
    // const {LoginError,LoginStatus} = useSelector(state=>state.auth);
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    // const SubmitHandler =({
    //     email,
    //     password
    // })=>{
    //     dispatch(LogInUser({
    //         email,
    //         password
    //     }))   
    // }

    return(
        <AuthLayout>
            <Text
                style="text-center text-2xl font-semibold "
                value="Password Reset!"
            />
            <Text
                style="font-light text-center text-lg mb-6"
                value="Enter your details"
            />
            <form onSubmit={()=>e.prevntDefault()}>
                {
                    [
                        {
                            title:"email",
                            labelName:"Email",
                            type:"email",
                            error:errors.email,
                            placeHold:"Enter email",

                        }
                    ].map((option,index)=>{
                        const{
                            title,
                            labelName,
                            placeHold,
                            type,
                            error
                        }=option;
                        return(
                            <div 
                                className="flex flex-col items-start mb-4 w-full" 
                                data-te-input-wrapper-init
                                key={index}
                            >
                                
                                <label
                                    for={`exampleFormControlInput1${index}`}
                                    className="pointer-events-none mb-3 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >{labelName}
                                </label>
                                <input
                                    type={type}
                                    name={title}
                                    className="peer block min-h-[auto] border w-full rounded bg-transparent px-3 py-[0.72rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id={`exampleFormControlInput1${index}`}
                                    placeholder={placeHold} 
                                />
                            </div>
                        )
                })
            }
            <div>
            <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-purple w-full px-6 pb-2.5 pt-4 my-3 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Reset
            </button>
            </div>
            </form>
        </AuthLayout>
    )
}