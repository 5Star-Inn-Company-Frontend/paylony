import { useForm } from "react-hook-form"
import { CreateAccountManagerLayout } from "./createAccountMangerLayout";
export const UserDetails =()=>{
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    return(
        <CreateAccountManagerLayout title="User Details">
            <form onSubmit={()=>e.preventDefault()}>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                    {
                        [
                            {
                                title:"FirstName",
                                labelName:"FirstName",
                                type:"text",
                                error:errors.FirstName,
                                placeHold:"Enter FirstName",

                            },{
                                title:"lastName",
                                labelName:"lastName",
                                type:"text",
                                error:errors.lastName,
                                placeHold:"Enter lastName"

                            },
                            {
                                title:"email",
                                labelName:"Email",
                                type:"email",
                                error:errors.email,
                                placeHold:"Enter email",

                            },{
                                title:"date",
                                labelName:"Date",
                                type:"date",
                                error:errors.date,
                                placeHold:"Enter date"

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
                                    className="pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black font-medium mb-2 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
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
                <div>
                    <button
                        type="button"
                        data-te-ripple-init
                        className=" bg-purple w-full px-8 py-[0.72rem] my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                        Submit
                    </button>
                </div>
            </form>
        </CreateAccountManagerLayout>
    )
}