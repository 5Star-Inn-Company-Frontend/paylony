import { ReportLayout } from "./reportLayout"
import { TableLayout } from "../agents/tableLayout"
import { toast } from "react-toastify";
import Spinner from "../global/spinner";
import { useGetAgentCurrentMonthTargetQuery } from "../../store/apiSlice";

export const CurrentMonthCharges =()=>{
    const{
        data:chargeData,
        isLoading,
        isError,
        error
    }= useGetAgentCurrentMonthTargetQuery();
    console.log(chargeData)
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
        <ReportLayout title="Agents Currents Moth Charges">
        {
            isLoading ? (
                <Spinner/>
                ):(
            <TableLayout

                hideCreateAction={true}
                headerData={[
                    "Terminal Id","Business Name", "Business Email","Business Phone","Total Balance"
                ]}
                data={chargeData?.data}
            >
            {
                chargeData?.data?.map((info,index)=>{
                    const{
                        terminal_id,
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