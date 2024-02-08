export const Loader =({
    full
})=>{

    return(
        <>
        <div id="loading-custom-icon" className={`bg-purple rounded my-3 ${full?"w-full px-6 pb-2.5 pt-4":"w-fit px-12 p-[0.72rem] text-xs font-medium leading-normal"}`}>
            <div
                data-te-loading-management-init
                data-te-parent-selector="#loading-custom-icon"
                className="flex items-center justify-center"
            >
                <div
                data-te-loading-icon-ref
                className="flex flex-row h-7 w-7 animate-spin border-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] me-2"
                role="status">
                    <span className="[&>svg]:w-7">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </span>
                </div>
            </div>
            </div>
        </>
    )
}