import { DashBoardLayout } from "../global/dashboardLayout";
import { DisPuteTable } from "../report&Analytics/dispute_table";
import { TransactLayout } from "./transactLayout";

export const RefundTransactionHistory =()=>{
    return(
        <DashBoardLayout>
            <TransactLayout title="Refund Transaction History">
                <DisPuteTable/>
            </TransactLayout>
        </DashBoardLayout>
    )
}