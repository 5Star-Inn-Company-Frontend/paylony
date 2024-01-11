import { ReportLayout } from "./reportLayout"
import { useGetTicketDetailsQuery} from "../../store/apiSlice";
import Spinner from "../global/spinner";
import { useParams } from "react-router-dom";
import { TableLayout } from "../agents/tableLayout";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export const TicketsDetails =()=>{
    const{
        status
    }= useParams()
    const{
        data:ticketData,
        isLoading,
        isError,
        error
    } = useGetTicketDetailsQuery(status);
    console.log(ticketData)

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
        if(ticketData){
            setActionData(ticketData?.data)
        }
    },[ticketData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e,tobeFilterBy)=>{
        let filterDdata;
        switch(tobeFilterBy){
            case "user_id": filterDdata = ticketData?.data?.filter((data)=>data.user_id?.toLowerCase().includes(e))
            break;
            case "id": filterDdata = ticketData?.data?.filter((data)=>data.id?.toLowerCase().includes(e))
            break;
            case "assignee_id": filterDdata = ticketData?.data?.filter((data)=>data.assignee_id?.toLowerCase().includes(e))
            break;
            case "ticket_id": filterDdata = ticketData?.data?.filter((data)=>data.ticket_id?.toLowerCase().includes(e))
            break;
            case "date": filterDdata = ticketData?.data?.filter((data)=>data.created_at?.toLowerCase().includes(e))
            break;
            case "status": filterDdata = ticketData?.data?.filter((data)=>data.status?.toLowerCase().includes(e))
            break;
            default : filterDdata = ticketData?.data?.filter((data)=>data.user_id?.toLowerCase().includes(e))
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
    return(
        <ReportLayout title="Tickets Detais">
            {
                isLoading ? (
                    <Spinner/>
                    ):(
                        <TableLayout
                            hideCreateAction={true}
                            handleInputChange={handleInputChange}
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
                            filterData={filterData}
                            setFilterData={setFilterData}
                            filterBy={filterBy}
                            setFilterBy={setFilterBy}
                            inputPlaceHolder={`Search details by ${filterBy}`}
                            headerData={[
                                "s/n","Id","User Id","assignee id","ticket id","title","description","status","Created At"
                            ]}
                            data={actionData}
                        >
                        {
                            actionData?.map((info,index)=>{
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