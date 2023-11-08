export const TableLayout =({
    headerData,
    children,
    data,
    hideCreateAction,
    hideFilter,
    hideheaderActions,
    createBtnAction,
    createBtnText,
    dowwnloadAction,
    filterAction,
    filterOptions,
    handleInputChange
})=>{
    const headStyle = "px-6 py-4"
    return(
        <div className="px-4">
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
                                        className="me-4  bg-purple px-6 pb-2.5 pt-3 my-3 text-xs font-medium uppercase leading-normal text-white inline-block rounded-md leading-normal">
                                        {
                                            createBtnText
                                        }
                                    </button>
                                </div>
                            )
                        }
                        <div>
                            <div
                                data-te-ripple-init
                                onClick={dowwnloadAction}
                                className="border bg-bodyCl px-6 pb-2.5 pt-3 my-3 text-xs font-medium uppercase leading-normal inline-block rounded-md leading-normal">
                                Download
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="mb-1 lg:w-60 xl:w-60 md:w-60 sm:w-60 xs:w-full xxs:w-full me-4">
                            <input
                                type="search"
                                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                id="exampleSearch"
                                onChange={handleInputChange}
                                placeholder="Type query" 
                            />
                        </div>
                        {
                            !hideFilter &&(
                                <div className="flex items-center mb-1">
                                    <label htmlFor="sort" className="w-fit me-1">Filter By :</label>
                                    <select 
                                        name="sort"
                                        onSelect={filterAction}
                                        className="border bg-bodyCl px-6 pb-2.5 pt-3 my-3 text-xs font-medium uppercase leading-normal inline-block rounded-md leading-normal"
                                    >
                                        {
                                            ["Date Created -From","Date Created -To","Manager","Aggregator","State","Government","Name","Type"].map((op,index)=>{
                                                return <option key={index}>{op}</option>
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
                                            className="border-b font-light border bg-bodyCl">
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
                data?.length ===0 &&(
                    <div className="w-44 m-auto">
                        <img 
                            src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
                            alt="object not found"
                        />
                    </div>
                )
            }
            
        </div>
    )
}