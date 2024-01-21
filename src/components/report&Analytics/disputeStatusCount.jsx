import { ReportLayout } from "./reportLayout"
import { TableLayout } from "../agents/tableLayout"
import { useGetDisputeStatusCountQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import toast from "react-hot-toast";

export const DisputeStatusCount =()=>{
    const{
        data:disputeData,
        isLoading,
        isError,
        error
    }= useGetDisputeStatusCountQuery();
    console.log(disputeData)
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
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
        <ReportLayout title="Dispute Status Count">
            {
            isLoading ? (
                <Spinner/>
                ):(
            <TableLayout
                hideheaderActions={true}
                headerData={[
                    "S/N",
                    "Status",
                    "Ticket Count",
                ]}
                data={disputeData?.data}
            >
            {
                disputeData?.data?.map((info,index)=>{
                    const{
                        ticket_count,
                        status
                    }=info
                    return(
                        <tr 
                            className="border-b dark:border-neutral-500"
                            key={index}
                        >
                            <td className={bodyStyle}>{index+1}</td>
                                {
                                    [
                                        ticket_count,
                                        status
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