import { TableLayout } from "../agents/tableLayout"
import Spinner from "../global/spinner"
import { ReportLayout } from "./reportLayout"
import { useGetAgentStateCountQuery } from "../../store/apiSlice";
import toast from "react-hot-toast";

export const AgentStateCount =()=>{
    const{
        data:stateCountData,
        isLoading,
        isError,
        error
    }= useGetAgentStateCountQuery();

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
        <ReportLayout title="Agent State Count">
        {
            isLoading ? (
            <Spinner/>
            ):(
            <TableLayout
                hideheaderActions={true}
                headerData={[
                    'S/N',
                    "Id",
                    "Name",
                    "Longitude",
                    "Latitude"
                ]}
                data={stateCountData?.data}
            >
            {
                stateCountData?.data?.map((info,index)=>{
                    const{
                        id,
                        name,
                        longitude,
                        latitude
                    }=info?.state
                    return(
                        <tr 
                            className="border-b dark:border-neutral-500"
                            key={index}
                        >
                            <td className={bodyStyle}>{index+1}</td>
                                {
                                    [
                                        id,
                                        name,
                                        longitude,
                                        latitude
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