import { useGetTransactionHistoryQuery } from "../../store/apiSlice";
import { TableLayout } from "../agents/tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import { TransactLayout } from "./transactLayout";
import { useEffect, useState } from "react";
import Spinner from "../global/spinner";
import toast from "react-hot-toast";

export const TransactionHistory =()=>{
    const{
        data:transactData,
        isLoading:transactIsLoading,
        isError,
        error
    }= useGetTransactionHistoryQuery();

    const data = []
    const[
        actionData,
        setActionData
    ]= useState([]);

    const[
        filterBy,
        setFilterBy
    ]= useState("business_id");

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
            case "business_id": filterDdata = transactData?.data?.filter((data)=>data.business?.id?.toLowerCase().includes(e))
            break;
            case "id": filterDdata = transactData?.data?.filter((data)=>data.id?.toLowerCase().includes(e))
            break;
            case "user_id": filterDdata = transactData?.data?.filter((data)=>data?.user?.id?.toLowerCase().includes(e))
            break;
            case "date": filterDdata = transactData?.data?.filter((data)=>data.created_at?.toLowerCase().includes(e))
            break;
            case "pos_id": filterDdata = transactData?.data?.filter((data)=>data.pos_id?.toLowerCase().includes(e))
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
        <TransactLayout title="Transaction history">
        {
         transactIsLoading? (
            <Spinner/>
            ):(
            <TableLayout
                hideCreateAction={true}
                handleInputChange={handleInputChange}
                sortButton={[
                    {
                        title:"Business Id",
                        action:"business_id"
                    },{
                        title:"User Id",
                        action:"user_id"
                    },{
                        title:"Id",
                        action:"id"
                    },{
                        title:"Date",
                        action:"date"
                    },{
                        title:"Pos id",
                        action:"pos_id"
                    }
                ]}
                filterData={filterData}
                downloadAction={"transactions"}
                setFilterData={setFilterData}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                inputPlaceHolder={`Search agent by ${filterBy}`}
                headerData={[
                    "s/n","id","user id","user first name","user last name","user type","business id","business name","business user_id","business address","pos id","title","service","description","narration","amount","discount","cashback","fee","total","initial balance","new balance","from","to","profit","system fee","agg_share","sh_share","Transaction","ref","type","status code","status description","gateway response","status","created at"
                ]}
                data={actionData}
            >
            {
                 actionData?.map((info,index)=>{
                    const{
                        id,
                        user,
                        business,
                        pos_id,
                        title,
                        service,
                        description,
                        narration,
                        amount,
                        discount,
                        cashback,
                        fee,
                        total,
                        init_bal,
                        new_bal,
                        from,
                        to,
                        profit,
                        sys_fee,
                        agg_share,
                        sh_share,
                        trx,
                        ref,
                        type,
                        status_code,
                        status_desc,
                        gateway_response,
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
                                    id,
                                    user?.id,
                                    user?.first_name,
                                    user?.last_name,
                                    user?.user_id,
                                    user?.type,
                                    business?.id,
                                    business?.business_name,
                                    business?.business_user_id,
                                    business?.business_address,
                                    pos_id,
                                    title,
                                    service,
                                    description,
                                    narration,
                                    amount,
                                    discount,
                                    cashback,
                                    fee,
                                    total,
                                    init_bal,
                                    new_bal,
                                    from,
                                    to,
                                    profit,
                                    sys_fee,
                                    agg_share,
                                    sh_share,
                                    trx,
                                    ref,
                                    type,
                                    status_code,
                                    status_desc,
                                    gateway_response,
                                    status,
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