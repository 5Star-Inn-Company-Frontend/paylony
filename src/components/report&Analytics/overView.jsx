import { useGetOverviewReportQuery } from "../../store/apiSlice";
import { Text } from "../global/text"
import { CountChart } from "./countChart";
import { ReportLayout } from "./reportLayout";
import {
    Ripple,
    initTE,
  } from "tw-elements";
import { useEffect } from "react"
import toast from "react-hot-toast";
import { ToastError } from "../global/toast";

export const Overview =()=>{
    useEffect(()=>{
        initTE({ Ripple });
    })
    const{
        data:overviewData,
        isLoading,
        isError,
        error
    }= useGetOverviewReportQuery();
    console.log(overviewData)
    if(isError){
        const{
            status,
            data
        }=error
        ToastError(status,data)
        console.log(error)
    }
    return(
        <ReportLayout title="Overview Report">
            <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-8">
                <div>
                    <Text
                        style=" mb-4 font-semibold text-xl text-start"
                        value="Overview Report"
                    />
                    <Text
                        style="text-sm text-start mb-8"
                        value={`Performed ${overviewData?.data?.transaction_statistics?.total_successful_transaction_count} successfull transaction out of ${overviewData?.data?.transaction_statistics?.total_transaction_count} transactions `}
                    />
                    <div className="flex flex-col divide-y divide-slate-200">
                        {
                            [
                                {
                                    title:"Pool Account Balance",
                                    value:`${overviewData?.data?.pool_balance}`
                                },{
                                    title:"Number of Active Terminal",
                                    value:`${overviewData?.data?.active_terminal}`
                                },{
                                    title:"Total Cashout",
                                    value:`${overviewData?.data?.total_cashout}`
                                },{
                                    title:"Total Revenue",
                                    value:`${overviewData?.data?.total_revenue}`
                                },{
                                    title:"Total Transaction (count)",
                                    value:`${overviewData?.data?.transaction_statistics?.total_transaction_count}`
                                },{
                                    title:"Total Transaction (Successfull)",
                                    value:`${overviewData?.data?.transaction_statistics?.total_successful_transaction_count}`
                                },{
                                    title:"Total Wallet (Balance)",
                                    value:`₦${overviewData?.data?.total_wallet}`
                                },{
                                    title:"Today's SuccessFull Transaction",
                                    value:`${overviewData?.data?.transaction_statistics?.todays_total_failed_transaction}`
                                },{
                                    title:"Todays's Failed Transaction(Count)",
                                    value:`${overviewData?.data?.transaction_statistics?.todays_total_successful_transaction}`
                                },{
                                    title:"Total Successfull transaction volume",
                                    value:`${overviewData?.data?.transaction_statistics?.total_successful_transaction_volume}`
                                },{
                                    title:"Total transaction Volume",
                                    value:`₦${overviewData?.data?.transaction_statistics?.total_transaction_volume}`
                                }
                            ].map((info,index)=>{
                                const{
                                    title,
                                    value
                                }=info;
                                return(
                                    <div className="p-2 grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                                        <div>
                                            <Text
                                                style="text-start text-sm"
                                                value={title}
                                            />
                                        </div>
                                        <div>
                                            {
                                            isLoading?(
                                                <div className="animate-pulse">
                                                    <span
                                                        className="inline-block min-h-[0.7em] w-full flex-auto justify-start items-start cursor-wait bg-current align-middle opacity-40">
                                                    </span>
                                                </div>
                                                ):(
                                                    <Text
                                                        style="text-end text-sm"
                                                        value={value}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                   {overviewData?.data && <CountChart data={overviewData.data}/>}
                </div>
            </div>
        </ReportLayout>
    )
}