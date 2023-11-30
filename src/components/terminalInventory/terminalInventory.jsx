import { useForm } from "react-hook-form"
import {
    Input,
    initTE,
  } from "tw-elements";
import { useEffect } from "react";
import { TerminalLayout } from "./terminalLayout";
import { useCreateTerminalsMutation, useGetAllBusinessTypeQuery } from "../../store/apiSlice";
import { toast } from "react-toastify";
export const AddTerminalInventory=()=>{
    const [createTerminals, {isLoading}] = useCreateTerminalsMutation()
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
    const user = JSON.parse(localStorage.getItem('paylonyToken'))
    console.log("user",user)
    const SubmitHandler =({
        id,
        business_id,
        serial_number,
        pos_type,
        name,
        terminal_sim,
        type,
        balance,
        cashback,
        mid_id,
        statehead,
        aggregator,
        location,
        trans_pin,
        default_pin,
        payout_status,
        payout_fee,
        feeType,
        flatFee,
        feeCent,
        feeCap,
        cta,
        paf,
        feeBearer,
        status,
        date_assigned
    })=>{
        
        var formdata = new FormData();
        [
            {
                title:"id",
                value:id
            },{
                title:"business_id",
                value:user?.business?.id
            },{
                title:"user_id",
                value:user?.id
            },{
                title:"serial_number",
                value:serial_number
            },{
                title:"pos_type",
                value:pos_type
            },{
                title:"name",
                value:name
            },{
                title:"terminal_sim",
                value:terminal_sim
            },{
                title:"type",
                value:type
            },{
                title:"balance",
                value:balance
            },{
                title:"cashback",
                value:cashback
            },{
                title:" mid_id",
                value: mid_id
            },{
                title:"statehead",
                value:statehead
            },{
                title:"aggregator",
                value:aggregator
            },{
                title:"Location",
                value:location
            },{
                title:"trans_pin",
                value:trans_pin
            },{
                title:"default_pin",
                value:default_pin
            },{
                title:"payout_status",
                value:payout_status
            },{
                title:"payout_fee",
                value:payout_fee
            },{
                title:"feeType",
                value:feeType
            },{
                title:"flatFee",
                value:flatFee
            },{
                title:"feeCent",
                value:feeCent
            },{
                title:"feeCap",
                value:feeCap
            },{
                title:"cta",
                value:cta
            },{
                title:"paf",
                value:paf
            },{
                title:"feeBearer",
                value:feeBearer
            },{
                title:"status",
                value:status
            },{
                title:"date_assigned",
                value:date_assigned
            }
        ].forEach((arr)=>{
            const{
                title,
                value
            }=arr;
            formdata.append(title, value)
        })
        createTerminals({
            body:formdata
        }).unwrap().then((payload)=>{
            toast(payload?.message)
        }).catch((error)=>{
            const{
                status,
                data
            }=error
            if(data?.error){
                toast.error(data?.error)
            }else{
             toast.error(data?.message)
            }
            console.log(error)
        })
    }

    return(
        <TerminalLayout title="Terminal">
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                    <div className="flex flex-col mb-3">
                        <label
                            className={`mb-2 text-sm font-medium text-start`}
                            htmlFor="business_id">
                            Business
                        </label>
                        <select
                            className="text-start rounded-md p-4 border text-xs mb-4"
                            name="business_id"
                            {...register(
                                `business_id`
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
                    {
                        [
                            {
                                title:"id",
                                labelName:"id",
                                type:"text",
                                error:errors.id,
                                placeHold:"id",

                            },{
                                title:"serial_number",
                                labelName:"serial_number",
                                type:"text",
                                error:errors.serial_number,
                                placeHold:"Enter serial_number",

                            },{
                                title:"pos_type",
                                labelName:"Pos Type",
                                type:"text",
                                error:errors.pos_type,
                                placeHold:"Enter PosType"

                            },
                            {
                                title:"name",
                                labelName:"name",
                                type:"text",
                                error:errors.name,
                                placeHold:"Enter name",

                            },{
                                title:"balance",
                                labelName:"Balance",
                                type:"number",
                                error:errors.balance,
                                placeHold:""

                            },{
                                title:"terminal_sim",
                                labelName:"terminal_sim",
                                type:"text",
                                error:errors.terminal_sim,
                                placeHold:""

                            },{
                                title:"type",
                                labelName:"type",
                                type:"text",
                                error:errors.type,
                                placeHold:""

                            },{
                                title:"feeBearer",
                                labelName:"feeBearer",
                                type:"text",
                                error:errors.feeBearer,
                                placeHold:""

                            },{
                                title:"cashback",
                                labelName:"cashback",
                                type:"text",
                                error:errors.cashback,
                                placeHold:""

                            },{
                                title:"mid_id",
                                labelName:"mid_id",
                                type:"number",
                                error:errors.mid_id,
                                placeHold:""

                            },{
                                title:"paf",
                                labelName:"paf",
                                type:"text",
                                error:errors.paf,
                                placeHold:""

                            },{
                                title:"feeCap",
                                labelName:"feeCap",
                                type:"text",
                                error:errors.feeCap,
                                placeHold:""

                            },{
                                title:"feeCent",
                                labelName:"feeCent",
                                type:"text",
                                error:errors.feeCent,
                                placeHold:""

                            },{
                                title:"cta",
                                labelName:"cta",
                                type:"text",
                                error:errors.cta,
                                placeHold:""

                            },{
                                title:"status",
                                labelName:"status",
                                type:"text",
                                error:errors.status,
                                placeHold:""

                            },{
                                title:"date_assigned",
                                labelName:"date_assigned",
                                type:"date",
                                error:errors.date_assigned,
                                placeHold:""

                            },{
                                title:"flatFee",
                                labelName:"flatFee",
                                type:"text",
                                error:errors.flatFee,
                                placeHold:""

                            },{
                                title:"payout_fee",
                                labelName:"payout_fee",
                                type:"text",
                                error:errors.payout_fee,
                                placeHold:""

                            },{
                                title:"payout_status",
                                labelName:"payout_status",
                                type:"text",
                                error:errors.payout_status,
                                placeHold:""

                            },{
                                title:"default_pin",
                                labelName:"default_pin",
                                type:"number",
                                error:errors.default_pin,
                                placeHold:""

                            },{
                                title:"trans_pin",
                                labelName:"trans_pin",
                                type:"number",
                                error:errors.trans_pin,
                                placeHold:""

                            },{
                                title:"location",
                                labelName:"location",
                                type:"text",
                                error:errors.location,
                                placeHold:""

                            },{
                                title:"statehead",
                                labelName:"statehead",
                                type:"number",
                                error:errors.statehead,
                                placeHold:""

                            },{
                                title:"aggregator",
                                labelName:"aggregator",
                                type:"number",
                                error:errors.aggregator,
                                placeHold:""

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
                                        required
                                        name={title}
                                        {...register(
                                            `${title}`
                                        )}
                                        className="peer block min-h-[auto] border w-full rounded bg-transparent px-3 py-[0.72rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id={`exampleFormControlInput1${index}`}
                                        placeholder={placeHold} 
                                    />
                                </div>
                            )
                    })
                    }
                </div>
                <div className="flex justify-end items-end">
                    {
                        isLoading?(
                            <button
                                type="button"
                                data-te-ripple-init
                                className=" bg-purple w-fit px-6 pb-2.5 pt-4 my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                                Please wait...
                            </button> 
                        ):(
                            <button
                                type="submit"
                                data-te-ripple-init
                                className=" bg-purple w-fit px-6 pb-2.5 pt-4 my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                                Submit
                            </button>
                        )
                    }
                </div>
            </form>
        </TerminalLayout>
    )
}