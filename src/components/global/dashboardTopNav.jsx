import { Text } from "./text"
import LetteredAvatar from 'react-lettered-avatar';
import logo from "../../assets/Paylony logo 1.png"
import { AiOutlineUser } from "react-icons/ai";
export const DashBoardTopNav =()=>{
    const user = JSON.parse(localStorage.getItem('paylonyToken'))
    // console.log(user)
    return(
        <div className="flex flex-row justify-between w-full py-2 px-4 items-center bg-cl ">
            <div className="flex items-center">
                <div className="me-2 hamburger">
                    <div
                        id="toggler"
                        className="inline-block rounded border px-2 py-1.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:shadow-lg  active:shadow-lg"
                        data-te-sidenav-toggle-ref
                        data-te-target="#full-screen-example"
                        data-te-ripple-init>
                        <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="black"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clipRule="evenodd" />
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
            <div className="flex flex-row items-center">
                <div className="w-fit me-2 lg:block xl:block md:block sm:hidden xs:hidden xxs:hidden">
                    <Text
                        style="text-sm text-start text-black"
                        value={`Hello! ${user?.first_name}`}
                    />
                </div>
                <div className="w-fit me-2">
                    <LetteredAvatar
                        backgroundColor="brown"
                        color="white"
                        size={34}
                        className="text-sm"
                        fontSize="0.5rem"
                        name={user?.first_name}
                    />
                </div>
                <div className="w-fit border rounded-full p-2 me-2">
                    <AiOutlineUser size="1rem" color="black"/>
                </div>
               <div
                className="hidden-arrow flex items-center text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                role="button">
                <span className="[&>svg]:w-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                    fill-rule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clip-rule="evenodd" />
                </svg>
                </span>
                <span
                className="absolute -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white"
                >1
                </span>
                </div>
            </div>       
        </div>
    )
}