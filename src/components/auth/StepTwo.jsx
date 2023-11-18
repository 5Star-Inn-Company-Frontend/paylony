// import { Text } from "../elements/text"
// import { AuthLayout } from "./authLayout"
import { useForm } from "react-hook-form"
// import { InputField } from "./cutormFormField";
import {
    Input,
    initTE,
  } from "tw-elements";
import { useEffect } from "react";
import { Text } from "../global/text";

// import { Btn } from "../elements/btn";
// import { useDispatch, useSelector } from "react-redux";
// import { LogInUser } from "../store/authSlice";

export const StepTwo =()=>{
    // useEffect(()=>{
    //     initTE({ Input });
    // })
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

    const submitHandler =(e)=>{
        e.preventDefault();
        window.location.replace("/register_three")
    }

    return(
        <div className="w-full">
            <Text
                style="text-start text-sm mb-6"
                value="Enter your Business Information"
            />
            <form 
                onSubmit={(e)=>submitHandler(e)}
                className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-8"
            >
                {
                    [
                        {
                            title:"BusinessName",
                            labelName:"Business Name",
                            type:"text",
                            error:errors.BusinessName,
                            placeHold:"Business Name",

                        },{
                            title:"businessAddress",
                            labelName:"Business Address",
                            type:"text",
                            error:errors.businessAddress,
                            placeHold:"Business Address",

                        },{
                            title:"phone",
                            labelName:"Phone Number",
                            type:"tel",
                            error:errors.phone,
                            placeHold:"Phone Number",

                        },{
                            title:"State",
                            labelName:"State",
                            type:"text",
                            error:errors.State,
                            placeHold:"Enter State"

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
                                className="flex flex-col items-start w-full" 
                                data-te-input-wrapper-init
                                key={index}
                            >
                                
                                <label
                                    htmlFor={`exampleFormControlInput1${index}`}
                                    className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >{labelName}
                                </label>
                                <input
                                    type={type}
                                    name={title}
                                    required
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
                type="submit"
                data-te-ripple-init
                className=" bg-purple w-fit px-6 pb-2.5 pt-4 my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                Next
            </button>
            </div>
        </form>
        </div>
    )
}