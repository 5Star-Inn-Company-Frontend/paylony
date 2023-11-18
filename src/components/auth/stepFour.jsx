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

export const StepFour =()=>{
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
        window.location.replace("/register_four")
    }

    return(
        <div className="w-full">
            <Text
                style="text-start text-sm mb-6"
                value="Document Upload"
            />
            <form 
                onSubmit={(e)=>submitHandler(e)}
                className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-8"
            >
                {
                        [
                            {
                                title:"UtilityBill",
                                labelName:"Utility Bill",
                                type:"file",
                                error:errors.UtilityBill,
                                placeHold:"Enter UtilityBill",

                            },{
                                title:"Guarantor",
                                labelName:"Guarantor",
                                type:"file",
                                error:errors.Guarantor,
                                placeHold:"Guarantor",

                            },
                            {
                                title:"IdCard",
                                labelName:"Upload IdCard",
                                type:"file",
                                error:errors.IdCard,
                                placeHold:"Enter Upload Id Card",

                            },{
                                title:"Passport",
                                labelName:"Passport",
                                type:"file",
                                error:errors.file,
                                placeHold:"Passport"

                            }
                        ].map((option,index)=>{
                            const{
                                title,
                                labelName,
                                placeHold,
                                type,
                                error
                            }=option;
                            if(type !=="file"){
                                return(
                                    <div 
                                        className="relative w-full" 
                                        data-te-input-wrapper-init
                                        key={index}
                                    >
                                        <input
                                            type={type}
                                            name={title}
                                            className="text-start peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.52rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            id={`exampleFormControlInput1${index}`}
                                            placeholder={placeHold} />
                                        <label
                                            htmlFor={`exampleFormControlInput1${index}`}
                                            className="text-start text-sm pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                            >{labelName}
                                        </label>
                                    </div>
                                )
                            }else{
                                return(
                                    <div 
                                        className="mb-3 flex flex-col items-start"
                                        key={index}
                                    >
                                        <label
                                            htmlFor={title}
                                            className="text-sm inline-block text-neutral-700 dark:text-neutral-200"
                                            >{labelName}</label
                                        >
                                        <input
                                            required
                                            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                            type={type}
                                            id={title} 
                                        />
                                    </div>
                                )
                            }
                        })
                    }
            <div>
            <button
                type="submit"
                data-te-ripple-init
                className=" bg-purple w-fit px-6 pb-2.5 pt-4 my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                Submit
            </button>
            </div>
        </form>
        </div>
    )
}