import { useForm } from "react-hook-form"
import { PortalLayout } from "./portalLayout";
import { useAssignRolesMutation,useRevokeRolesMutation } from "../../store/apiSlice";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Text } from "../global/text";
import toast from "react-hot-toast";
import { Loader } from "../global/btnLoader";
import { ToastError, ToastSucess } from "../global/toast";
export const AssignRoles=()=>{
    const [assignRoles, {isLoading:assignIsLoading}] = useAssignRolesMutation();
    const [revokeRoles, {isLoading:revokeIsLoading}] = useRevokeRolesMutation();
    const[
        assignedPeople,
        setAssignedPeople
    ]=useState([]);

    const[
        person,
        setPerson
    ]=useState("");

    const addToContainer =(e)=>{
        if(e!==""){
            const itemPresent = assignedPeople.includes(e);
            if(itemPresent){
                toast.error("Item already exist",{
                    style:{
                        background:"#fff1f2"
                    }
                })
                return
            } 
            setAssignedPeople((prev)=>{ 
                return[
                    ...prev,
                    e
                ]
            })
        }

    }

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
                value:JSON.stringify(assignedPeople)
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
                ToastSucess(payload?.message)
            }).catch((error)=>{
                const{
                    status,
                    data
                }=error
                ToastError(status,data)
                console.log(error)
            })
        }else{
            revokeRoles(formdata).unwrap().then((payload)=>{
                ToastSucess(payload?.message)
            }).catch((error)=>{
                const{
                    status,
                    data
                }=error
                ToastError(status,data)
                console.log(error)
            })
        }
    }
    return(
        <PortalLayout title={action ==="assign"?"Assign Role":"Revoke Role"}>
            <form 
                onSubmit={handleSubmit(SubmitHandler)}
                className="m-auto py-8 bg-white lg:px-4 xl:px-4 md:px-4 sm:px-2 xs:px-2 lg:w-[40%] xl:w-[40%] md:w-[40%] sm:w-ful xs:w-full"
            >
                <div className="flex flex-col justify-start items-start mb-8">
                    <Text
                        style="text-lg font-medium mb-2 text-start"
                        value="Id's:"
                    />
                    <div>
                        {
                            assignedPeople?.map((peop,index)=>{
                             return(
                                <Text
                                    key={index}
                                    style="text-md text-start font-medium mb-2 text-[#d1d5db]"
                                    value={peop}
                                />
                             )   
                            })
                        }
                    </div>

                </div>
                <div className="flex flex-col items-center  justify-center ">
                    {
                        [
                            {
                                title:"user_ids",
                                labelName:`Please enter user's Id to be ${action}ed`,
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
                                        className="pointer-events-none text-sm font-medium mb-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >{labelName}
                                    </label>
                                    <input
                                        type={type}
                                        required
                                        name={title}
                                        {...register(
                                            `${title}`,
                                            {
                                                onChange:(e)=>{
                                                    setPerson(e.target.value)
                                                }
                                            }
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
                        (assignIsLoading||revokeIsLoading)?(
                            <Loader/>
                        ):(
                            <div className="flex justify-end items-end">
                                <button
                                    type="submit"
                                    data-te-ripple-init
                                    className=" bg-purple w-fit px-8 py-[0.72rem] my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                                    Submit
                                </button>
                                {
                                    person &&(
                                        <button
                                            type="button"
                                            data-te-ripple-init
                                            onClick={()=>addToContainer(person)}
                                            className="ms-8 bg-[#d1d5db] text-black w-fit px-8 py-[0.72rem] my-3 text-xs font-medium uppercase leading-normal inline-block rounded-md leading-normal">
                                        Assign
                                        </button> 
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </form>
        </PortalLayout>
    )
}