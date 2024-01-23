import { ReportLayout } from "./reportLayout"
import { useGetTicketDetailsQuery} from "../../store/apiSlice";
import Spinner from "../global/spinner";
import { useParams } from "react-router-dom";
import { TableLayout } from "../agents/tableLayout";
import { useState } from "react";
import toast from "react-hot-toast";
export const TicketsDetails =()=>{
    const{
        status
    }= useParams()

    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"status",
        value:""
    });

    const{
        data:ticketData,
        isLoading,
        isError,
        error
    } = useGetTicketDetailsQuery({
        filterBy:filterBy,
        status:status
    });

    const[
        filterData,
        setFilterData
    ]= useState({
        title:"status",
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
    return(
        <ReportLayout title="Tickets Details">
            {
                isLoading ? (
                    <Spinner/>
                    ):(
                        <TableLayout
                            hideCreateAction={true}
                            handleFilterChange={handleFilterChange}
                            filterData={filterData}
                            setFilterData={setFilterData}
                            setFilterBy={setFilterBy}
                            inputPlaceHolder={`Type query...`}
                            sortButton={[
                                {
                                    title:"User Id",
                                    action:" user_id"
                                },{
                                    title:"Assignee Id",
                                    action:"assignee_id"
                                },{
                                    title:"Id",
                                    action:"id"
                                },{
                                    title:"Date",
                                    action:"date"
                                },{
                                    title:"Ticket Id",
                                    action:"ticket_id"
                                },{
                                    title:"Status",
                                    action:"status"
                                }
                            ]}
                            headerData={[
                                "S/N","Id","User Id","assignee id","ticket id","title","description","status","Created At"
                            ]}
                            data={ticketData?.data}
                        >
                        {
                            ticketData?.data?.map((info,index)=>{
                                const{
                                    id,
                                    user_id,
                                    assignee_id,
                                    ticket_id,
                                    title,
                                    description,
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
                                                user_id,
                                                assignee_id,
                                                ticket_id,
                                                title,
                                                description,
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
        </ReportLayout>
    )
}