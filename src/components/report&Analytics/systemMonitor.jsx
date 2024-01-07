import { ReportLayout } from "./reportLayout"
import { TableLayout } from "../agents/tableLayout"
import { Text } from "../global/text"

export const SystemMonitor =()=>{
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const data =[
        
    ]
    return(
        <ReportLayout title="System Monitor">
            <Text
                style="text-xl text-start mb-4"
                value="Cashout Status (%)"
            />
            <TableLayout
                hideheaderActions={true}
                headerData={[
                    "Bank","Success Rate"
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