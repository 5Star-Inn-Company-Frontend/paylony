
import { useForm } from "react-hook-form"
import { CreateAccountManagerLayout } from "./createAccountMangerLayout";
import { useCreateManagersMutation } from "../../store/apiSlice";
import toast from "react-hot-toast";
export const LoginDetails =()=>{
    const [createManagers, {isLoading}] = useCreateManagersMutation()
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const SubmitHandler =({
        email,
        password,
        UserName,
        State,
        res_address,
        FirstName,
        cpassword,
        lastName,
        gender,
        date
    })=>{
        
        var formdata = new FormData();
        [
            {
                title:"first_name",
                value:FirstName
            },{
                title:"last_name",
                value:lastName
            },{
                title:"email",
                value:email
            },{
                title:"password",
                value:password
            },{
                title:"password_confirmation",
                value:cpassword
            },{
                title:"dob",
                value:date
            },{
                title:"gender",
                value:gender
            },{
                title:"username",
                value:UserName
            },{
                title:"residential_address",
                value:res_address
            },{
                title:"state",
                value:State
            },
        ].forEach((arr)=>{
            const{
                title,
                value
            }=arr;
            formdata.append(title, value)
        })
        createManagers({
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
        <CreateAccountManagerLayout title="Login Details">
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                    {
                        [
                            {
                                title:"UserName",
                                labelName:"User Name",
                                type:"text",
                                error:errors.UserName,
                                placeHold:"Enter User Name",

                            },{
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

                            },,{
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
    
                            },{
                                title:"date",
                                labelName:"Date",
                                type:"date",
                                error:errors.date,
                                placeHold:"Enter date"

                            },,{
                                title:"res_address",
                                labelName:"Residential Address",
                                type:"text",
                                error:errors.res_address,
                                placeHold:"residential address",
    
                            },{
                                title:"State",
                                labelName:"State",
                                type:"text",
                                error:errors.State,
                                placeHold:"Enter State"
                            },
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
                    <div className="flex flex-col">
                        <label
                            className={`mb-2 text-sm font-medium text-start`}
                            htmlFor="gender">
                            gender
                        </label>
                        <select
                            className="text-start rounded-md py-[0.72rem] border text-xs mb-4"
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
                    {
                        isLoading?(
                            <button
                                type="button"
                                data-te-ripple-init
                                className=" bg-purple w-fit px-8 py-[0.72rem] my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                                Please wait...
                            </button> 
                        ):(
                            <button
                                type="submit"
                                data-te-ripple-init
                                className=" bg-purple w-fit px-8 py-[0.72rem] my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                                Submit
                            </button>
                        )
                    }
                </div>
            </form>
        </CreateAccountManagerLayout>
    )
}