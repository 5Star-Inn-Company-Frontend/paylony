import { AgentLayout } from "./agentLayout"
import { TableLayout } from "./tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";

export const ViewAccountMangers =()=>{
    const data =[];
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"

    return(
        <DashBoardLayout>
        <AgentLayout title="View Acc Managers">
            <TableLayout
                createBtnAction={()=>window.location.replace("/personalInfo")}
                createBtnText="Create Agent"
                headerData={[
                    "Last Name","First Name","No of Agents","Created At",
                ]}
                data={data}
            >
            {
                data?.map((info,index)=>{
                    const{
                        id,
                        title,
                        remark,
                        // token,
                        // server_response,
                        server,
                        new_balance,
                        prev_balance,
                        type,
                        status,
                        recipient,
                        amount,
                        commission,
                        charges,
                        reference,
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
                                    title,
                                    remark,
                                    // token,
                                    // server_response?.status,
                                    server,
                                    new_balance,
                                    prev_balance,
                                    type,
                                    status,
                                    recipient,
                                    amount,
                                    commission,
                                    charges,
                                    reference
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
        </AgentLayout>
        </DashBoardLayout>
    )
}