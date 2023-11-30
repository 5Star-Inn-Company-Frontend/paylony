import icon1 from "../../assets/Frame 1000002437.png"
import icon2 from "../../assets/Frame 1000002437 (1).png"
import icon3 from "../../assets/Frame 1000002437 (2).png"
import icon4 from "../../assets/Frame 1000002437 (3).png"
import img1 from "../../assets/Group 1.png"
import img2 from "../../assets/Group 1 (1).png"
import img3 from "../../assets/Group 1 (2).png"
import img4 from "../../assets/Group 1 (3).png"
import { Text } from "../global/text"

export const TotalInformation =()=>{
    return(
        <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
            {
                [
                    {
                        title:"Total Profiled Merchant",
                        amount:"30",
                        icon:icon1,
                        img:img1
                    },{
                        title:"Total Active Merchant",
                        amount:"40",
                        icon:icon2,
                        img:img2
                    },{
                        title:"Merchant Actively Transacting",
                        amount:"10",
                        icon:icon3,
                        img:img3
                    },{
                        title:"Aggregiated Wallet Balance",
                        amount:"20",
                        icon:icon4,
                        img:img4
                    },{
                        title:"Total Transaction Volume",
                        amount:"$200",
                        icon:icon1,
                        img:img1
                    },{
                        title:"Total Transaction Count",
                        amount:"10",
                        icon:icon2,
                        img:img2
                    },{
                        title:"Successful Transaction volume",
                        amount:"$250",
                        icon:icon3,
                        img:img3
                    },{
                        title:"Successful Transaction Count",
                        amount:"10",
                        icon:icon4,
                        img:img4
                    }
                ].map((info,index)=>{
                    const{
                        title,
                        amount,
                        icon,
                        img
                    }=info
                    return(
                        <div 
                            className="px-4 py-8 rounded-md bg-bodyCl  flex flex-col justify-between"
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
                                        style="text-sm text-start"
                                        value={title}
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <Text
                                    style="text-xl font-semibold text-start"
                                    value={amount}
                                />
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