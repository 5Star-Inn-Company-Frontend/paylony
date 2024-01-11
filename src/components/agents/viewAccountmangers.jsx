import { AgentLayout } from "./agentLayout"
import { TableLayout } from "./tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import { useGetAllManagersQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ViewAccountMangers =()=>{
    const{
        data:managersData,
        isLoading,
        isError,
        error
    }= useGetAllManagersQuery();
    
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
        if(managersData){
            setActionData(managersData?.data)
        }
    },[managersData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e,tobeFilterBy)=>{
        let filterDdata;
        switch(tobeFilterBy){
            case "firstname": filterDdata = managersData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e))
            break;
            case "id": filterDdata = managersData?.data?.filter((data)=>data.id?.toLowerCase().includes(e))
            break;
            case "lastname": filterDdata = managersData?.data?.filter((data)=>data.last_name?.toLowerCase().includes(e))
            break;
            case "email": filterDdata = managersData?.data?.filter((data)=>data.email?.toLowerCase().includes(e))
            break;
            case "date": filterDdata = managersData?.data?.filter((data)=>data.created_at?.toLowerCase().includes(e))
            break;
            case "user_type": filterDdata = managersData?.data?.filter((data)=>data.user_type?.toLowerCase().includes(e))
            break;
            default : filterDdata = managersData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e))
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
        <AgentLayout title="View Acc Managers">
            {
                isLoading ? (
                    <Spinner/>
                    ):(
                        <TableLayout
                            createBtnAction={()=>window.location.replace("/loginDetails")}
                            createBtnText="Create Managers"
                            handleInputChange={handleInputChange}
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
                                    title:"User type",
                                    action:"user_type"
                                }
                            ]}
                            filterData={filterData}
                            setFilterData={setFilterData}
                            filterBy={filterBy}
                            downloadAction={"managers"}
                            setFilterBy={setFilterBy}
                            inputPlaceHolder={`Search account managers `}
                            headerData={[
                                "s/n","id","first name","last name","email","Date of birth","gender","Residential Address","State","User Type",
                                "Account Status","Created At"
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
                                    // agent_type,
                                    user_type,
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
                                                // agent_type,
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