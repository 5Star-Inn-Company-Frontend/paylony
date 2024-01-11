import { CreateViewLayout } from "./createAgent"
import { useForm } from "react-hook-form"
import { SaveToLocal_With_navigate } from "./action";
export const PersonalInfo =()=>{
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const SubmitHandler =({
        email,
        password,
        first_name,
        cpassword,
        last_name,
        gender,
        dob
    })=>{
        SaveToLocal_With_navigate(
            {
                email,
                password,
                gender,
                first_name,
                cpassword,
                last_name,
                dob   
            },"/businessInfo"
        ) 
    }
    return(
        <CreateViewLayout title="Personal information">
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                    {
                        [
                            {
                                title:"first_name",
                                labelName:"First Name",
                                type:"text",
                                error:errors.first_name,
                                placeHold:"Enter first Name",

                            },{
                                title:"last_name",
                                labelName:"Last Name",
                                type:"text",
                                error:errors.last_name,
                                placeHold:"Enter last Name"

                            },
                            {
                                title:"email",
                                labelName:"Email",
                                type:"email",
                                error:errors.email,
                                placeHold:"Enter email",

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
    
                            },{
                                title:"cpassword",
                                labelName:"Confirm Password",
                                type:"password",
                                error:errors.cpassword,
                                placeHold:"Confirm password"
    
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
                    <div className="flex flex-col mb-3">
                        <label
                            className={`mb-2 text-sm font-medium text-start`}
                            htmlFor="gender">
                            Gender
                        </label>
                        <select
                            className="text-start rounded-md p-[0.62rem] border text-xs mb-4"
                            name="gender"
                            {...register(
                                `gender`
                            )
                        }
                        >
                    {  
                            [
                                {
                                    name:"Female",
                                    id:"f"
                                },{
                                    name:"Male",
                                    id:"m"
                                }
                            ].map((option,index)=>{
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
                        className=" bg-purple px-12 pb-2.5 pt-3 my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                        Next
                    </button>
                </div>
            </form>
        </CreateViewLayout>
    )
}