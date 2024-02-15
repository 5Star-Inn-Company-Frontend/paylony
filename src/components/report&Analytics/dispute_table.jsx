import { TableLayout } from "../agents/tableLayout"
import { useGetDisputeQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import toast from "react-hot-toast";
import { useState } from "react";
import { ToastError } from "../global/toast";

export const DisPuteTable  =()=>{
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
        ToastError(status,data)
        console.log(error)
    }
    return(
        <>
        {
        isLoading ? (
            <Spinner/>
            ):(
            <TableLayout
                hideCreateAction={true}
                handleFilterChange={handleFilterChange}
                filterData={filterData}
                setFilterData={setFilterData}
                setFilterBy={setFilterBy}
                inputPlaceHolder={`Type query...`}
                sortButton={[
                    {
                        title:"Status",
                        action:"status"
                    },{
                        title:"Business Id",
                        action:"business_id"
                    },{
                        title:"Pos Id",
                        action:"pos_id"
                    },{
                        title:"Reference",
                        action:"reference"
                    },{
                        title:"Transaction Id",
                        action:"transaction_id"
                    }
                ]}
                headerData={[
                    "S/N",
                    "Id",
                    "Business Id",
                    "Pos Id",
                    "Service",
                    "Description",
                    "Amount",
                    "Refunded Amount",
                    "Transaction Id",
                    "Reference",
                    "Comment",
                    "Status",
                    "Updated At",
                    "Created At"
                ]}
                data={disputeData?.data}
            >
            {
                disputeData?.data?.map((info,index)=>{
                    const{
                        id,
                        business_id,
                        pos_id,
                        service,
                        description,
                        amount,
                        refunded_amount,
                        transaction_id,
                        reference,
                        comment,
                        status,
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
                                        business_id,
                                        pos_id,
                                        service,
                                        description,
                                        amount,
                                        refunded_amount,
                                        transaction_id,
                                        reference,
                                        comment,
                                        status
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
        </>
    )
}