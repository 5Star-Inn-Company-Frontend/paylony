import { ReportLayout } from "./reportLayout"
import { TableLayout } from "../agents/tableLayout"
import { useGetPerformanceReportQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import toast from "react-hot-toast";
import { useState } from "react";
import { ToastError } from "../global/toast";


export const PerformanceReport =()=>{
    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"agent_id",
        value:""
    });

    const{
        data:performanceData,
        isLoading:performanceDataIsLoading,
        isError,
        error
    }= useGetPerformanceReportQuery({
        filterBy:filterBy
    });
    
    const[
        filterData,
        setFilterData
    ]= useState({
        title:"agent_id",
        value:""
    });
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"

    const handleFilterChange =(e)=>{
        setFilterData((prev)=>{
            return{
                ...prev,
                title:e,
            }
        })
    }

    if(isError){
        const{
            status,
            data
        }=error
        ToastError(status,data)
        console.log(error)
    }
    console.log(performanceData);

    return(
    <ReportLayout title="Performance Report">
        {
        performanceDataIsLoading ? (
            <Spinner/>
            ):(
            <TableLayout
                hideCreateAction={true}
                handleFilterChange={handleFilterChange}
                sortButton={[
                    {
                        title:"Agent Id",
                        action:"agent_id"
                    },{
                        title:"Agent Code",
                        action:"agent_code"
                    },{
                        title:"Business Name",
                        action:"business_name"
                    }
                ]}
                filterData={filterData}
                downloadAction={"performance-report"}
                setFilterData={setFilterData}
                setFilterBy={setFilterBy}
                inputPlaceHolder={`Search `}
                headerData={[
                    "S/N",
                    "Agent Id",
                    "Agent Code",
                    "Business Name",
                    "Phone",
                    "Cashout Volume",
                    "Cashout Count",
                    "Transfer Volume",
                    "Transfer Count",
                ]}
                data={
                    performanceData?.data
                }
            >
            {
                performanceData?.data?.map((admininfo,index)=>{
                    const{
                        agent_id,
                        agent_code,
                        business_name,
                        phone,
                        cashout_volume,
                        cashout_count,
                        transfer_volume,
                        transfer_count
                    }=admininfo
                    return(
                        <tr 
                            className="border-b dark:border-neutral-500"
                            key={index}
                        >
                            <td className={bodyStyle}>{index+1}</td>
                            {
                                [
                                    agent_id,
                                    agent_code,
                                    business_name,
                                    phone,
                                    cashout_volume,
                                    cashout_count,
                                    transfer_volume,
                                    transfer_count
                                ].map((body,index)=>{
                                    return  (
                                        <td className={bodyStyle} key={index}>{body}</td>
                                        )
                                })
                            }
                        </tr>
                    )
                }
            )
        }
        </TableLayout>
        )}
    </ReportLayout>
    )
}