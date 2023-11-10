import {
    Input,
    initTE,
    Stepper 
  } from "tw-elements";
import { useEffect } from "react";
import { StepFour } from "./stepFour";
import { StepThree } from "./StepThree";
import { StepTwo } from "./StepTwo";
import { StepOne } from "./stepOne";
import logo from "../../assets/Paylony logo 1.png"
import { Text } from "../global/text";


export const RegisterLayout =()=>{
    useEffect(()=>{
        initTE({ Input,Stepper  });
    })
    

    return(
        <div className="flex flex-col justify-center items-center w-full">
            <div className="mx-auto lg:w-[75%] xl:w-[75%] md:w-[75%] sm:w-full xs:w-full xxs:w-full h-full">
                <div className="mb-4 m-auto w-fit">
                    <img 
                        src={logo}
                        alt="object not found"
                        className="w-18 h-18"
                    />
                </div>
                <Text
                    style="text-center text-xl font-medium"
                    value="Welcome Admin!"
                />
                <Text
                    style="text-center text-sm mb-6"
                    value="Create An Account to get started"
                />
                <ul
                    data-te-stepper-init
                    className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
                    {/* <!--First item--> */}
                    <li
                        data-te-stepper-step-ref
                        data-te-stepper-step-active
                        className="w-[4.5rem] flex-auto">
                        <div
                        data-te-stepper-head-ref
                        className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                        <span
                            data-te-stepper-head-icon-ref
                            className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                            1
                        </span>
                        <span
                            data-te-stepper-head-text-ref
                            className="lg:block xl:block md:block sm:hidden xs:hidden xxs:hidden font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                            Personal Details
                        </span>
                        </div>
                        <div
                        data-te-stepper-content-ref
                        className="absolute w-full px-4 transition-all duration-500 ease-in-out bg-white py-8">
                        <StepOne/>
                        </div>
                    </li>

                    {/* <!--Second item--> */}
                    <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
                        <div
                        data-te-stepper-head-ref
                        className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                        <span
                            data-te-stepper-head-icon-ref
                            className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                            2
                        </span>
                        <span
                            data-te-stepper-head-text-ref
                            className="lg:block xl:block md:block sm:hidden xs:hidden xxs:hidden text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                            Bussiness Information
                        </span>
                        </div>
                        <div
                        data-te-stepper-content-ref
                        className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out bg-white py-8">
                        <StepTwo/>
                        </div>
                    </li>

                    {/* <!--Third item--> */}
                    <li 
                        data-te-stepper-step-ref 
                        className="w-[4.5rem] flex-auto">
                        <div
                        data-te-stepper-head-ref
                        className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                        <span
                            data-te-stepper-head-icon-ref
                            className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                            3
                        </span>
                        <span
                            data-te-stepper-head-text-ref
                            className="lg:block xl:block md:block sm:hidden xs:hidden xxs:hidden text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                            Account Information
                        </span>
                        </div>
                        <div
                        data-te-stepper-content-ref
                        className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out bg-white py-8">
                        <StepThree/>
                        </div>
                    </li>

                    {/* <!--Third item--> */}
                    <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
                        <div
                        data-te-stepper-head-ref
                        className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                        <span
                            data-te-stepper-head-icon-ref
                            className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                            4
                        </span>
                        <span
                            data-te-stepper-head-text-ref
                            className="lg:block xl:block md:block sm:hidden xs:hidden xxs:hidden text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                            Document Upload
                        </span>
                        </div>
                        <div
                        data-te-stepper-content-ref
                        className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out bg-white py-8">
                        <StepFour/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}