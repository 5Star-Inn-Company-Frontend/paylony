import { TableLayout } from "../agents/tableLayout"
import { ReportLayout } from "./reportLayout"

export const AgentStateCount =()=>{
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const data =[
        {
            title:"Adamawa",
            value:"50"
        },{
            title:"Oyo",
            value:"5"
        },{
            title:"Oshun",
            value:"6"
        },{
            title:"Kwara",
            value:"233"
        },{
            title:"Ondo",
            value:"7"
        },{
            title:"Lagos",
            value:"23"
        }
    ]
    return(
        <ReportLayout title="Agent State Count">
            <TableLayout
                hideheaderActions={true}
                headerData={[
                    "State","Agent Count"
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