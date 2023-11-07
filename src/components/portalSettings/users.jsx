import { TableLayout } from "../agents/tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import { PortalLayout } from "./portalLayout";

export const AllUsers =()=>{
    const data =[];
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    return(
        <DashBoardLayout>
        <PortalLayout  title="Users">
            <TableLayout
                createBtnAction={()=>window.location.replace("/add_users")}
                createBtnText="Add Users"
                headerData={[
                    "User Name","Full Name","Email","Registration Date","Status","Action"
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
        </PortalLayout>
        </DashBoardLayout>
    )
}