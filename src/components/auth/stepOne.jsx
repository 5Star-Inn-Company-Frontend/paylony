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

export const StepOne =()=>{
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

    const submitHandler =(e)=>{
        e.preventDefault();
        window.location.replace("/")
    }

    return(
        <>
            <Text
                style="text-start text-lg mb-6"
                value="Enter your personal Information"
            />
            <form 
                onSubmit={(e)=>submitHandler(e)}
                className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4"
            >
                {
                    [
                        {
                            title:"email",
                            labelName:"Email",
                            type:"email",
                            error:errors.email,
                            placeHold:"Enter email",

                        },{
                            title:"firstName",
                            labelName:"First Name",
                            type:"text",
                            error:errors.firstName,
                            placeHold:"First Name",

                        },{
                            title:"lastName",
                            labelName:"Last Name",
                            type:"text",
                            error:errors.lastName,
                            placeHold:"Last Name",

                        },{
                            title:"dob",
                            labelName:"Date Of Birth",
                            type:"date",
                            error:errors.dob,
                            placeHold:"Date Of Birth",

                        },{
                            title:"password",
                            labelName:"Password",
                            type:"password",
                            error:errors.password,
                            placeHold:"Enter password"

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
              data-te-stepper-head-ref
                type="button"
                data-te-ripple-init
                className=" bg-purple w-fit px-6 py-3 my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                Next
            </button>
            </div>
        </form>
        </>
    )
}