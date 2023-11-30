import { DashBoardLayout } from "./dashboardLayout"
import { PTransaction } from "../dashMainScreen/presentDayTransaction"
import { Text } from "./text"
import { TotalInformation } from "../dashMainScreen/totalDetails"

export const DashbaordMainView =()=>{
    const user = JSON.parse(localStorage.getItem('paylonyToken'))
    return(
    <>
       <DashBoardLayout>
            <div className="lg:hidden xl:hidden md:hidden sm:block xs:block xxs:block">
                <Text
                    style="text-lg text-start mt-6"
                    value="Welcome!"
                />
                <Text
                    style="text-2xl text-start font-semibold mb-4 text-black"
                    value={`Hello ${user?.first_name}`}
                />
            </div> 
            <TotalInformation/>
            <PTransaction/>
       </DashBoardLayout>
    </>
    )
}