import { TableLayout } from "../agents/tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import { TransactLayout } from "./transactLayout";

export const VasTransactionHistory =()=>{
    const data =[];
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    return(
        <DashBoardLayout>
        <TransactLayout title="Vas Transaction History">
            <TableLayout
                hideCreateAction={true}
                headerData={[
                    "Reference","Amount","Net Amount","Commission","Service","Service Type","Description","Status","Creation Date","Action"
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
        </TransactLayout>
        </DashBoardLayout>
    )
}