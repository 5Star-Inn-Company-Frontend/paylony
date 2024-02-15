import { ReportLayout } from "./reportLayout"
import { DisPuteTable } from "./dispute_table";

export const DisputeCount =()=>{
    return(
        <ReportLayout title="Dispute Count">
            <DisPuteTable/>
        </ReportLayout>
    )
}