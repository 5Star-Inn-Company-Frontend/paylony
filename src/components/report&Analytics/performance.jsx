import { ReportLayout } from "./reportLayout"
import { TableLayout } from "../agents/tableLayout"

export const PerformanceReport =()=>{
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const data =[
        
    ]
    return(
        <ReportLayout title="Performance Report">
            <TableLayout

                hideCreateAction={true}
                headerData={[
                    "Agent Code","Business Name","Phone Number", "Region","Cashout Volume","Cashout Count","Transfer Volume","Transfer Count","Action"
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