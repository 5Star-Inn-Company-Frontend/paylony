import icon1 from "../../assets/Frame 1000002437.png"
import icon2 from "../../assets/Frame 1000002437 (1).png"
import icon3 from "../../assets/Frame 1000002437 (2).png"
import icon4 from "../../assets/Frame 1000002437 (3).png"
import img1 from "../../assets/Group 1.png"
import img2 from "../../assets/Group 1 (1).png"
import img3 from "../../assets/Group 1 (2).png"
import img4 from "../../assets/Group 1 (3).png"
import { Text } from "../global/text"
import {
    Ripple,
    initTE,
  } from "tw-elements";
import { useEffect } from "react"

export const TotalInformation =({data,isLoading})=>{
    useEffect(()=>{
        initTE({ Ripple });
    })
    return(
        <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
            {
                [
                    {
                        title:"Total Profiled Merchant",
                        amount:data?.merchants?.total_merchants,
                        bg:"bg-white",
                        icon:icon1,
                        img:img1
                    },{
                        title:"Total Active Merchant",
                        amount:data?.merchants?.total_active_merchants,
                        bg:"bg-white",
                        icon:icon2,
                        img:img2
                    },{
                        title:"Total Transactions",
                        amount:data?.transactions?.total_transaction_count,
                        bg:"bg-white",
                        icon:icon3,
                        img:img3
                    },{
                        title:"Aggregiated Wallet Balance",
                        amount:data?.aggregated_wallent_balance,
                        bg:"bg-white",
                        icon:icon4,
                        img:img4
                    },{
                        title:"Total Transaction Volume",
                        amount:`${data?.transactions?.total_transaction_volume}`,
                        bg:"bg-[#FAF9FF]",
                        icon:icon1,
                        img:img1
                    },{
                        title:"Total transaction Count",
                        amount:`${data?.transactions?.total_transaction_count}`,
                        bg:"bg-[#FBFFFC]",
                        icon:icon2,
                        img:img2
                    },{
                        title:"Successful transaction volume",
                        amount:data?.transactions?.total_successful_transaction_volume,
                        icon:icon3,
                        bg:"bg-white",
                        img:img3
                    },{
                        title:"Successful transaction Count",
                        amount:data?.transactions?.total_successful_transaction_count,
                        bg:"bg-[#F8FBFF]",
                        icon:icon4,
                        img:img4
                    }
                ].map((info,index)=>{
                    const{
                        title,
                        amount,
                        bg,
                        icon,
                        img
                    }=info
                    return(
                        <div 
                            className={`px-4 py-8 rounded-md ${bg}  flex flex-col justify-between`}
                            key={index}
                        >
                            <div className="flex items-center mb-2">
                                <div className="me-2">
                                     <img 
                                        src={icon}
                                        alt="object not found"
                                        className="w-8"
                                    />
                                </div>
                                <div>
                                    <Text
                                        style="text-md text-start"
                                        value={title}
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                {
                                    isLoading?(
                                        <div className="animate-pulse">
                                            <span
                                                className="inline-block min-h-[0.7em] w-full flex-auto justify-start items-start cursor-wait bg-current align-middle opacity-40">
                                            </span>
                                        </div>
                                        ):( 
                                        <Text
                                            style="text-xl font-semibold text-start"
                                            value={amount}
                                        />
                                        )
                                }
                            </div>
                            <div>
                                <img 
                                    src={img}
                                    alt="object not found"
                                    className="w-full "
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}