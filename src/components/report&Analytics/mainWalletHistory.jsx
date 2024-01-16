import { TableLayout } from "../agents/tableLayout"
import Spinner from "../global/spinner";
import { ReportLayout } from "./reportLayout";
import { useGetMainWalletQuery } from "../../store/apiSlice";
import {useState } from "react";
import toast from "react-hot-toast";


export const MainWalletHistory =()=>{
    
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
    }= useGetMainWalletQuery({
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
        <ReportLayout title="Main Wallet History">
        {
            isLoading ? (
            <Spinner/>
            ):(
            <TableLayout
            handleFilterChange={handleFilterChange}
            sortButton={[
                {
                    title:"Reference",
                    action:"reference"
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
            inputPlaceHolder={`Search main wallet history`}
            hideCreateAction={true}
            headerData={[
                "S/n" ,"Id","Balance Before","Amount","Balance After","Reference","Source","Description","Type","Creation Date"
            ]}
            data={walletHistoryData?.data}
            >
            {
               walletHistoryData?.data?.map((info,index)=>{
                    const{
                        id,
                        balance_before,
                        amount,
                        balance_after,
                        reference,
                        source,
                        description,
                        type,
                        creation_date,
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
                                    balance_before,
                                    amount,
                                    balance_after,
                                    reference,
                                    source,
                                    description,
                                    type
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
        </ReportLayout>
    )
}