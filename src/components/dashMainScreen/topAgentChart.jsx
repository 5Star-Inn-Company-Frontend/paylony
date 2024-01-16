import { useState } from "react"
import { BarChart } from "../global/barchat";
export const TopAgent=({
    agentdata
})=>{
    const [
        userData
    ] = useState({
        labels:agentdata?.top_performing_terminal?.map(
            (data)=>data.terminal_name
        ),
        datasets:[{
            label:"Agent chart",
            borderColor: '#854FFF',
            backgroundColor: '#854FFF',
            data:agentdata?.top_performing_terminal?.map(
                (data)=>data.transaction_count
            )
        }]
    });
    return(
        <>
           <BarChart data={userData}/>
        </>
    )
}