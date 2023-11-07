import { ReportLayout } from "./reportLayout"
import { TableLayout } from "../agents/tableLayout"

export const ChargeBackCount =()=>{
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const data =[
        
    ]
    return(
        <ReportLayout title="Charge Back Count">
            <TableLayout
                hideheaderActions={true}
                headerData={[
                    "Transaction Reference","Raised By","Ticket Id","Status","Level","Title","Resolved By","Creation Date","Resssolved Date"
                ]}
                data={data}
            >
            {
                data?.map((info,index)=>{
                    const{
                        title,
                        value
                    }=info
                    return(
                        <tr 
                            className="border-b dark:border-neutral-500"
                            key={index}
                        >
                            <td className={bodyStyle}>{index+1}</td>
                                {
                                    [
                                        title,
                                        value
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
        </ReportLayout>
    )
}