// Initialization for ES Users
import { useEffect } from "react";
import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
  
export const TableDropDown =({list})=>{
    useEffect(()=>{
        initTE({ Dropdown, Ripple });
    })
    return(
        <div class="relative" data-te-dropdown-ref>
            <button
                class="flex m-auto items-center justify-center whitespace-nowrap rounded bg-bodyCl px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                type="button"
                id="dropdownMenuButton1"
                data-te-dropdown-toggle-ref
                style={{
                    backgroundColor:"#f2f3f8"
                }}
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5">
                    <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
                </svg>
                </span>
            </button>
            <ul
                class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
                data-te-dropdown-menu-ref>
                    {
                        list?.map((drop,index)=>{
                            const{
                                dropTitle,
                                action
                            }=drop;
                            return(
                                <li key={index}>
                                    <a
                                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                        href="#"
                                        data-te-dropdown-item-ref
                                        onClick={()=>action()}
                                        >{dropTitle}</a
                                    >
                                </li>
                            )
                        })
                    }
            </ul>
            </div>
    )
}