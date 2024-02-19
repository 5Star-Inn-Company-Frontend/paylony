
import { useGetTransactionHistoryQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import { useParams } from "react-router-dom";
import { TableLayout } from "../agents/tableLayout";
import { useState } from "react";
import { ToastError } from "../global/toast";
import { TerminalLayout } from "./terminalLayout";
export const Terminal_Transactions=()=>{
    const{
        terminal_id
    }= useParams();

    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"terminal",
        value:terminal_id
    });

    const{
        data:terminalData,
        isLoading,
        isError,
        error
    } = useGetTransactionHistoryQuery({
        filterBy:filterBy
    });

    const[
        filterData,
        setFilterData
    ]= useState({
        title:"terminal",
        value:terminal_id
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
    }
    return(
        <TerminalLayout title="Terminal Transactions">
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
                                    title:"Transaction Ref",
                                    action:"transaction_ref"
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
                            headerData={[
                                "S/N",
                                "Transaction Ref",
                                "Transaction Amount",
                                "Status",
                                "Source",
                                "Info",
                                "Type",
                                "Transaction time",
                            ]}
                            data={terminalData?.data}
                        >
                        {
                            terminalData?.data?.map((terminalinfo,index)=>{
                                const{
                                    transaction_ref,
                                    transaction_amount,
                                    status,
                                    transaction_time,
                                    source,
                                    info,
                                    type
                                }=terminalinfo
                                return(
                                    <tr 
                                        className="border-b dark:border-neutral-500"
                                        key={index}
                                    >
                                        <td className={bodyStyle}>{index+1}</td>
                                        {
                                            [
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
                )
            }
        </TerminalLayout>
    )
}