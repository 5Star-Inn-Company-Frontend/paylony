import { ReportLayout } from "./reportLayout"
import { TableLayout } from "../agents/tableLayout"
import Spinner from "../global/spinner";
import { useGetAgentCurrentMonthTargetQuery } from "../../store/apiSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { ToastError } from "../global/toast";

export const CurrentMonthCharges =()=>{
    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"business_name",
        value:""
    });

    const{
        data:chargeData,
        isLoading,
        isError,
        error
    }= useGetAgentCurrentMonthTargetQuery({
        filterBy:filterBy
    });

    const[
        filterData,
        setFilterData
    ]= useState({
        title:"business_name",
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
    return(
        <ReportLayout title="Agents Current Month Charges">
        {
            isLoading ? (
                <Spinner/>
                ):(
            <TableLayout
            hideCreateAction={true}
            handleFilterChange={handleFilterChange}
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
            downloadAction={"transactions"}
            setFilterBy={setFilterBy}
            inputPlaceHolder={`Search by ${filterBy}`}
                headerData={[
                    "S/N","Terminal Id","User Id","Business Name", "Business Email","Business Phone","Total Balance"
                ]}
                data={chargeData?.data}
            >
            {
                 chargeData?.data?.map((info,index)=>{
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