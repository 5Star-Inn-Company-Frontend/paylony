import { useEffect} from "react";
import logo from "../../assets/Paylony logo 1.png"
import {
    Sidenav,
    Ripple,
    Tab,
    initTE,
  } from "tw-elements";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export const Nav =({style})=>{
    const cookies = new Cookies(null, { path: '/' });
    const user = cookies.get('paylonyToken');
    const navigate = useNavigate();
    useEffect(() => {
        initTE({ Sidenav, Ripple,Tab });
    });
    return(
        <nav
            id={`${style?"":"full-screen-example"}`}
            className={`${style?style:"bg-white fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"}`}
            data-te-sidenav-init
            data-te-sidenav-content="#content">
            <div>
                <div className="lg:hidden xl:hidden md:hidden sm:block xs:block xxs:block my-2 px-[1.8rem] pt-[1rem]">
                    <img 
                        src={logo}
                        alt="object not found"
                        className="w-16 h-12"
                    />
                </div>
                <ul
                    className="relative m-0 list-none px-[0.2rem]"
                    data-te-sidenav-menu-ref
                    >
                    <li className="relative">
                        <a
                            className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            href="/"
                            data-te-sidenav-link-ref
                        >
                            <span
                                className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                </svg>
                            </span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    {user?.user_type !== "admin" &&
                    <li className="relative">
                        <a
                            className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            href="#!"
                            data-te-sidenav-link-ref>
                            <span
                                className="mr-4 [&>svg]:h-4 [&>svg]:w-4  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </span>
                            <span>Agents</span>
                            <span
                                className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 dark:[&>svg]:fill-gray-300"
                                data-te-sidenav-rotate-icon-ref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                            </span>
                        </a>
                        <ul
                            className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
                            data-te-sidenav-collapse-ref>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/personalInfo"
                                    >Create Agents</a
                                >
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/viewAgent"
                                    >View Agents</a
                                >
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/view_aggregators"
                                    >View Aggregators</a
                                >
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/view_acc_manager"
                                    >View Account Managers</a
                                >
                            </li>
                        </ul>
                    </li>
                    }
                    <li className="relative">
                        <a
                            className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            href="#!"
                            data-te-sidenav-link-ref>
                            <span
                                className="mr-4 [&>svg]:h-4 [&>svg]:w-4  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                                </svg>
                            </span>
                            <span>Transactions</span>
                            <span
                                className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 dark:[&>svg]:fill-gray-300"
                                data-te-sidenav-rotate-icon-ref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                            </span>
                        </a>
                        <ul
                            className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
                            data-te-sidenav-collapse-ref>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/transact-history"
                                    >History</a
                                >
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/transact-card"
                                    >CashOut Transaction</a>
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/transact-admin"
                                    >Admin Transaction history</a
                                >
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/transact-bet"
                                    >Bet Transaction history</a
                                >
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/transact-vas"
                                    >VAS Transaction history</a
                                >
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/transact-refund"
                                    >Refund Transaction history</a
                                >
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/banktransfer"
                                    >Bank Transfer</a
                                >
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/payattitude"
                                    >Pay Attitude</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li className="relative">
                        <a
                            className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            href="#!"
                            data-te-sidenav-link-ref>
                            <span
                                className="mr-4 [&>svg]:h-4 [&>svg]:w-4  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                                </svg>
                            </span>
                            <span>Report & Analytics</span>
                            <span
                                className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 dark:[&>svg]:fill-gray-300"
                                data-te-sidenav-rotate-icon-ref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                            </span>
                        </a>
                        <ul
                            className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
                            data-te-sidenav-collapse-ref>
                            <li className="relative">

                            <ul
                                className="relative m-0 list-none px-[0.2rem]"
                                data-te-sidenav-menu-ref
                                >
                                <li className="relative">
                                    <a
                                        className="group flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.82rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                        href="#!"
                                        data-te-sidenav-link-ref>
                                        <span>Wallet Logs</span>
                                        <span
                                            className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 dark:[&>svg]:fill-gray-300"
                                            data-te-sidenav-rotate-icon-ref>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512">
                                                <path
                                                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <ul
                                        className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
                                        data-te-sidenav-collapse-ref>
                                        <li className="relative">
                                            <a
                                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                data-te-sidenav-link-ref
                                                href="/report-main_wallet"
                                                >Main Wallet History</a
                                            >
                                        </li>
                                        <li className="relative">
                                            <a
                                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                data-te-sidenav-link-ref
                                                href="/report-revenue_wallet"
                                                >Revenue Wallet History</a
                                            >
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul
                                className="relative m-0 list-none px-[0.2rem]"
                                data-te-sidenav-menu-ref
                                >
                                <li className="relative">
                                    <a
                                        className="group flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.82rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                        href="#!"
                                        data-te-sidenav-link-ref>
                                        <span>Maps</span>
                                        <span
                                            className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 dark:[&>svg]:fill-gray-300"
                                            data-te-sidenav-rotate-icon-ref>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512">
                                                <path
                                                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <ul
                                        className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
                                        data-te-sidenav-collapse-ref>
                                        <li className="relative">
                                            <a
                                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                data-te-sidenav-link-ref
                                                href="/report-transaction_map"
                                                > Transaction Map</a
                                            >
                                        </li>
                                        <li className="relative">
                                            <a
                                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                data-te-sidenav-link-ref
                                                href="/report-agent_map"
                                                > Agent Map</a
                                            >
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul
                                className="relative m-0 list-none px-[0.2rem]"
                                data-te-sidenav-menu-ref
                                >
                                <li className="relative">
                                    <a
                                        className="group flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.82rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                        href="#!"
                                        data-te-sidenav-link-ref>
                                        <span>Reports</span>
                                        <span
                                            className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 dark:[&>svg]:fill-gray-300"
                                            data-te-sidenav-rotate-icon-ref>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512">
                                                <path
                                                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <ul
                                        className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
                                        data-te-sidenav-collapse-ref>
                                        <li className="relative">
                                            <a
                                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                data-te-sidenav-link-ref
                                                href="/report-overview"
                                                > Overview report</a
                                            >
                                        </li>
                                        <li className="relative">
                                            <a
                                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                data-te-sidenav-link-ref
                                                href="/report-agent_count"
                                                > Agent Count</a
                                            >
                                        </li>
                                        <li className="relative">
                                            <a
                                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                data-te-sidenav-link-ref
                                                href="/report-Charge_Back_count"
                                                >Charge back Count</a
                                            >
                                        </li>
                                        <li className="relative">
                                            <a
                                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                data-te-sidenav-link-ref
                                                href="/report-dispute_count"
                                                > Dispute Count</a
                                            >
                                        </li>
                                        <li className="relative">
                                            <a
                                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                data-te-sidenav-link-ref
                                                href="/report-dispute_status_count"
                                                >Dispute Status Count</a
                                            >
                                        </li>
                                        {/* <li className="relative">
                                            <a
                                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                data-te-sidenav-link-ref
                                                href="/report-terminal_count"
                                                > Terminal count</a
                                            >
                                        </li> */}
                                        <li className="relative">
                                            <a
                                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                data-te-sidenav-link-ref
                                                href="/report-performance_count"
                                                >Performance Count</a
                                            >
                                        </li>
                                        <li className="relative">
                                            <a
                                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                data-te-sidenav-link-ref
                                                href="/report-ticket"
                                                > Ticket</a
                                            >
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/* <li className="relative">
                            <a
                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                data-te-sidenav-link-ref
                                href="/report-system_monitor"
                                >System Monitor</a
                            >
                        </li> */}
                        <li className="relative">
                            <a
                                className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                data-te-sidenav-link-ref
                                href="/report-transaction_summary"
                                >Transaction Summary</a
                            >
                        </li>
                        </ul>
                    </li>
                    <li className="relative">
                        <a
                            className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            href="/wallet_disbursement"
                            data-te-sidenav-link-ref
                        >
                            <span
                                className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>
                            </span>
                            <span>Wallet DisburseMent</span>
                        </a>
                    </li>
                    <li className="relative">
                        <a
                            className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            href="#!"
                            data-te-sidenav-link-ref>
                            <span
                                className="mr-4 [&>svg]:h-4 [&>svg]:w-4  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:border-[#9333ea]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                                </svg>
                            </span>
                            <span>Terminal Inventory</span>
                            <span
                                className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 dark:[&>svg]:fill-gray-300"
                                data-te-sidenav-rotate-icon-ref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                            </span>
                        </a>
                        <ul
                            className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
                            data-te-sidenav-collapse-ref>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/all_terminals"
                                    >All terminals</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li className="relative">
                        <a
                            className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            href="#!"
                            data-te-sidenav-link-ref>
                            <span
                                className="mr-4 [&>svg]:h-4 [&>svg]:w-4  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </span>
                            <span>Portal Settings</span>
                            <span
                                className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 dark:[&>svg]:fill-gray-300"
                                data-te-sidenav-rotate-icon-ref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                                
                            </span>
                        </a>
                        <ul
                            className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
                            data-te-sidenav-collapse-ref>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/all_roles"
                                    >Roles</a
                                >
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                    href="/all_permissions"
                                    >Permission</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr className="border-gray-300" />
                <ul className="relative m-0 list-none px-[0.2rem]">
                    
                    <li className="relative">
                        <a
                            className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-[#77e22ce]-400/10 hover:text-[#77e22ce]-600 hover:outline-none focus:bg-[#77e22ce]-400/10 focus:text-[#77e22ce]-600 focus:outline-none active:bg-[#77e22ce]-400/10 active:text-[#77e22ce]-600 active:outline-none data-[te-sidenav-state-active]:text-[#77e22ce]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            href="#"
                            data-te-sidenav-link-ref
                            onClick={()=>{
                                // logOut().unwrap().then((payload)=>{
                                //     localStorage.removeItem('paylonyToken');
                                //     window.location.replace("/login")
                                // }).catch((error)=>{
                                //     const{
                                //         status,
                                //         data
                                //     }=error
                                //     if(data?.error){
                                //         toast.error(data?.error)
                                //     }else{
                                //     toast.error(data?.message)
                                //     }
                                //     console.log(error)
                                // })
                                cookies.remove('paylonyToken')
                                localStorage.removeItem("lastLoginTime")
                                navigate("/login");
                            }}
                        >
                            <span
                                className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:border-[#77e22ce]-600 group-focus:[&>svg]:border-[#77e22ce]-600 group-active:[&>svg]:border-[#77e22ce]-600 group-[te-sidenav-state-active]:[&>svg]:border-[#77e22ce]-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                            </svg>
                            </span>
                            <span>Log Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}