import { ReportLayout } from "./reportLayout"
import icon from "../../assets/ticket.png"
import { Text } from "../global/text"
import { useGetTicketQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ToastError } from "../global/toast";
export const Tickets =()=>{
    const{
        data:ticketData,
        isLoading,
        isError,
        error
    }= useGetTicketQuery();
    console.log(ticketData)
    
    if(isError){
        const{
            status,
            data
        }=error
        ToastError(status,data)
        console.log(error)
    }
    return(
        <ReportLayout title="Tickets">
            {
                isLoading ? (
                    <Spinner/>
                    ):(
            <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                {
                    ticketData?.data?.map((tick,index)=>{
                            const{
                                status,
                                ticket_count
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
                                                value={status}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Text
                                            style="text-4xl font-semibold text-start"
                                            value={ticket_count}
                                        />
                                    </div>
                                     <div>
                                        <div
                                            data-te-ripple-init
                                            onClick={()=>window.location.replace(`/report-ticket_details/${status}`)}
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
           )
        }
        </ReportLayout>
    )
}