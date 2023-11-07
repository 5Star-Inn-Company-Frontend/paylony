import { Text } from "../global/text"
import { CountChart } from "./countChart";
import { ReportLayout } from "./reportLayout";

export const Overview =()=>{
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
                        value="Performed 25 transactions out of 30 transactions "
                    />
                    <div className="flex flex-col divide-y divide-slate-200">
                        {
                            [
                                {
                                    title:"Pool Account Balance",
                                    value:"$350"
                                },{
                                    title:"Number of Active Terminal",
                                    value:"5"
                                },{
                                    title:"Total Transaction (Amount)",
                                    value:"$350000"
                                },{
                                    title:"Total Transaction (count)",
                                    value:"$350"
                                },{
                                    title:"Total Transaction (Successfull)",
                                    value:"$350"
                                },{
                                    title:"Total Transaction (Unsuccessfull)",
                                    value:"$350"
                                },{
                                    title:"Total Wallet (Balance)",
                                    value:"$350"
                                },{
                                    title:"Daily Transaction",
                                    value:"$350"
                                },{
                                    title:"Daily Transaction(Count)",
                                    value:"$350"
                                },{
                                    title:"Total Cashout(successfull)",
                                    value:"$350"
                                },{
                                    title:"Estimated Fund Transfer Revenue",
                                    value:"$350"
                                },{
                                    title:"Estimated Cashout Revenue",
                                    value:"$350"
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
                                            <Text
                                                style="text-end text-sm"
                                                value={value}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <CountChart/>
                </div>
            </div>
        </ReportLayout>
    )
}