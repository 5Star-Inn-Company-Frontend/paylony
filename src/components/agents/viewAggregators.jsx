import { AgentLayout } from "./agentLayout"
import { toast } from "react-toastify";
import { TableLayout } from "./tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import { useGetAllAggregatorsQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
export const ViewAggregators =()=>{
    const{
        data:aggregatorsData,
        isLoading,
        isError,
        error
    }= useGetAllAggregatorsQuery();
    console.log(aggregatorsData)
    const data =[];
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    if(isError){
        toast.error(error?.data?.message)
    }
    return(
        <DashBoardLayout>
        <AgentLayout title="View Aggregators">
            {
                isLoading ? (
                    <Spinner/>
                    ):(
                        <TableLayout
                            createBtnAction={()=>window.location.replace("/create_aggregators")}
                            createBtnText="Create Aggregators"
                            headerData={[
                                "s/n",
                                "id",
                                "first_name",
                                "last_name",
                                "username",
                                "email",
                                "dob",
                                "gender",
                                "residential_address",
                                "state",
                                "agent_type",
                                "user_type",
                                "account_status",
                                "created_at",
                                "updated_at",
                            ]}
                            data={aggregatorsData?.data}
                        >
                        {
                            aggregatorsData?.data?.map((info,index)=>{
                                const{
                                    id,
                                    first_name,
                                    last_name,
                                    username,
                                    email,
                                    dob,
                                    gender,
                                    residential_address,
                                    state,
                                    agent_type,
                                    user_type,
                                    account_status,
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
                                                id,
                                                first_name,
                                                last_name,
                                                username,
                                                email,
                                                dob,
                                                gender,
                                                residential_address,
                                                state,
                                                agent_type,
                                                user_type,
                                                account_status
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
        </AgentLayout>
        </DashBoardLayout>
    )
}