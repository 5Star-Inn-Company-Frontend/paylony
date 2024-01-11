import { ReportLayout } from "./reportLayout"
import { TableLayout } from "../agents/tableLayout"
import Spinner from "../global/spinner";
import { useGetAgentCurrentMonthTargetQuery } from "../../store/apiSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export const CurrentMonthCharges =()=>{
    const{
        data:chargeData,
        isLoading,
        isError,
        error
    }= useGetAgentCurrentMonthTargetQuery();
    const[
        actionData,
        setActionData
    ]= useState([]);

    const[
        filterBy,
        setFilterBy
    ]= useState("business_name");

    const[
        filterData,
        setFilterData
    ]= useState("");

    useEffect(()=>{
        if(chargeData){
            setActionData(chargeData?.data)
        }
    },[chargeData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e,tobeFilterBy)=>{
        let filterDdata;
        console.log(tobeFilterBy)
        switch(tobeFilterBy){
            case "business_name": filterDdata = chargeData?.data?.filter((data)=>data.business_name?.toLowerCase().includes(e))
            break;
            case "terminal_id": filterDdata = chargeData?.data?.filter((data)=>data?.terminal_id?.toLowerCase().includes(e))
            break;
            case "user_id": filterDdata = chargeData?.data?.filter((data)=>data.user_id?.toLowerCase().includes(e))
            break;
            case "business_email": filterDdata = chargeData?.data?.filter((data)=>data.business_email?.toLowerCase().includes(e))
            break;
            default : filterDdata = chargeData?.data?.filter((data)=>data.business_name?.toLowerCase().includes(e))
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
        <ReportLayout title="Agents Current Month Charges">
        {
            isLoading ? (
                <Spinner/>
                ):(
            <TableLayout
            hideCreateAction={true}
            handleInputChange={handleInputChange}
            sortButton={[
                {
                    title:"Business name",
                    action:"business_name"
                },{
                    title:"Business email",
                    action:"business_email"
                },{
                    title:"Terminal id",
                    action:"terminal_id"
                },{
                    title:"User id",
                    action:"user_id"
                }
            ]}
            filterData={filterData}
            setFilterData={setFilterData}
            filterBy={filterBy}
            downloadAction={"transactions"}
            setFilterBy={setFilterBy}
            inputPlaceHolder={`Search by ${filterBy}`}
                headerData={[
                    "s/n","Terminal Id","User Id","Business Name", "Business Email","Business Phone","Total Balance"
                ]}
                data={ actionData}
            >
            {
                 actionData?.map((info,index)=>{
                    const{
                        terminal_id,
                        user_id,
                        business_name,
                        business_email,
                        business_phone,
                        total_balance
                    }=info
                    return(
                        <tr 
                            className="border-b dark:border-neutral-500"
                            key={index}
                        >
                            <td className={bodyStyle}>{index+1}</td>
                                {
                                    [
                                        terminal_id,
                                        user_id,
                                        business_name,
                                        business_email,
                                        business_phone,
                                        total_balance
                                    ].map((body,index)=>{
                                        return  (
                                            <td className={bodyStyle} key={index}>{body}</td>
                                            )
                                    })
                                }
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