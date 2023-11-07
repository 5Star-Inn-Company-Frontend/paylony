import { useNavigate } from "react-router-dom";
import { DashBoardLayout } from "../global/dashboardLayout"
import { AgentLayout } from "./agentLayout"

export const CreateAccountManagerLayout =({
    title,
    children
})=>{
    const navigate = useNavigate();
    return(
        
        <DashBoardLayout>
        <AgentLayout title="Create Account manger">
                <div className="flex flex-wrap bg-white py-8 w-full">
                    <div className="lg:w-60 xl:w-60 md:w-60 sm:w-full xs:w-full xxs:w-full  me-4">
                        <ul
                            className="relative m-0 list-none px-[0.2rem]"
                            data-te-sidenav-menu-ref>
                            <li className="relative">
                                <a
                                    className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    href="/userDetails"
                                    data-te-sidenav-link-ref>
                                    <span
                                    className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={`${title ==="User Details"?"#854FFF":"currentColor"}`} className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                    </span>
                                    <span className={`${title ==="User Details"?"text-purple":""}`}>User Details</span>
                                </a>
                            </li>
                            <li className="relative">
                                <a
                                    className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    href="/loginDetails"
                                    data-te-sidenav-link-ref>
                                    <span
                                    className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={`${title ==="Login Details"?"#854FFF":"currentColor"}`} className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                    </span>
                                    <span className={`${title ==="Login Details"?"text-purple":""}`}>Login Details</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-[75%] xl:w-[75%] md:w-[75%] sm:w-full xs:w-full xxs:w-full">
                        <div className="w-full px-4">
                            {children}
                        </div>
                    </div>
                </div>
        </AgentLayout>
        </DashBoardLayout>
    )
}