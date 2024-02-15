import toast from "react-hot-toast";
import { baseUrl } from "../../store/apiSlice";
import axios from "axios";
import { useState } from "react";

export const TableLayout =({
    handleFilterChange,
    headerData,
    children,
    data,
    hideCreateAction,
    sortButton,
    hideheaderActions,
    createBtnAction,
    createBtnText,
    downloadAction,
    filterData,
    setFilterData,
    setFilterBy,
    inputPlaceHolder,
})=>{
    const[
        isLoading,
        setIsLoading
    ]=useState(false);
    const user = JSON.parse(localStorage.getItem('paylonyToken'));
    
    const triggerExcelExport = async(data)=>{
        const headers ={
            'Content-Type':'multipart/form-data',
            "Authorization":`Bearer Bearer ${user?.authorization?.token}`
        };
        const config ={
            method: 'POST',
            url:`${baseUrl}/api/v1/export`,
            responseType:'arraybuffer',
            data:data,
            headers
        }
        try{
            setIsLoading(true);
            const response = await axios(config);
            const outputFilename = `${Date.now()}_paylony_${downloadAction}.xls`;
            const url = URL.createObjectURL(
                new Blob([
                    response?.data
                ])
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download',outputFilename);
            document.body.appendChild(link);
            link.click();
            link.remove();
            setIsLoading(false)
        }catch(error){
            setIsLoading(false)
            toast.error(
                error?.data?.message,
                {
                    style:{
                        background:"#fff1f2"
                    }
                }
            )
        }
    }
    const exportToExcel =()=>{
        var formdata = new FormData();
        formdata.append("data_type", downloadAction);
        triggerExcelExport(formdata)
    }
    const headStyle = "px-6 py-4"
    return(
        <div>
            {
                !hideheaderActions &&(
                <div className="flex flex-wrap justify-between mb-2">
                    <div className="flex items-center mb-1 flex-wrap">
                        {
                            !hideCreateAction &&(
                                <div>
                                    <button
                                        type="button"
                                        onClick={createBtnAction}
                                        data-te-ripple-init
                                        className="me-4  bg-purple px-6 pb-2.5 pt-3 mb-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                                        {
                                            createBtnText
                                        }
                                    </button>
                                </div>
                            )
                        }
                        <div>
                            { 
                                (downloadAction && (data?.length > 0)) &&(
                                    isLoading?(
                                        <div
                                            data-te-ripple-init
                                            className="border bg-gray-100 px-6 pb-2.5 pt-3 mb-3 text-xs font-medium uppercase leading-normal inline-block rounded-md leading-normal">
                                            exporting...
                                        </div>
                                    ):(
                                        <div
                                            data-te-ripple-init
                                            onClick={()=>exportToExcel()}
                                            className="border cursor-pointer bg-gray-100 px-6 pb-2.5 pt-3 mb-3 text-xs font-medium uppercase leading-normal inline-block rounded-md leading-normal">
                                            Export excel
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="flex items-center me-4 mb-1">
                            <div className="lg:w-60 xl:w-60 md:w-60 sm:w-60 xs:w-full xxs:w-full me-2">
                                <input
                                    type="search"
                                    className="text-xs text-gray-600 relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.55rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    id="exampleSearch"
                                    onChange={(e)=>{
                                        setFilterData((prev)=>{
                                            return{
                                                ...prev,
                                                value:e.target.value
                                            }
                                        });
                                    }}
                                    placeholder={inputPlaceHolder}
                                />
                            </div>
                            <div 
                                className="bg-purple p-2 rounded"
                                onClick={()=>{
                                    setFilterBy(filterData)
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-5 h-5">
                                    <path strokelinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div>
                        {
                            sortButton &&(
                                <div className="flex items-center mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="w-5 h-5 me-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                                    </svg>
                                    <label htmlFor="sort" className="w-fit me-1 text-sm text-gray">Filter By :</label>
                                    <select 
                                        name="sort"
                                        onChange={(e)=>handleFilterChange(e.target.value)}
                                            // handleInputChange(filterData,e.target.value)}
                                        className="bg-bodyCl  pb-2.5 pt-3 my-3 text-xs font-medium uppercase leading-normal inline-block rounded-md leading-normal"
                                    >
                                        {
                                            sortButton?.map((op,index)=>{
                                                const{
                                                    title,
                                                    action
                                                }=op;
                                                return (
                                                    <option 
                                                        key={index}
                                                        value={action}
                                                    >
                                                        { title}
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            )
                        }
                    </div>
                </div>
                )
            }
            <div className="flex flex-col overflow-x-auto">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-center text-sm font-light">
                                {
                                    headerData &&(
                                        <thead
                                            className="border-b font-light border bg-white">
                                            <tr>
                                                {
                                                    headerData.map((head,index)=>{
                                                        return  <th scope="col" key={index} className={headStyle}>{head}</th>
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        )
                                }
                                <tbody>
                                    {children}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {
                Array.isArray(data) &&(
                    data?.length ===0 &&(
                        <div className="w-44 m-auto">
                            <img 
                                src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
                                alt="object not found"
                            />
                        </div>
                    )
                )
            }
        </div>
    )
}