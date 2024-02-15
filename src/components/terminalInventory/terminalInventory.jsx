import { useForm } from "react-hook-form"
import { TerminalLayout } from "./terminalLayout";
import { useCreateTerminalsMutation, useGetAllAggregatorsQuery, useGetAllBusinessTypeQuery } from "../../store/apiSlice";
import { Loader } from "../global/btnLoader";
import { ToastError, ToastSucess } from "../global/toast";

export const AddTerminalInventory=()=>{
    const [createTerminals, {isLoading}] = useCreateTerminalsMutation();

    // const{
    //     data:business_Data,
    //     isLoading:business_IsLoading,
    //     isError:business_IsError,
    //     error:business_Error
    // }= useGetAllBusinessTypeQuery();
    const{
        data:aggregatorsData
    }= useGetAllAggregatorsQuery();
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const user = JSON.parse(localStorage.getItem('paylonyToken'))
    const SubmitHandler =({
        serial_number,
        pos_type,
        name,
        terminal_sim,
        type,
        balance,
        statehead,
        aggregator,
        location,
        payout_status,
        payout_fee,
        feeType,
        flatFee,
        feeCent,
        feeCap,
        paf,
        feeBearer,
        aggregators,
        status,
    })=>{
        
        var formdata = new FormData();
        [
            {
                title:"aggregator",
                value:aggregators
            },
           {
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
                title:"statehead",
                value:statehead
            },{
                title:"Location",
                value:location
            },{
                title:"payout_status",
                value:!payout_status?"":payout_status
            },{
                title:"payout_fee",
                value:!payout_fee?"20":payout_fee
            },{
                title:"feeType",
                value:feeType
            },{
                title:"flatFee",
                value:!flatFee?"100":flatFee
            },{
                title:"feeCent",
                value:feeCent
            },{
                title:"feeCap",
                value:!feeCap?"100":feeCap
            },{
                title:"paf",
                value:!paf ?"50":paf
            },{
                title:"feeBearer",
                value:feeBearer
            },{
                title:"status",
                value:status
            },
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
            ToastSucess(payload?.message);
        }).catch((error)=>{
            const{
                status,
                data
            }=error
            ToastError(status,data)
            console.log(error)
        })
    }

    return(
        <TerminalLayout title="Terminal">
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                    <div className="flex flex-col">
                        <label
                            className={`mb-2 text-sm font-medium text-start`}
                            htmlFor="pos_type">
                            Pos Type 
                        </label>
                        <select
                            required
                            className="text-start rounded-md py-[0.72rem] border text-xs"
                            name="pos_type"
                            {...register(
                                `pos_type`
                            )
                        }
                        >
                            <option value={"MP35P"}>MP35P</option>
                            <option value={"K11"}>K11</option>
                            <option value={"T1"}>T1</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className={`mb-2 text-sm font-medium text-start`}
                            htmlFor="status">
                            Status
                        </label>
                        <select
                            required
                            className="text-start rounded-md py-[0.72rem] border text-xs"
                            name="status"
                            {...register(
                                `status`
                            )
                        }
                        >
                            <option value={"active"}>active</option>
                            <option value={"inactive"}>inactive</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className={`mb-2 text-sm font-medium text-start`}
                            htmlFor="payout_status">
                            Payout Status
                        </label>
                        <select
                            required
                            className="text-start rounded-md py-[0.72rem] border text-xs"
                            name="payout_status"
                            {...register(
                                `payout_status`
                            )
                        }
                        >
                            <option value={"1"}>enable</option>
                            <option value={"0"}>disable</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className={`mb-2 text-sm font-medium text-start`}
                            htmlFor="bills_status">
                            Bills Status
                        </label>
                        <select
                            required
                            className="text-start rounded-md py-[0.72rem] border text-xs"
                            name="bills_status"
                            {...register(
                                `bills_status`
                            )
                        }
                        >
                            <option value={"1"}>enable</option>
                            <option value={"0"}>disable</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className={`mb-2 text-sm font-medium text-start`}
                            htmlFor="card_transfer_status">
                            Card Transfer Status
                        </label>
                        <select
                            required
                            className="text-start rounded-md py-[0.72rem] border text-xs"
                            name="card_transfer_status"
                            {...register(
                                `card_transfer_status`
                            )
                        }
                        >
                            <option value={"1"}>enable</option>
                            <option value={"0"}>disable</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className={`mb-2 text-sm font-medium text-start`}
                            htmlFor="feeBearer">
                            Payout Status
                        </label>
                        <select
                            required
                            className="text-start rounded-md py-[0.72rem] border text-xs"
                            name="feeBearer"
                            {...register(
                                `feeBearer`
                            )
                        }
                        >
                            <option value={"agent"}>agent</option>
                            <option value={"customer"}>customer</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className={`mb-2 text-sm font-medium text-start`}
                            htmlFor="feeType">
                            Fee Type
                        </label>
                        <select
                            required
                            className="text-start rounded-md py-[0.72rem] border text-xs"
                            name="feeType"
                            {...register(
                                `feeType`
                            )
                        }
                        >
                            <option value={"percent"}>percent</option>
                            <option value={"flat"}>flat</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className={`mb-2 text-sm font-medium text-start`}
                            htmlFor="type">
                            Type
                        </label>
                        <select
                            required
                            className="text-start rounded-md py-[0.72rem] border text-xs"
                            name="type"
                            {...register(
                                `type`
                            )
                        }
                        >
                            <option value={"agent"}>agent</option>
                            <option value={"merchant"}>merchant</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className={`mb-2 text-sm font-medium text-start`}
                            htmlFor="aggregators">
                            Aggregators
                        </label>
                        <select
                            required
                            className="text-start rounded-md py-[0.72rem] border text-xs"
                            name="aggregators"
                            {...register(
                                `aggregators`
                            )
                        }
                        >
                        {  
                            aggregatorsData?.data?.map((option,index)=>{
                                return(
                                    <option 
                                        value={option.id}
                                            key={index}
                                            >
                                        {option.first_name.toUpperCase()}
                                    </option>
                                )
                            })
                        }
                        </select>
                    </div>
                    {
                        [
                            {
                                title:"serial_number",
                                labelName:"Serial Number",
                                type:"text",
                                required:true,
                                error:errors.serial_number,
                                placeHold:"Enter serial_number",

                            },
                            {
                                title:"name",
                                labelName:"Name",
                                required:true,
                                type:"text",
                                error:errors.name,
                                placeHold:"Enter name",

                            },{
                                title:"balance",
                                labelName:"Balance",
                                required:true,
                                type:"number",
                                error:errors.balance,
                                placeHold:""

                            },{
                                title:"terminal_sim",
                                required:false,
                                labelName:"Terminal Sim",
                                type:"text",
                                error:errors.terminal_sim,
                                placeHold:""

                            },{
                                title:"paf",
                                labelName:"Paf",
                                required:false,
                                type:"text",
                                error:errors.paf,
                                placeHold:"50"

                            },{
                                title:"feeCap",
                                labelName:"Fee Cap",
                                type:"text",
                                required:false,
                                error:errors.feeCap,
                                placeHold:"100"

                            },{
                                title:"feeCent",
                                labelName:"Fee Cent",
                                required:true,
                                type:"text",
                                error:errors.feeCent,
                                placeHold:""

                            },{
                                title:"flatFee",
                                required:false,
                                labelName:"Flat Fee",
                                type:"text",
                                error:errors.flatFee,
                                placeHold:"100"

                            },{
                                title:"payout_fee",
                                labelName:"Payout fee",
                                required:false,
                                type:"number",
                                error:errors.payout_fee,
                                placeHold:"20"

                            },{
                                title:"location",
                                required:true,
                                labelName:"Location",
                                type:"text",
                                error:errors.location,
                                placeHold:""

                            },{
                                title:"statehead",
                                labelName:"State Head",
                                type:"number",
                                required:false,
                                error:errors.statehead,
                                placeHold:""

                            }
                        ].map((option,index)=>{
                            const{
                                title,
                                labelName,
                                placeHold,
                                required,
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
                                        className="mb-2 pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black font-medium transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >{labelName}
                                    </label>
                                    <input
                                        type={type}
                                        required={required}
                                        name={title}
                                        {...register(
                                            `${title}`
                                        )}
                                        className="peer block min-h-[auto] border w-full rounded bg-transparent px-3 py-[0.42rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
                            <Loader/> 
                        ):(
                            <button
                                type="submit"
                                data-te-ripple-init
                                className=" bg-purple w-fit px-8  py-[0.72rem] my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                                Submit
                            </button>
                        )
                    }
                </div>
            </form>
        </TerminalLayout>
    )
}