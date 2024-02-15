import { ReportLayout } from "./reportLayout"
import { TableLayout } from "../agents/tableLayout"
import { useGetDisputeStatusCountQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import toast from "react-hot-toast";
import { ToastError } from "../global/toast";

export const DisputeStatusCount =()=>{
    const{
        data:disputeData,
        isLoading,
        isError,
        error
    }= useGetDisputeStatusCountQuery();
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    if(isError){
        const{
            status,
            data
        }=error
        ToastError(status,data)
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
                inputPlaceHolder={`Type query...`}
                headerData={[
                    "S/N",
                    "Status",
                    "Dispute Count",
                ]}
                data={disputeData?.data}
            >
            {
                disputeData?.data?.map((info,index)=>{
                    const{
                        dispute_count,
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
                                        status,
                                        dispute_count
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