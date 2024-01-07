import { ReportLayout } from "./reportLayout"
import { TableLayout } from "../agents/tableLayout"
import { toast } from "react-toastify";
import { useGetChargeBackQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";

export const ChargeBackCount =()=>{
    const{
        data:chargebackData,
        isLoading,
        isError,
        error
    }= useGetChargeBackQuery();
    console.log(chargebackData)
    const data =[];
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e)=>{
        console.log(e.target.value)
        // const filtereddata = agentData?.find((data)=>data.name?.toLowerCase().includes(e))
        // setActionData(filtereddata)
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
        <ReportLayout title="Charge Back Count">
        {
            isLoading ? (
                <Spinner/>
                ):(
            <TableLayout
                hideheaderActions={true}
                headerData={[
                    "S/n",
                    "Agent Code",
                    "Charge back code",
                    "Resolved Date",
                    "Resolution",
                    "Details",
                    "Transaction reference",
                    "Ticket Id",
                    "Type",
                    "Due date",
                    "Status",
                    "Updated At",
                    "Created At"
                ]}
                data={chargebackData?.data}
            >
            {
                chargebackData?.data?.map((info,index)=>{
                    const{
                        agent_code,
                        charge_back_code,
                        resolved_date,
                        resolution,
                        details,
                        transaction_reference,
                        ticket_id,
                        type,
                        due_date,
                        status,
                        updated_at,
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
                                        agent_code,
                                        charge_back_code,
                                        resolved_date,
                                        resolution,
                                        details,
                                        transaction_reference,
                                        ticket_id,
                                        type,
                                        due_date,
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