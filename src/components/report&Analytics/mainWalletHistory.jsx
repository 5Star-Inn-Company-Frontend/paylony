import { toast } from "react-toastify";
import { TableLayout } from "../agents/tableLayout"
import { DashBoardLayout } from "../global/dashboardLayout";
import Spinner from "../global/spinner";
import { ReportLayout } from "./reportLayout";
import { useGetMainWalletQuery } from "../../store/apiSlice";
import { useEffect, useState } from "react";


export const MainWalletHistory =()=>{
    const{
        data:walletHistoryData,
        isLoading,
        isError,
        error
    }= useGetMainWalletQuery();
    
    const[
        actionData,
        setActionData
    ]= useState([]);

    useEffect(()=>{
        if(walletHistoryData){
            setActionData(walletHistoryData?.data)
        }
    },[walletHistoryData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const data=[]
    const handleInputChange =(e)=>{
        const filtereddata = walletHistoryData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e.target.value))
        setActionData(filtereddata)
    }
    
    const SortDataAction=(action)=>{
        let filteredData;
        switch(action){
            case 'name':(
                filteredData = walletHistoryData?.data?.sort((a, b)=> (a.first_name < b.first_name ) ? -1 : (a.first_name > b.first_name) ? 1 : 0)
            )
            break;
            case 'email':(
                filteredData = walletHistoryData?.data?.sort((a, b)=> (a.email < b.email) ? -1 : (a.email > b.email) ? 1 : 0)
            )
            break;
            case 'user_type':(
                filteredData = walletHistoryData?.data?.sort((a, b)=> (a.user_type < b.user_type ) ? -1 : (a.user_type > b.user_type) ? 1 : 0)
            )
            break;
            case 'date':(
                filteredData = walletHistoryData?.data?.sort((a, b)=> (a.created_at < b.created_at ) ? -1 : (a.created_at > b.created_at) ? 1 : 0)
            )
            break;
            default:(
                filteredData = walletHistoryData?.data?.sort((a, b)=> (a.first_name < b.first_name ) ? -1 : (a.first_name > b.first_name) ? 1 : 0)
            )
            break;
        }
        setActionData( filteredData)
    }

    if(isError){
        const{
            status,
            data
        }=error
        if(data?.error){
            toast.error(data?.error)
        }else{
         toast.error(data?.message)
        }
        console.log(error)
    }
    return(
        <DashBoardLayout>
        <ReportLayout title="Main Wallet History">
        {
            isLoading ? (
            <Spinner/>
            ):(
            <TableLayout
                handleInputChange={(e)=>handleInputChange(e)}
                sortButton={[
                    {
                        title:"Name",
                        action:"name"
                    },{
                        title:"Email",
                        action:"email"
                    },{
                        title:"User Types",
                        action:"user_type"
                    },{
                        title:"Date",
                        action:"date"
                    },
                ]}
                SortDataAction={SortDataAction}
                hideCreateAction={true}
                headerData={[
                    "Balance Before","Amount","Balance After","Reference","Source","Description","Creation Date","Type","Action"
                ]}
                data={data}
            >
            {
                data?.map((info,index)=>{
                    const{
                        id,
                        title,
                        remark,
                        // token,
                        // server_response,
                        server,
                        new_balance,
                        prev_balance,
                        type,
                        status,
                        recipient,
                        amount,
                        commission,
                        charges,
                        reference,
                        created_at,
                        updated_at,
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
                                    title,
                                    remark,
                                    // token,
                                    // server_response?.status,
                                    server,
                                    new_balance,
                                    prev_balance,
                                    type,
                                    status,
                                    recipient,
                                    amount,
                                    commission,
                                    charges,
                                    reference
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
        </DashBoardLayout>
    )
}