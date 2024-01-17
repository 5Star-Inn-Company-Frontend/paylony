import { useForm } from "react-hook-form"
import { PortalLayout } from "./portalLayout";
import { useUpdateRolesMutation } from "../../store/apiSlice";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Loader } from "../global/btnLoader";
export const UpdateRoles=()=>{
    const [updateRoles, {isLoading}] = useUpdateRolesMutation();
    
    const{
        id
    }=useParams();
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        Name
    })=>{
        var formdata = new FormData();
        formdata.append("name", Name);
        updateRoles({
            id:id,
            name:formdata
        }).unwrap().then((payload)=>{
            toast.success(payload?.message,{
                style:{
                    background:"#ecfdf5",
                },
                iconTheme:{
                    primary:"#6ee7b7"
                }
            })
            window.location.replace("/all_roles");
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
        <PortalLayout title="Update Role">
            <form onSubmit={handleSubmit(SubmitHandler)} className="m-auto py-8 bg-white lg:px-4 xl:px-4 md:px-4 sm:px-2 xs:px-2 lg:w-[40%] xl:w-[40%] md:w-[40%] sm:w-ful xs:w-full">
                <div className="flex flex-col items-center justify-center ">
                    {
                        [
                            {
                                title:"Name",
                                labelName:"Name",
                                type:"text",
                                error:errors.Name,
                                placeHold:"enter the name of the role",

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
                                        className="mb-2 font-medium pointer-events-none text-sm origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
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
                            <Loader/>
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
        </PortalLayout>
    )
}