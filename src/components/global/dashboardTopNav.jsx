import { Text } from "./text"
import logo from "../../assets/Paylony logo 1.svg"
export const DashBoardTopNav =()=>{
    const user = JSON.parse(localStorage.getItem('paylonyToken'))
    console.log(user)
    return(
        <div className="flex flex-row justify-between w-full py-4 px-4 items-center bg-white">
            <div className="flex items-center">
                <div className="me-2 hamburger p-2 rounded-full">
                    <div
                        id="toggler"
                        className="inline-block text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:shadow-lg  active:shadow-lg"
                        data-te-sidenav-toggle-ref
                        data-te-target="#full-screen-example"
                        data-te-ripple-init>
                        <span className="block ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            className="h-5 w-5">
                            <path
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                             />
                        </svg>
                        </span>
                    </div>
                </div>
                <div>
                    <img 
                        src={logo}
                        alt="object not found"
                        className="h-12"
                    />
                </div>
            </div>
            <div className="ms-2 flex flex-row items-center justify-between items-center xl:w-[83%] lg:w-[83%] md:w-[83%] sm:w-[70%] xs:w-[70%] xxs:w-[70%]">
                <div className="w-fit ">
                    <Text
                        style="text-xs text-start text-purple-700 font-semibold"
                        value="Welcome"
                    />
                    <Text
                        style="lg:text-lg xl:text-lg md:text-lg sm:text-md xs:text-md text-start text-black font-semibold"
                        value="Hello Admin"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <div
                        className="me-2 hidden-arrow flex items-center text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        role="button">
                        <span className="[&>svg]:w-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeliinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.970 8.970 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.970 8.970 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </span>
                        <span
                            className="absolute -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white"
                        >1
                        </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9ca3af" className="w-6 h-6 me-2">
                        <path strokeliinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <div className="w-fit me-2 ">
                        <Text
                            style="text-sm text-start text-gray-400"
                            value={user?.first_name}
                        />
                    </div>
                </div>
            </div>        
        </div>
    )
}