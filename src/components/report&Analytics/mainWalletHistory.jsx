import { TableLayout } from "../agents/tableLayout"
import Spinner from "../global/spinner";
import { ReportLayout } from "./reportLayout";
import { useGetMainWalletQuery } from "../../store/apiSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export const MainWalletHistory =()=>{
    const{
        data:walletHistoryData,
        isLoading,
        isError,
        error
    }= useGetMainWalletQuery();
    const data =[]
    const[
        actionData,
        setActionData
    ]= useState([]);

    const[
        filterBy,
        setFilterBy
    ]= useState("firstname");

    const[
        filterData,
        setFilterData
    ]= useState("");

    useEffect(()=>{
        if(walletHistoryData){
            setActionData(walletHistoryData?.data)
        }
    },[walletHistoryData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e,tobeFilterBy)=>{
        let filterDdata;
        console.log(tobeFilterBy)
        switch(tobeFilterBy){
            case "firstname": filterDdata = walletHistoryData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e))
            break;
            case "id": filterDdata = walletHistoryData?.data?.filter((data)=>data.id?.toLowerCase().includes(e))
            break;
            case "lastname": filterDdata = walletHistoryData?.data?.filter((data)=>data.last_name?.toLowerCase().includes(e))
            break;
            case "email": filterDdata = walletHistoryData?.data?.filter((data)=>data.email?.toLowerCase().includes(e))
            break;
            case "date": filterDdata = walletHistoryData?.data?.filter((data)=>data.created_at?.toLowerCase().includes(e))
            break;
            case "agent_type": filterDdata = walletHistoryData?.data?.filter((data)=>data.agent_type?.toLowerCase().includes(e))
            break;
            default : filterDdata = walletHistoryData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e))
        }
        setActionData(filterDdata)
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
            handleInputChange={handleInputChange}
            sortButton={[
                {
                    title:"First Name",
                    action:"firstname"
                },{
                    title:"Email",
                    action:"email"
                },{
                    title:"Id",
                    action:"id"
                },{
                    title:"Date",
                    action:"date"
                },{
                    title:"Agent type",
                    action:"agent_type"
                }
            ]}
            filterData={filterData}
            setFilterData={setFilterData}
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            inputPlaceHolder={`Search main wallet history by ${filterBy}`}
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
    )
}