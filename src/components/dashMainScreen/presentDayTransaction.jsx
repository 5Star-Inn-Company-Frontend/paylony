
import icon3 from "../../assets/Frame 1000002437 (2).png"
import icon4 from "../../assets/Frame 1000002437 (3).png"
import { Text } from "../global/text"
import { TopAgent } from "./topAgentChart"
export const PTransaction =()=>{
    return(
        <div className="grid my-8 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
            <div>
                <Text
                    style="text-2xl font-semibold text-start mb-4"
                    value="Today's Transaction"
                />
                <div 
                    className="flex flex-col justify-between"
                >
                    <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
                        <div 
                            className="flex flex-col p-4 bg-pmain rounded-md  h-[10rem]"
                        >
                            <div className="flex items-center mb-4">
                                <div className="me-2">
                                    <img 
                                        src={icon3}
                                        alt="object not found"
                                        className="w-8"
                                    />
                                </div>
                                <div>
                                    <Text
                                        style="text-lg text-start text-white"
                                        value="Successful Transaction"
                                    />
                                </div>
                            </div>
                            <div>
                                <Text
                                    style="text-4xl font-semibold text-start text-white"
                                    value="30"
                                />
                            </div>
                        </div>
                        <div 
                            className="flex flex-col justify-between bg-white p-4 rounded-md h-[10rem]"
                        >
                            <Text
                                style="text-lg text-start font-semibold"
                                value="LONY TECH SOLUTIONS LTD"
                            />
                            <Text
                                style="text-sm text-start font-semibold"
                                value="9978675625"
                            />
                            <Text
                                style="text-sm text-start text-purple"
                                value="Providus Bank"
                            />
                        </div>
                        <div 
                            className="flex flex-col bg-violet p-4 rounded-md h-[10rem]"
                        >
                            <div className="flex items-center mb-4">
                                <div className="me-2">
                                    <img 
                                        src={icon4}
                                        alt="object not found"
                                        className="w-8"
                                    />
                                </div>
                                <div>
                                    <Text
                                        style="text-lg text-start text-white"
                                        value="Unsuccessfull Transaction"
                                    />
                                </div>
                            </div>
                            <div>
                                <Text
                                    style="text-4xl font-semibold text-start text-white"
                                    value="30"
                                />
                            </div>
                        </div>
                        <div 
                            className="flex flex-col justify-center  bg-white p-4 h-[10rem] rounded-md"
                        >
                            <Text
                                style="text-lg text-start font-semibold"
                                value="Bal : $7089"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-md">
                <div className="flex flex-wrap items-center">
                    <span className="me-2">Top Performing agent.</span>
                    <span>. October 2023</span>
                </div>
                <div className="bar-container">
                    <TopAgent/>
                </div>
            </div>
        </div>
    )
}