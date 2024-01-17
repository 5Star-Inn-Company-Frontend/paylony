import { useState } from "react";
import { TableLayout } from "../agents/tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import { TransactLayout } from "./transactLayout";
import { useGetBetHistoryQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import toast from "react-hot-toast";

export const BetTransactionHistory =()=>{

    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"reference",
        value:""
    });

    const{
        data:transactData,
        isLoading:transactIsLoading,
        isError,
        error
    }= useGetBetHistoryQuery({
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
        toast.error(
            data.error?
                data.error:
                    data.message,
            {
                style:{
                    background:"#fff1f2"
                }
            }
        )
        console.log(error)
    }
    console.log(transactData);

    return(
        <DashBoardLayout>
        <TransactLayout title="Bet Transaction History">
        {
         transactIsLoading? (
            <Spinner/>
            ):(
            <TableLayout
                hideCreateAction={true}
                handleFilterChange={handleFilterChange}
                sortButton={[
                    {
                        title:"Reference",
                        action:"reference"
                    },{
                        title:"Amount",
                        action:"amount"
                    },{
                        title:"Provider",
                        action:"provider"
                    },{
                        title:"Status",
                        action:"status"
                    },{
                        title:"Creation Date",
                        action:"creation_date"
                    }
                ]}
                filterData={filterData}
                downloadAction={"bets"}
                setFilterData={setFilterData}
                setFilterBy={setFilterBy}
                inputPlaceHolder={`Search `}
                headerData={[
                    "S/n","Reference","Amount","Provider","Service Type","Customer","Description","Status","Creation Date"
                ]}
                data={transactData?.data}
            >
            {
                 transactData?.data?.map((info,index)=>{
                    const{
                        reference,
                        amount,
                        provider,
                        service_type,
                        customer,
                        decription,
                        status,
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
                                    reference,
                                    amount,
                                    provider,
                                    service_type,
                                    customer,
                                    decription,
                                    status
                                ].map((body,index)=>{
                                    return  (
                                        <td className={bodyStyle} key={index}>{body}</td>
                                        )
                                })
                            }
                            <td className={bodyStyle}>{
                                    new Date(creation_date)
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