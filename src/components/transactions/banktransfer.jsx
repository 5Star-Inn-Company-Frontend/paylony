import { useState } from "react";
import { TableLayout } from "../agents/tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import { TransactLayout } from "./transactLayout";
import { useGetBankTransferQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import toast from "react-hot-toast";
import { ToastError } from "../global/toast";

export const BankTransfer =()=>{
    
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
    }= useGetBankTransferQuery({
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
                setFilterData={setFilterData}
                setFilterBy={setFilterBy}
                inputPlaceHolder={`Search`}
                headerData={[
                    "S/N",
                    "Id",
                    "User Id",
                    "User First Name",
                    "User Last Name",
                    "User Email",
                    "User Agent Type",
                    "User latest Business Id",
                    "User Latest business name",
                    "User latest business email",
                    "User latest business Address",
                    "User latest Business Bank Id",
                    "User latest Business Business Type Id",
                    "User latest Business license type",
                    "User latest business payout limit per transactions",
                    "User latest business payout status",
                    "User latest business wallet",
                    "Total Amount",
                    "Fee",
                    "Reference",
                    "Gateway",
                    "Amount",
                    "Type",
                    "RRN",
                    "Status",
                    "Account Name",
                    "Account Number",
                    "Bank Code",
                    "Bank Name",
                    "Business ID",
                    "Narration",
                    "Pos Id",
                    "Sender Name",
                    "Session Id",
                    "Date"
                ]}
                data={ transactData?.data}
            >
            {
                 transactData?.data?.map((info,index)=>{
                    const{
                        id,
                        user,
                        total_amount,
                        fee,
                        reference,
                        gateway,
                        amount,
                        type,
                        rrn,
                        status,
                        account_name,
                        account_number,
                        bank_code,
                        bank_name,
                        business_id,
                        narration,
                        pos_id,
                        sender_name,
                        sessionId,
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
                                    user?.id,
                                    user?.first_name,
                                    user?.last_name,
                                    user?.email,
                                    user?.agent_type,
                                    user?.latest_business?.id,
                                    user?.latest_business?.business_name,
                                    user?.latest_business?.business_email,
                                    user?.latest_business?.business_address,
                                    user?.latest_business?.bank_id,
                                    user?.latest_business?.business_type_id,
                                    user?.latest_business?.license_type,
                                    user?.latest_business?.payout_limit_per_trans,
                                    user?.latest_business?.payout_status,
                                    user?.latest_business?.wallet,
                                    total_amount,
                                    fee,
                                    reference,
                                    gateway,
                                    amount,
                                    type,
                                    rrn,
                                    status,
                                    account_name,
                                    account_number,
                                    bank_code,
                                    bank_name,
                                    business_id,
                                    narration,
                                    pos_id,
                                    sender_name,
                                    sessionId
                                ].map((body,index)=>{
                                    return  (
                                        <td className={bodyStyle} key={index}>{body}</td>
                                        )
                                })
                            }
                            <td className={bodyStyle}>{
                                    new Date(
                                        created_at
                                    )
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