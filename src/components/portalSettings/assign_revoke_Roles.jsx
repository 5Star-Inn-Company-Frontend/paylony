import { useForm } from "react-hook-form"
import { PortalLayout } from "./portalLayout";
import { useAssignRolesMutation,useRevokeRolesMutation } from "../../store/apiSlice";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
export const AssignRoles=()=>{
    const [assignRoles, {isLoading:assignIsLoading}] = useAssignRolesMutation();
    const [revokeRoles, {isLoading:revokeIsLoading}] = useRevokeRolesMutation();
    const{
        id,
        action
    }=useParams();
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        user_ids
    })=>{
        var formdata = new FormData();
        [
            {
                title:"user_ids",
                value:user_ids
            },{
                title:"role_id",
                value:id
            }
        ].forEach((arr)=>{
            const{
                title,
                value
            }=arr;
            formdata.append(title, value)
        })
        if(action === "assign"){
            assignRoles(formdata).unwrap().then((payload)=>{
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
        }else{
            revokeRoles(formdata).unwrap().then((payload)=>{
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
    }
    return(
        <PortalLayout title={action ==="assign"?"Assign Role":"Revoke Role"}>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <div className="flex flex-col items-center m-auto justify-center bg-white">
                    {
                        [
                            {
                                title:"user_ids",
                                labelName:"User Id",
                                type:"text",
                                error:errors.user_ids,
                                placeHold:"enter the user Id",

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
                        (assignIsLoading||revokeIsLoading)?(
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
        </PortalLayout>
    )
}