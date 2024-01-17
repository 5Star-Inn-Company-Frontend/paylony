import { CreateViewLayout } from "./createAgent"
import { useForm } from "react-hook-form"
import { useState } from "react";
import {useCreateAgentMutation} from "../../store/apiSlice"
import { agentStored } from "./action";
import toast from "react-hot-toast";
import { Loader } from "../global/btnLoader";

export const DocUpload =()=>{
    const [createAgent, {isLoading}] = useCreateAgentMutation()
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
    const SubmitHandler =()=>{
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
            last_name,
            idcNumber,
            first_name,
            localG,
            password,
            phone,
            res_address
        }=agentStored;
        var formdata = new FormData();
        formdata.append("id_card_front", fileInputs.idfront)
        formdata.append("utility_bill", fileInputs.util)
        formdata.append("passport_photograph", fileInputs.pass)
        formdata.append("first_name", first_name)
        formdata.append("last_name", last_name)
        formdata.append("email", email)
        formdata.append("password", password)
        formdata.append("password_confirmation", cpassword)
        formdata.append("dob", dob)
        formdata.append("gender", gender)
        formdata.append("business_name", BusinessName)
        formdata.append("business_address", businessAddress)
        formdata.append("business_phone", phone)
        formdata.append("account_name", accName)
        formdata.append("account_number", AccountNumber)
        formdata.append("bvn", bvn)
        formdata.append("bank_id", bank)
        formdata.append("local_government", localG)
        formdata.append("business_state", BState)
        formdata.append("business_type_id", btype)
        formdata.append( "id_card_type_id",id_card_type_id)
        formdata.append("id_card_number",idcNumber)
        formdata.append("residential_address", res_address)
        formdata.append("state", State)
        formdata.append("agent_type", Agent_Type)
        formdata.append("id_card_back", fileInputs.idback)

        createAgent({
            body:formdata
        }).unwrap().then((payload)=>{
            toast.success(payload?.message,{
                style:{
                    background:"#ecfdf5",
                },
                iconTheme:{
                    primary:"#6ee7b7"
                }
            })
        }).catch((error)=>{
            const{
                status,
                data
            }=error
            if(data?.error){
                toast.error(data?.error,{
                    style:{
                        background:"#fff1f2"
                    }
                })
            }else{
                toast.error(data?.message,{
                    style:{
                        background:"#fff1f2"
                    }
                })
            }
            console.log(error)
        })
    }
    return(
        <CreateViewLayout title="Document Upload">
            <form 
                onSubmit={handleSubmit(SubmitHandler)} >
                <div 
                        className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-8"
                >
                <div 
                    className="flex flex-col items-start w-full"
                >
                    
                    <label
                        htmlFor={`exampleFormControlInput1`}
                        className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
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
                        className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
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
                        className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
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
                        className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
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
                isLoading?(
                    <Loader/>
                ):(
                    <button
                        type="submit"
                        data-te-ripple-init
                        className=" bg-purple w-fit px-12 p-[0.72rem] my-3 text-xs font-medium leading-normal text-white inline-block rounded-md leading-normal">
                        Submit
                    </button>
                )
            }
            </div>
        </form>
        </CreateViewLayout>
    )
}