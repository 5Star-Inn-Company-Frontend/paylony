import { useForm } from "react-hook-form"
import { Text } from "../global/text";
import { SavaToLocal_With_navigate } from "./action";
import {
    useGetAllBanksQuery,
    useGetAllIdCardQuery,
    useGetAllBusinessTypeQuery
} from "../../store/apiSlice"

export const StepThree =()=>{
    const{
        data:bank_Data,
        isLoading:bank_IsLoading,
        isError:bank_IsError,
        error:bank_Error
    }= useGetAllBanksQuery();
    
    const{
        data:id_Data,
        isLoading:id_IsLoading,
        isError:id_IsError,
        error:id_Error
    }= useGetAllIdCardQuery();

    const{
        data:business_Data,
        isLoading:business_IsLoading,
        isError:business_IsError,
        error:business_Error
    }= useGetAllBusinessTypeQuery();

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        AccountNumber,
        accName,
        idcNumber,
        bvn,
        bank,
        btype,
        id_card_type_id
    })=>{
        console.log(bank,id_card_type_id,btype)
        SavaToLocal_With_navigate(
            {
                AccountNumber,
                accName,
                bvn,
                bank,
                id_card_type_id,
                btype,
                idcNumber
            },"/register_four"
        )   
    }

    return(
        <div className="w-full">
            <Text
                style="text-start text-sm mb-6"
                value="Enter your Account Information"
            />
            <form 
                onSubmit={handleSubmit(SubmitHandler)} >
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
               
                {
                    [
                        {
                            title:"AccountNumber",
                            labelName:"Account Number",
                            type:"AccountNumber",
                            error:errors.AccountNumber,
                            placeHold:"Enter Account Number",

                        },{
                            title:"accName",
                            labelName:"AccountName",
                            type:"text",
                            error:errors.accName,
                            placeHold:"AccountName",

                        },{
                            title:"bvn",
                            labelName:"BVN",
                            type:"number",
                            error:errors.bvn,
                            placeHold:"BVN",

                        },{
                            title:"idcNumber",
                            labelName:"ID Card Number",
                            type:"number",
                            error:errors.idcNumber,
                            placeHold:"ID. Card Num",

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
                                    {...register(
                                        `${title}`
                                    )}
                                />
                            </div>
                        )
                })
            }
            <div>
                <div className="flex flex-col mb-3">
                <label
                    className={`mb-2 text-sm font-medium text-start`}
                    htmlFor="id_card_type_id">
                    ID Card Type
                </label>
                <select
                    className="text-start rounded-md p-4 border text-xs mb-4"
                    name="id_card_type_id"
                    required
                    {...register(
                        `id_card_type_id`
                    )
                }
                >
                {  
                    id_Data?.data?.map((option,index)=>{
                        return(
                            <option 
                                value={option.id}
                                    key={index}
                                    >
                                {option.name.toUpperCase()}
                            </option>
                        )
                    })
                }
                </select>
            </div>
            <div className="flex flex-col mb-3">
                <label
                    className={`mb-2 text-sm font-medium text-start`}
                    htmlFor="bank">
                    Bank
                </label>
                <select
                    className="text-start rounded-md p-4 border text-xs mb-4"
                    required
                    name="bank"
                    {...register(
                        `bank`
                    )
                }
                >
                {  
                    bank_Data?.data?.map((option,index)=>{
                        return(
                            <option 
                                value={option.id}
                                    key={index}
                                    >
                                {option.name.toUpperCase()}
                            </option>
                        )
                    })
                }
                </select>
            </div>
            <div className="flex flex-col mb-3">
                <label
                    className={`mb-2 text-sm font-medium text-start`}
                    htmlFor="btype">
                    Business Type
                </label>
                <select
                    className="text-start rounded-md p-4 border text-xs mb-4"
                    required
                    name="btype"
                    {...register(
                        `btype`
                    )
                }
                >
                {  
                    business_Data?.data?.map((option,index)=>{
                        return(
                            <option 
                                value={option.id}
                                    key={index}
                                    >
                                {option.name.toUpperCase()}
                            </option>
                        )
                    })
                }
                </select>
            </div>
            </div>
            <div className="flex justify-end items-end">
                <button
                    type="submit"
                    data-te-ripple-init
                    className=" bg-purple w-fit px-6 pb-2.5 pt-4 my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                    Next
                </button>
            </div>
            </div>
        </form>
        </div>
    )
}