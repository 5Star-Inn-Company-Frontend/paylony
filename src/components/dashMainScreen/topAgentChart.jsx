import { useState } from "react"
import { BarChart } from "../global/barchat";
export const TopAgent=()=>{
    const agentdata=[
        {
            name:"Magodo POS",
            number:50
        },{
            name:"Femi POS",
            number:20
        },{
            name:"Otti POS",
            number:10
        }
    ]
    const [
        userData
    ] = useState({
        labels:agentdata?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"Agent chart",
            borderColor: '#854FFF',
            backgroundColor: '#854FFF',
            data:agentdata?.map(
                (data)=>data.number
            )
        }]
    });
    return(
        <>
           <BarChart data={userData}/>
        </>
    )
}