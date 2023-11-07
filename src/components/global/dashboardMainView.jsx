import { DashBoardLayout } from "./dashboardLayout"
import { PTransaction } from "../dashMainScreen/presentDayTransaction"
import { Text } from "./text"
import { TotalInformation } from "../dashMainScreen/totalDetails"

export const DashbaordMainView =()=>{
    return(
    <>
       <DashBoardLayout>
            <Text
                style="text-lg text-start font-semibold mt-6"
                value="Welcome!"
            />
            <Text
                style="text-2xl text-start font-semibold mb-4"
                value="Hello Tolulope Ayoade"
            />
            <TotalInformation/>
            <PTransaction/>
       </DashBoardLayout>
    </>
    )
}