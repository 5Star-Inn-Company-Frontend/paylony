// import { Text } from "../elements/text"
// import { AuthLayout } from "./authLayout"
import { useForm } from "react-hook-form"
// import { InputField } from "./cutormFormField";
import { Link} from "react-router-dom";
import { Text } from "../components/global/text";
import { AuthLayout } from "../components/auth/authLayout";
import {
    Input,
    initTE,
  } from "tw-elements";
import { useEffect } from "react";

// import { Btn } from "../elements/btn";
// import { useDispatch, useSelector } from "react-redux";
// import { LogInUser } from "../store/authSlice";

export const SignIn =()=>{
    useEffect(()=>{
        initTE({ Input });
    })
    // const dispatch = useDispatch();
    // const {LoginError,LoginStatus} = useSelector(state=>state.auth);
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    // const SubmitHandler =({
    //     email,
    //     password
    // })=>{
    //     dispatch(LogInUser({
    //         email,
    //         password
    //     }))   
    // }

    const submitHandler =(e)=>{
        e.preventDefault();
        window.location.replace("/")
    }

    return(
        <AuthLayout>
            <Text
                style="text-center text-xl font-medium"
                value="Welcome Admin!"
            />
            <Text
                style="text-center text-sm mb-6"
                value="Access to your Dashboard"
            />
            <form onSubmit={(e)=>submitHandler(e)}>
                {
                    [
                        {
                            title:"email",
                            labelName:"Email",
                            type:"email",
                            error:errors.email,
                            placeHold:"Enter email",

                        },{
                            title:"password",
                            labelName:"Password",
                            type:"password",
                            error:errors.password,
                            placeHold:"Enter password"

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
                                data-te-input-wrapper-init
                                key={index}
                            >
                                
                                <label
                                    for={`exampleFormControlInput1${index}`}
                                    className="pointer-events-none origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-sm text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >{labelName}
                                </label>
                                <input
                                    type={type}
                                    name={title}
                                    className="peer block min-h-[auto] border w-full rounded bg-transparent px-3 py-[0.72rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id={`exampleFormControlInput1${index}`}
                                    placeholder={placeHold} 
                                />
                            </div>
                        )
                })
            }
            <Link to="/reset" className="text-sm">Forgot your password?</Link>
            {/* {LoginError && <Text style="text-danger text-xs" value={LoginError}/>} */}
            <div>
            <button
                type="button"
                data-te-ripple-init
                className=" bg-purple w-full px-6 pb-2.5 pt-4 my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                Login In
            </button>
            </div>
            <div className="flex items-center m-auto w-fit">
                <span className="me-1 text-sm font-medium">Dont have an account?</span>
                <Link to="/register_one" className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">Sigup here?</Link>
            </div>
            </form>
        </AuthLayout>
    )
}