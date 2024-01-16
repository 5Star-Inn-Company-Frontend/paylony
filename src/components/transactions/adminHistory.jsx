import toast from "react-hot-toast";
import { useGetAdminTransactionQuery,  } from "../../store/apiSlice";
import { TableLayout } from "../agents/tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import Spinner from "../global/spinner";
import { TransactLayout } from "./transactLayout";
import { useState } from "react";

export const AdminTransactionHistory =()=>{

    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"transaction_ref",
        value:""
    });

    const{
        data:transactData,
        isLoading:transactIsLoading,
        isError,
        error
    }= useGetAdminTransactionQuery({
        filterBy:filterBy
    });
    
    const[
        filterData,
        setFilterData
    ]= useState({
        title:"transaction_ref",
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
                    background:"#fff1f2"
                }
            })
        }else{
            toast.error(data?.message,{
                style:{
                    background:"#fff1f2"
                }
            })
        }
        console.log(error)
    }
    console.log(transactData);

    return(
        <DashBoardLayout>
        <TransactLayout title="Admin Transaction History">
        {
                transactIsLoading ? (
                    <Spinner/>
                    ):(
            <TableLayout
                hideCreateAction={true}
                handleFilterChange={handleFilterChange}
                sortButton={[
                    {
                        title:"Transaction Ref",
                        action:"transaction_ref"
                    },{
                        title:"Terminal Id",
                        action:"terminal_id"
                    },{
                        title:"Transaction Amount",
                        action:"transaction_amount"
                    },{
                        title:"Status",
                        action:"status"
                    },{
                        title:"Type",
                        action:"type"
                    }
                ]}
                filterData={filterData}
                downloadAction={"transactions"}
                setFilterData={setFilterData}
                setFilterBy={setFilterBy}
                inputPlaceHolder={`Search `}
                headerData={[
                    "S/N",
                    "Terminal id",
                    "Transaction Ref",
                    "Transaction Amount",
                    "Status",
                    "Source",
                    "Info",
                    "Type",
                    "Transaction time",
                ]}
                data={transactData?.data}
            >
            {
                transactData?.data?.map((admininfo,index)=>{
                    const{
                        terminal_id,
                        transaction_ref,
                        transaction_amount,
                        status,
                        transaction_time,
                        source,
                        info,
                        type
                    }=admininfo
                    return(
                        <tr 
                            className="border-b dark:border-neutral-500"
                            key={index}
                        >
                            <td className={bodyStyle}>{index+1}</td>
                            {
                                [
                                    terminal_id,
                                    transaction_ref,
                                    transaction_amount,
                                    status,
                                    source,
                                    info,
                                    type,
                                ].map((body,index)=>{
                                    return  (
                                        <td className={bodyStyle} key={index}>{body}</td>
                                        )
                                })
                            }
                            <td className={bodyStyle}>{
                                    new Date(transaction_time)
                                    .toLocaleString()
                                }
                            </td>
                        </tr>
                    )
                }
            )
        }
            </TableLayout>
            )}
        </TransactLayout>
        </DashBoardLayout>
    )
}