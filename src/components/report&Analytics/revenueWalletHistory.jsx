import { TableLayout } from "../agents/tableLayout";
import { ReportLayout } from "./reportLayout";
import Spinner from "../global/spinner";
import { useGetRevenueWalletQuery } from "../../store/apiSlice";
import { useState } from "react";
import toast from "react-hot-toast";

export const RevenueWalletHistory =()=>{
    
    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"reference",
        value:""
    });

    const{
        data:walletHistoryData,
        isLoading,
        isError,
        error
    }= useGetRevenueWalletQuery({
        filterBy:filterBy
    });
    
    const[
        filterData,
        setFilterData
    ]= useState({
        title:"reference",
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
        <ReportLayout title="Revenue Wallet History">
        {
            isLoading ? (
            <Spinner/>
            ):(
            <TableLayout
                hideCreateAction={true}
                handleFilterChange={handleFilterChange}
                downloadAction={"revenue-wallets"}
                sortButton={[
                    {
                        title:"Reference",
                        action:"reference"
                    },{
                        title:"Terminal Id",
                        action:"terminal_id"
                    },{
                        title:"Amount",
                        action:"amount"
                    },{
                        title:"Id",
                        action:"id"
                    },{
                        title:"Creation Date",
                        action:"creation_date"
                    },{
                        title:"Source",
                        action:"source"
                    }
                ]}
                filterData={filterData}
                setFilterData={setFilterData}
                setFilterBy={setFilterBy}
                inputPlaceHolder={`Search revenue wallet history`}
                headerData={[
                   "S/n","Id" ,"Terminal Id","Balance Before","Amount","Balance After","Reference","Channel","Source","Transaction type","Creation Date"
                ]}
                data={walletHistoryData?.data}
            >
            {
                walletHistoryData?.data?.map((info,index)=>{
                    const{
                        id,
                        terminal_id,
                        balance_before,
                        amount,
                        balance_after,
                        reference,
                        channel,
                        source,
                        transaction_type,
                        creation_date
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
                                    balance_before,
                                    amount,
                                    balance_after,
                                    reference,
                                    channel,
                                    source,
                                    transaction_type
                                ].map((body,index)=>{
                                    return  (
                                        <td className={bodyStyle} key={index}>{body}</td>
                                        )
                                })
                            }
                            <td className={bodyStyle}>{
                                    new Date( creation_date)
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