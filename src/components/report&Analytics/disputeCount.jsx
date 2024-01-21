import { ReportLayout } from "./reportLayout"
import { TableLayout } from "../agents/tableLayout"
import { useGetDisputeQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import toast from "react-hot-toast";
import { useState } from "react";

export const DisputeCount =()=>{
    
    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"status",
        value:""
    });

    const{
        data:disputeData,
        isLoading,
        isError,
        error
    }= useGetDisputeQuery({
        filterBy:filterBy
    });

    const[
        filterData,
        setFilterData
    ]= useState({
        title:"status",
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
        if(data?.error){
            toast.error(data?.error,{
                style:{
                    background:"#f87171"
                }
            })
        }else{
            toast.error(data?.message,{
                style:{
                    background:"#f87171"
                }
            })
        }
        console.log(error)
    }
    return(
        <ReportLayout title="Dispute Count">
            {
            isLoading ? (
                <Spinner/>
                ):(
            <TableLayout
                hideCreateAction={true}
                handleFilterChange={handleFilterChange}
                sortButton={[
                    {
                        title:"Status",
                        action:"status"
                    },{
                        title:"Agent Code",
                        action:"agent_code"
                    },{
                        title:"Charge Back Code",
                        action:"charge_back_code"
                    },{
                        title:"Transaction Reference",
                        action:"transaction_reference"
                    }
                ]}
                headerData={[
                    "S/N",
                    "Id",
                    "Agent Code",
                    "Charge back code",
                    "Transaction reference",
                    "Type",
                    "Due date",
                    "Status",
                    "Resolution",
                    "Resolved Date",
                    "Updated At",
                    "Created At"
                ]}
                data={disputeData?.data}
            >
            {
                disputeData?.data?.map((info,index)=>{
                    const{
                        id,
                        agent_code,
                        charge_back_code,
                        transaction_reference,
                        type,
                        due_date,
                        status,
                        resolution,
                        resolved_date,
                        updated_at,
                        created_at
                    }=info
                    return(
                        <tr 
                            className="border-b dark:border-neutral-500"
                            key={index}
                        >
                            <td className={bodyStyle}>{index+1}</td>
                                {
                                    [
                                        id,
                                        agent_code,
                                        charge_back_code,
                                        transaction_reference,
                                        type,
                                        due_date,
                                        status,
                                        resolution,
                                        resolved_date,
                                    ].map((body,index)=>{
                                        return  (
                                            <td className={bodyStyle} key={index}>{body}</td>
                                            )
                                    })
                                }
                                <td className={bodyStyle}>{
                                        new Date(created_at)
                                        .toLocaleString()
                                    }
                                </td>
                                <td className={bodyStyle}>{
                                        new Date(updated_at)
                                        .toLocaleString()
                                    }
                                </td>
                            </tr>
                            )
                        }
                    )
                }
            </TableLayout>
            )
        }
        </ReportLayout>
    )
}