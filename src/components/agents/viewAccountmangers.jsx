import { AgentLayout } from "./agentLayout"
import { TableLayout } from "./tableLayout";
import { toast } from "react-toastify";
import { DashBoardLayout } from "../global/dashboardLayout";
import { useGetAllManagersQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";

export const ViewAccountMangers =()=>{
    const{
        data:managersData,
        isLoading,
        isError,
        error
    }= useGetAllManagersQuery();
    console.log(managersData)
    const data =[];
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    if(isError){
        toast.error(error?.data?.message)
    }
    return(
        <DashBoardLayout>
        <AgentLayout title="View Acc Managers">
            {
                isLoading ? (
                    <Spinner/>
                    ):(
                        <TableLayout
                            createBtnAction={()=>window.location.replace("/loginDetails")}
                            createBtnText="Create Managers"
                            headerData={[
                                "s/n","ID","first_name","last_name","email","Date of birth","gender","Residential Address","State","Agent Type","User Type",
                                "Account Status","Created At","Updated At"
                            ]}
                            data={managersData?.data}
                        >
                        {
                            managersData?.data?.map((info,index)=>{
                                const{
                                    id,
                                    first_name,
                                    last_name,
                                    email,
                                    dob,
                                    gender,
                                    residential_address,
                                    state,
                                    agent_type,
                                    user_type,
                                    created_at,
                                    updated_at,
                                    account_status
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