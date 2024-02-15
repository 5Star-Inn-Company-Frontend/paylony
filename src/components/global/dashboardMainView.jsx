import { DashBoardLayout } from "./dashboardLayout"
import { PTransaction } from "../dashMainScreen/presentDayTransaction"
import { Text } from "./text"
import { TotalInformation } from "../dashMainScreen/totalDetails"
import { useGetAllDashboardQuery } from "../../store/apiSlice"
import toast from "react-hot-toast"
import { ToastError } from "./toast"

export const DashbaordMainView =()=>{
    const{
        data:dasboardData,
        isLoading:dasboardIsLoading,
        isError,
        error
    }= useGetAllDashboardQuery();
    if(isError){
        const{
            status,
            data
        }=error
        ToastError(status,data)
        console.log(error)
    }
    return(
    <>
       <DashBoardLayout>
            <TotalInformation data={dasboardData?.data} isLoading={dasboardIsLoading}/>
            <PTransaction 
                data={dasboardData?.data} 
                isLoading={dasboardIsLoading} 
                balance={dasboardData?.data?.aggregated_wallent_balance} 
            />
       </DashBoardLayout>
    </>
    )
}