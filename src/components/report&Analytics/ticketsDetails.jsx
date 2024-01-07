import { ReportLayout } from "./reportLayout"
import { Text } from "../global/text"
import { toast } from "react-toastify";
import { useGetTicketDetailsQuery} from "../../store/apiSlice";
import Spinner from "../global/spinner";
import { useParams } from "react-router-dom";
import { TableLayout } from "../agents/tableLayout";
import { useEffect, useState } from "react";
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

    useEffect(()=>{
        if(ticketData){
            setActionData(ticketData?.data)
        }
    },[ticketData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e)=>{
        const filtereddata = ticketData?.data?.filter((data)=>data.title?.toLowerCase().includes(e.target.value))
        setActionData(filtereddata)
    }

    const SortDataAction=(action)=>{
        let filteredData;
        switch(action){
            case 'date':(
                filteredData = ticketData?.data?.sort((a, b)=> (a.created_at < b.created_at ) ? -1 : (a.created_at > b.created_at) ? 1 : 0)
            )
            break;
            default:(
                filteredData = ticketData?.data?.sort((a, b)=> (a.created_at < b.created_at ) ? -1 : (a.created_at > b.created_at) ? 1 : 0)
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
        <ReportLayout title="Tickets Detais">
            {
                isLoading ? (
                    <Spinner/>
                    ):(
                        <TableLayout
                            handleInputChange={(e)=>handleInputChange(e)}
                            hideCreateAction={true}
                            sortButton={[
                                {
                                    title:"Date",
                                    action:"date"
                                },
                            ]}
                            SortDataAction={SortDataAction}
                            headerData={[
                                "s/n","User Id","assignee id","ticket id","title","description","status","Created At","Updated At"
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
                                            //    id,
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