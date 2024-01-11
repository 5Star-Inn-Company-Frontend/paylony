import { useCreateAggregatorsMutation } from "../../store/apiSlice";
import { useForm } from "react-hook-form"
import { DisburseMentLayout } from "./layout";
export const DisBursementForm =()=>{
    const [createAggregators, {isLoading}] = useCreateAggregatorsMutation()
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const SubmitHandler =({
        Remarks,
        password,
        Amount,
    })=>{
        var formdata = new FormData();
        [
            {
                title:"remark",
                value: Remarks
            },{
                title:"password",
                value:password
            },{
                title:"amount",
                value: Amount
            }
        ].forEach((arr)=>{
            const{
                title,
                value
            }=arr;
            formdata.append(title, value)
        })
        createAggregators({
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
        <DisburseMentLayout title="Disbursement">
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <div className="flex flex-col lg:w-[50%] xl:w-[50%] md:w-[50%] sm:w-full xs:w-full">
                    {
                        [
                            {
                                title:"Amount",
                                labelName:"Amount",
                                type:"number",
                                error:errors.Amount,
                                placeHold:"Enter Amount",

                            },{
                                title:"Password",
                                labelName:"Password",
                                type:"password",
                                error:errors.Password,
                                placeHold:"Enter Password"

                            },
                            {
                                title:"Remarks",
                                labelName:"Remarks",
                                type:"text",
                                error:errors.Remarks,
                                placeHold:"Enter remarks",

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
                                        className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black mb-2 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >{labelName}
                                    </label>
                                    <input
                                        type={type}
                                        required
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
                            <button
                                type="button"
                                data-te-ripple-init
                                className=" bg-purple w-fit px-12 p-[0.72rem] my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                                Please wait...
                            </button> 
                        ):(
                            <button
                                type="submit"
                                data-te-ripple-init
                                className=" bg-purple w-fit px-12 p-[0.72rem] my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                                Submit
                            </button>
                        )
                    }
                </div>
            </form>
        </DisburseMentLayout>
    )
}