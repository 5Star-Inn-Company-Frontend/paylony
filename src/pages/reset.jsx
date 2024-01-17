import { useForm } from "react-hook-form"
import { Link} from "react-router-dom";
import { Text } from "../components/global/text";
import { AuthLayout } from "../components/auth/authLayout";
import {
    Input,
    initTE,
  } from "tw-elements";
import { useDispatch, useSelector } from "react-redux";
import { ForgetPassword } from "../store/authSlice";
import { Loader } from "../components/global/btnLoader";

export const Reset =()=>{
    const dispatch = useDispatch();
    const {forgetStatus} = useSelector(state=>state.auth);
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        email
    })=>{
        dispatch(ForgetPassword({
            email
        }))   
    }

    return(
        <AuthLayout>
            <Text
                style="text-center text-xl font-medium"
                value="Welcome Admin!"
            />
            <Text
                style="text-center text-sm mb-6"
                value="Provide Your Email Address "
            />
            <form onSubmit={handleSubmit(SubmitHandler)}>
                {
                    [
                        {
                            title:"email",
                            labelName:"Email",
                            type:"email",
                            error:errors.email,
                            placeHold:"Enter email",

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
                                className="flex flex-col items-start mb-4 w-full" 
                                key={index}
                            >
                                
                                <label
                                    for={`exampleFormControlInput1${index}`}
                                    className="pointer-events-none origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-sm text-black font-semidold mb-2 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >{labelName}
                                </label>
                                <input
                                    type={type}
                                    name={title}
                                    className="peer block min-h-[auto] border w-full rounded bg-transparent px-3 py-[0.42rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
            {
                forgetStatus ==="pending"?(
                    <Loader full={true}/>  
                ):(
                    <button
                        type="submit"
                        data-te-ripple-init
                        className=" bg-purple w-full text-center px-6 pb-2.5 pt-4 my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                                Send
                    </button>
                )
            }
            </div>
            </form>
        </AuthLayout>
    )
}