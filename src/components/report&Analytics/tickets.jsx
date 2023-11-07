import { ReportLayout } from "./reportLayout"
import icon from "../../assets/ticket.png"
import { Text } from "../global/text"
export const Tickets =()=>{
    return(
        <ReportLayout title="Tickets">
            <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                {
                    [
                        {
                            title:"Open Tickets",
                            value:"30"
                        },{
                            title:"closed Tickets",
                            value:"3"
                        },{
                            title:"Resolved Tickets",
                            value:"27"
                        },{
                            title:"On Hold Tickets",
                            value:"0"
                        }
                    ].map((tick,index)=>{
                            const{
                                title,
                                value
                            }=tick
                            return(
                                <div 
                                    key={index}
                                    className="flex flex-col p-4 bg-white shadow border rounded-md "
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="me-2">
                                            <img 
                                                src={icon}
                                                alt="object not found"
                                                className="w-4"
                                            />
                                        </div>
                                        <div>
                                            <Text
                                                style="text-lg text-start"
                                                value={title}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Text
                                            style="text-4xl font-semibold text-start"
                                            value={value}
                                        />
                                    </div>
                                     <div>
                                        <div
                                            data-te-ripple-init
                                            className="border w-full bg-bodyCl px-6 pb-2.5 pt-3 my-3 text-xs font-medium uppercase leading-normal inline-block rounded-md leading-normal">
                                            View Tickets
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </ReportLayout>
    )
}