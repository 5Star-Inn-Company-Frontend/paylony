import { DashBoardLayout } from "../global/dashboardLayout"
import { AgentLayout } from "./agentLayout"
import { useEffect } from "react";
import {
  Sidenav,
  Ripple,
  Tab,
  initTE,
  Input
} from "tw-elements";

export const CreateViewLayout =({
    title,
    children
})=>{
     useEffect(() => {
        initTE({ Sidenav, Ripple,Tab,Input });
    });
    return(
        
        <DashBoardLayout>
        <AgentLayout title="Create Agent">
                <div className="flex flex-wrap py-8 w-full bg-white">
                    <div className="lg:w-60 xl:w-60 md:w-60 sm:w-full xs:w-full xxs:w-full  me-4">
                        <ul
                            className="relative m-0 list-none px-[0.2rem]"
                            data-te-sidenav-menu-ref>
                            <li className="relative">
                                <a
                                    className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    href="/personalInfo"
                                    data-te-sidenav-link-ref>
                                    <span
                                        className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                    </span>
                                    <span className={`${title ==="Personal information"?"text-purple":""}`}>Personal information</span>
                                </a>
                            </li>
                            <li className="relative">
                                <a
                                    className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    href="/businessInfo"
                                    data-te-sidenav-link-ref>
                                    <span
                                        className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                        </svg>
                                    </span>
                                    <span className={`${title ==="Business information"?"text-purple":""}`}>Business information</span>
                                </a>
                            </li>
                            <li className="relative">
                                <a
                                    className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    href="/docUpload"
                                    data-te-sidenav-link-ref>
                                    <span
                                        className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                        </svg>
                                    </span>
                                    <span className={`${title ==="Document Upload"?"text-purple":""}`}>Document Upload</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-[75%] xl:w-[75%] md:w-[75%] sm:w-full xs:w-full xxs:w-full">
                        <div className="w-full px-4 ">
                            {children}
                        </div>
                    </div>
                </div>
        </AgentLayout>
        </DashBoardLayout>
    )
}