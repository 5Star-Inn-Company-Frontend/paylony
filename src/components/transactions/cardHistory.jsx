import toast from "react-hot-toast";
import { useGetCashOutQuery } from "../../store/apiSlice";
import { TableLayout } from "../agents/tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import Spinner from "../global/spinner";
import { TransactLayout } from "./transactLayout";
import { useState } from "react";

export const CardTransactionHistory =()=>{
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
    }= useGetCashOutQuery({
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
        <TransactLayout title="Cashout Transaction History">
        {
         transactIsLoading? (
            <Spinner/>
            ):(
            <TableLayout
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
                        action:"amount"
                    },{
                        title:"Status",
                        action:"status"
                    },{
                        title:"Type",
                        action:"type"
                    }
                ]}
                filterData={filterData}
                setFilterData={setFilterData}
                setFilterBy={setFilterBy}
                inputPlaceHolder={`Search`}
                hideCreateAction={true}
                headerData={[
                   "S/N","Id" ,"Terminal ID","Transaction Ref","Transaction Amount","Pos id","Type","Customer Info","Bank","RRN","Stan","Status","Description","Transaction Time"
                ]}
                data={transactData?.data}
            >
            {
                transactData?.data?.map((info,index)=>{
                    const{
                        id,
                        terminal_id,
                        transaction_ref,
                        amount,
                        pos_id,
                        type,
                        customer_info,
                        bank,
                        rrn,
                        stan,
                        status,
                        description,
                        transaction_time
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
                                    terminal_id,
                                    transaction_ref,
                                    amount,
                                    pos_id,
                                    type,
                                    customer_info,
                                    bank,
                                    rrn,
                                    stan,
                                    status,
                                    description
                                ].map((body,index)=>{
                                    return  (
                                        <td className={bodyStyle} key={index}>{body}</td>
                                        )
                                })
                            }
                            <td className={bodyStyle}>{
                                    new Date( transaction_time)
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
        </TransactLayout>
        </DashBoardLayout>
    )
}