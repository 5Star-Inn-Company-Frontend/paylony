import { AgentLayout } from "./agentLayout"
import { TableLayout } from "./tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import {useGetAllAgentsQuery} from "../../store/apiSlice"
import Spinner from "../global/spinner";
import { useState } from "react";
import toast from "react-hot-toast";
import { ToastError } from "../global/toast";

export const ViewAgent =()=>{
    
    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"first_name",
        value:""
    });

    const{
        data:agentData,
        isLoading,
        isError,
        error
    }= useGetAllAgentsQuery({
        filterBy:filterBy
    });

    const[
        filterData,
        setFilterData
    ]= useState({
        title:"first_name",
        value:""
    });

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"

    const handleFilterChange =(e)=>{
        setFilterData((prev)=>{
            return{
                ...prev,
                title:e
            }
        })
    }

    if(isError){
        const{
            status,
            data
        }=error
        ToastError(status,data)
        console.log(error)
    }

    return(
        <DashBoardLayout>
        <AgentLayout title="View Agents">
            {
                isLoading ? (
                    <Spinner/>
                    ):(
                        <TableLayout
                            createBtnAction={()=>window.location.replace("/personalInfo")}
                            createBtnText="Create Agent"
                            // handleInputChange={handleInputChange}
                            downloadAction={"agents"}
                            sortButton={[
                                {
                                    title:"First name",
                                    action:"first_name"
                                },{
                                    title:"Creation Date",
                                    action:"created_at"
                                },{
                                    title:"Last name",
                                    action:"last_name"
                                },{
                                    title:"User Type",
                                    action:"user_type"
                                },{
                                    title:"Agent Type",
                                    action:"agent_type"
                                },{
                                    title:"Account Status",
                                    action:"account_status"
                                },
                            ]}
                            filterData={filterData}
                            setFilterData={setFilterData}
                            setFilterBy={setFilterBy}
                            handleFilterChange={handleFilterChange}
                            inputPlaceHolder={`Search agent`}
                            headerData={[
                                "S/N","Id","First name","Last name","Email","Date of Birth","Gender","Residential address","State","Agent type","User type",
                                "Account status","Created at"
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
                                                state?.name,
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