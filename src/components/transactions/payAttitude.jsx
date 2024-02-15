import { useState } from "react";
import { TableLayout } from "../agents/tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import { TransactLayout } from "./transactLayout";
import { useGetPayAttitudeQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import toast from "react-hot-toast";
import { ToastError } from "../global/toast";

export const PayAttitude=()=>{
    
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
    }= useGetPayAttitudeQuery({
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
        ToastError(status,data)
        console.log(error)
    }
    console.log(transactData);

    return(
        <DashBoardLayout>
        <TransactLayout title="Bank Transfer">
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
                        title:"business_id",
                        action:"business_id"
                    },{
                        title:"Status",
                        action:"status"
                    },{
                        title:"Creation Date",
                        action:"created_at"
                    }
                ]}
                filterData={filterData}
                downloadAction={"vas"}
                setFilterData={setFilterData}
                setFilterBy={setFilterBy}
                inputPlaceHolder={`Search`}
                headerData={[
                    "S/n","Reference","Amount","Business Id","User Id","Pos Id","Fee","Total Amount","feeBearer","Status","Creation Date"
                ]}
                data={transactData?.data}
            >
            {
                 transactData?.data?.map((info,index)=>{
                    const{
                        reference,
                        amount,
                        business_id,
                        user_id,
                        pos_id,
                        fee,
                        totalAmount,
                        feeBearer,
                        status,
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
                                    reference,
                                    amount,
                                    business_id,
                                    user_id,
                                    pos_id,
                                    fee,
                                    totalAmount,
                                    feeBearer,
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