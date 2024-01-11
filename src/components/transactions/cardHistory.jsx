import toast from "react-hot-toast";
import { useGetCashOutQuery } from "../../store/apiSlice";
import { TableLayout } from "../agents/tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import Spinner from "../global/spinner";
import { TransactLayout } from "./transactLayout";
import { useEffect, useState } from "react";

export const CardTransactionHistory =()=>{
    const{
        data:transactData,
        isLoading:transactIsLoading,
        isError,
        error
    }= useGetCashOutQuery();
    const data =[];
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
        console.log(transactData)
        if(transactData){
            setActionData(transactData?.data)
        }
    },[transactData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e,tobeFilterBy)=>{
        let filterDdata;
        switch(tobeFilterBy){
            case "firstname": filterDdata = transactData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e))
            break;
            case "id": filterDdata = transactData?.data?.filter((data)=>data.id?.toLowerCase().includes(e))
            break;
            case "lastname": filterDdata = transactData?.data?.filter((data)=>data.last_name?.toLowerCase().includes(e))
            break;
            case "email": filterDdata = transactData?.data?.filter((data)=>data.email?.toLowerCase().includes(e))
            break;
            case "date": filterDdata = transactData?.data?.filter((data)=>data.created_at?.toLowerCase().includes(e))
            break;
            case "agent_type": filterDdata = transactData?.data?.filter((data)=>data.agent_type?.toLowerCase().includes(e))
            break;
            default : filterDdata = transactData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e))
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
                inputPlaceHolder={`Search agent by ${filterBy}`}
                hideCreateAction={true}
                headerData={[
                    "Terminal ID","Transaction Ref","Transaction Amount","Customer Info","RRN","Stan","Status","Description","Bank","Transaction Time","Settlement Status","Action"
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
        </TransactLayout>
        </DashBoardLayout>
    )
}