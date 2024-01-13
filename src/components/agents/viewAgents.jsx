import { AgentLayout } from "./agentLayout"
import { TableLayout } from "./tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import {useGetAllAgentsQuery} from "../../store/apiSlice"
import Spinner from "../global/spinner";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ViewAgent =()=>{
    const{
        data:agentData,
        isLoading,
        isError,
        error
    }= useGetAllAgentsQuery();

    const[
        actionData,
        setActionData
    ]= useState([]);

    const[
        filterBy,
        setFilterBy
    ]= useState("firstname");

    const[
        filterData,
        setFilterData
    ]= useState("");

    useEffect(()=>{
        if(agentData){
            setActionData(agentData?.data)
        }
    },[agentData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e,tobeFilterBy)=>{
        let filterDdata;
        console.log(tobeFilterBy)
        switch(tobeFilterBy){
            case "firstname": filterDdata = agentData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e))
            break;
            case "id": filterDdata = agentData?.data?.filter((data)=>data.id?.toLowerCase().includes(e))
            break;
            case "lastname": filterDdata = agentData?.data?.filter((data)=>data.last_name?.toLowerCase().includes(e))
            break;
            case "email": filterDdata = agentData?.data?.filter((data)=>data.email?.toLowerCase().includes(e))
            break;
            case "date": filterDdata = agentData?.data?.filter((data)=>data.created_at?.toLowerCase().includes(e))
            break;
            case "agent_type": filterDdata = agentData?.data?.filter((data)=>data.agent_type?.toLowerCase().includes(e))
            break;
            default : filterDdata = agentData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e))
        }
        setActionData(filterDdata)
    }

    if(isError){
        const{
            status,
            data
        }=error
        if(data?.error){
            toast.error(data?.error,{
                style:{
                    background:"#fff1f2"
                }
            })
        }else{
            toast.error(data?.message,{
                style:{
                    background:"#fff1f2"
                }
            })
        }
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
                            handleInputChange={handleInputChange}
                            downloadAction={"agents"}
                            sortButton={[
                                {
                                    title:"First Name",
                                    action:"firstname"
                                },{
                                    title:"Email",
                                    action:"email"
                                },{
                                    title:"Id",
                                    action:"id"
                                },{
                                    title:"Date",
                                    action:"date"
                                },{
                                    title:"Agent type",
                                    action:"agent_type"
                                }
                            ]}
                            filterData={filterData}
                            setFilterData={setFilterData}
                            filterBy={filterBy}
                            setFilterBy={setFilterBy}
                            inputPlaceHolder={`Search agent`}
                            headerData={[
                                "S/N","Id","First name","Last name","Email","Date of Birth","Gender","Residential address","State","Agent type","User type",
                                "Account status","Created at"
                            ]}
                            data={actionData}
                        >
                        {
                            actionData?.map((info,index)=>{
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