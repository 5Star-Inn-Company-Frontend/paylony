import { useForm } from "react-hook-form"
import { Text } from "../global/text";
import { useDispatch,useSelector } from "react-redux";
import { registerUser } from "../../store/authSlice";
import { useState } from "react";
import { Loader } from "../global/btnLoader";


export const StepFour =()=>{
    const dispatch = useDispatch();
    const{registerStatus} = useSelector((state)=>state.auth);
    const[
        fileInputs,
        setFileInputs
    ]= useState({
        util:null,
        idfront:null,
        idback:null,
        pass:null
    })
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        UtilityBill,
        IdCardFront,
        Passport,
        IdCardBack
    })=>{
        dispatch(registerUser({
            UtilityBill : fileInputs.util,
            IdCardFront : fileInputs.idfront,
            Passport : fileInputs.pass,
            IdCardBack : fileInputs.idback
        }))
    }

    return(
        <div className="w-full">
            <Text
                style="text-start text-sm mb-6"
                value="Document Upload"
            />
            <form 
                onSubmit={handleSubmit(SubmitHandler)} >
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                <div 
                    className="flex flex-col items-start w-full"
                >
                    
                    <label
                        htmlFor={`exampleFormControlInput1`}
                        className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                     >Utility Bill
                    </label>
                    <input
                        type="file"
                        name="UtilityBill"
                        className="text-start peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.52rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id={`exampleFormControlInput1`}
                        onChange ={(e)=>setFileInputs((prev)=>{
                            return{...prev,util:e.target.files[0]}
                        })}
                        />
                </div>
                <div 
                    className="flex flex-col items-start w-full"
                >
                    
                    <label
                        htmlFor={`exampleFormControlInput2`}
                        className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                     >Id Card Front
                    </label>
                    <input
                        type="file"
                        name="IdCardFront"
                        className="text-start peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.52rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id={`exampleFormControlInput2`}
                        onChange ={(e)=>setFileInputs((prev)=>{
                            return{...prev,idfront:e.target.files[0]}
                        })}
                         />
                </div>
                <div 
                    className="flex flex-col items-start w-full"
                >
                    
                    <label
                        htmlFor={`exampleFormControlInput3`}
                        className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                     >Id Card Back
                    </label>
                    <input
                        type="file"
                        name="IdCardBack"
                        className="text-start peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.52rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id={`exampleFormControlInput3`}
                        onChange ={(e)=>setFileInputs((prev)=>{
                            return{...prev,idback:e.target.files[0]}
                        })}
                    />
                </div>
                <div 
                    className="flex flex-col items-start w-full"
                >
                    
                    <label
                        htmlFor={`exampleFormControlInput4`}
                        className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                     >Passport
                    </label>
                    <input
                        type="file"
                        name="Passport"
                        className="text-start peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.52rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id={`exampleFormControlInput4`}
                        onChange ={(e)=>setFileInputs((prev)=>{
                            return{...prev,pass:e.target.files[0]}
                        })}
                         />
                </div>
            </div>
            <div className="flex justify-end items-end">
            {
                registerStatus ==="pending"?(
                    <Loader/> 
                ):(
                    <button
                        type="submit"
                        data-te-ripple-init
                        className=" bg-purple w-fit px-6 pb-2.5 pt-4 my-3 text-xs font-medium leading-normal text-white inline-block rounded-md leading-normal">
                        Submit
                    </button>
                )
            }
            </div>
        </form>
        </div>
    )
}