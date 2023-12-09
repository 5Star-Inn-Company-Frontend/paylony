import { AgentLayout } from "./agentLayout"
import { TableLayout } from "./tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import {useGetAllAgentsQuery} from "../../store/apiSlice"
import { toast } from "react-toastify";
import Spinner from "../global/spinner";
import { useState } from "react";

export const ViewAgent =()=>{
    const[
        actionData,
        setActionData
    ]= useState([]);
    const{
        data:agentData,
        isLoading,
        isError,
        error
    }= useGetAllAgentsQuery();
    console.log(agentData)
    const data =[];
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e)=>{
        console.log(e.target.value)
        // const filtereddata = agentData?.find((data)=>data.name?.toLowerCase().includes(e))
        // setActionData(filtereddata)
    }
    if(isError){
        toast.error(error?.data?.message)
    }
    return(
        <DashBoardLayout>
        <AgentLayout title="View Agents">
            {
                isLoading ? (
                    <Spinner/>
                    ):(
                        <TableLayout
                            handleInputChange={(e)=>handleInputChange(e)}
                            createBtnAction={()=>window.location.replace("/personalInfo")}
                            createBtnText="Create Agent"
                            headerData={[
                                "s/n","ID","first_name","last_name","email","Date of birth","gender","Residential Address","State","Agent Type","User Type",
                                "Account Status","Created At","Updated At"
                            ]}
                            data={agentData?.data}
                        >
                        {
                            agentData?.data?.map((info,index)=>{
                                const{
                                    id,
                                    first_name,
                                    last_name,
                                    email,
                                    dob,
                                    gender,
                                    residential_address,
                                    state,
                                    agent_type,
                                    user_type,
                                    business,
                                    created_at,
                                    updated_at,
                                    account_status
                                }=info
                                return(
                                    <tr 
                                        className="border-b dark:border-neutral-500"
                                        key={index}
                                    >
                                        <td className={bodyStyle}>{index+1}</td>
                                        {
                                            [
                                               id,
                                                first_name,
                                                last_name,
                                                email,
                                                dob,
                                                gender,
                                                residential_address,
                                                state,
                                                agent_type,
                                                user_type,
                                                account_status
                                            ].map((body,index)=>{
                                                return  (
                                                    <td className={bodyStyle} key={index}>{body}</td>
                                                    )
                                            })
                                        }
                                        <td className={bodyStyle}>{
                                                new Date(created_at)
                                                .toLocaleString()
                                            }
                                        </td>
                                        <td className={bodyStyle}>{
                                                new Date(updated_at)
                                                .toLocaleString()
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                    </TableLayout>
                )
            }
        </AgentLayout>
        </DashBoardLayout>
    )
}