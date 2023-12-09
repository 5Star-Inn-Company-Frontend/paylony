import { useGetAllTransactionQuery } from "../../store/apiSlice";
import { TableLayout } from "../agents/tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import Spinner from "../global/spinner";
import { toast } from "react-toastify";
import { TransactLayout } from "./transactLayout";

export const AdminTransactionHistory =()=>{
    const{
        data:transactData,
        isLoading:transactIsLoading,
        isError,
        error
    }= useGetAllTransactionQuery();
    const data =[];
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    if(isError){
        toast.error(error?.data?.message)
    }
    return(
        <DashBoardLayout>
        <TransactLayout title="Admin Transaction History">
        {
                transactIsLoading ? (
                    <Spinner/>
                    ):(
            <TableLayout
                hideCreateAction={true}
                headerData={[
                    "s/n",
                    "User",
                    "business",
                    "pos_id",
                    "title",
                    "service",
                    "description",
                    "narration",
                    "amount",
                    "discount",
                    "cashback",
                    "fee",
                    "total",
                    "init_bal",
                    "new_bal",
                    "from",
                    "to",
                    "profit",
                    "sys_fee",
                    "agg_share",
                    "sh_share",
                    "trx",
                    "ref",
                    "type",
                    "status_code",
                    "status_desc",
                    "gateway_response",
                    "status",
                    "created_at",
                    "updated_at"
                ]}
                data={transactData?.data}
            >
            {
                transactData?.data?.map((info,index)=>{
                    const{
                        user,
                    business,
                    pos_id,
                    title,
                    service,
                    description,
                    narration,
                    amount,
                    discount,
                    cashback,
                    fee,
                    total,
                    init_bal,
                    new_bal,
                    from,
                    to,
                    profit,
                    sys_fee,
                    agg_share,
                    sh_share,
                    trx,
                    ref,
                    type,
                    status_code,
                    status_desc,
                    gateway_response,
                    status,
                    created_at,
                    updated_at
                    }=info
                    return(
                        <tr 
                            className="border-b dark:border-neutral-500"
                            key={index}
                        >
                            <td className={bodyStyle}>{index+1}</td>
                            {
                                [
                                    user?.first_name,
                    business?.business_name,
                    pos_id,
                    title,
                    service,
                    description,
                    narration,
                    amount,
                    discount,
                    cashback,
                    fee,
                    total,
                    init_bal,
                    new_bal,
                    from,
                    to,
                    profit,
                    sys_fee,
                    agg_share,
                    sh_share,
                    trx,
                    ref,
                    type,
                    status_code,
                    status_desc,
                    gateway_response,
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
            )}
        </TransactLayout>
        </DashBoardLayout>
    )
}