import { AgentLayout } from "./agentLayout"
import { TableLayout } from "./tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import { useGetAllAggregatorsQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export const ViewAggregators =()=>{
    const{
        data:aggregatorsData,
        isLoading,
        isError,
        error
    }= useGetAllAggregatorsQuery();

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
        if(aggregatorsData){
            setActionData(aggregatorsData?.data)
        }
    },[aggregatorsData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e,tobeFilterBy)=>{
        let filterDdata;
        switch(tobeFilterBy){
            case "firstname": filterDdata = aggregatorsData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e))
            break;
            case "id": filterDdata = aggregatorsData?.data?.filter((data)=>data.id?.toLowerCase().includes(e))
            break;
            case "lastname": filterDdata = aggregatorsData?.data?.filter((data)=>data.last_name?.toLowerCase().includes(e))
            break;
            case "email": filterDdata = aggregatorsData?.data?.filter((data)=>data.email?.toLowerCase().includes(e))
            break;
            case "date": filterDdata = aggregatorsData?.data?.filter((data)=>data.created_at?.toLowerCase().includes(e))
            break;
            case "username": filterDdata = aggregatorsData?.data?.filter((data)=>data.username?.toLowerCase().includes(e))
            break;
            default : filterDdata = aggregatorsData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e))
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
        <AgentLayout title="View Aggregators">
            {
                isLoading ? (
                    <Spinner/>
                    ):(
                        <TableLayout
                            createBtnAction={()=>window.location.replace("/create_aggregators")}
                            createBtnText="Create Aggregators"
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
                                    title:"UserName",
                                    action:"username"
                                }
                            ]}
                            filterData={filterData}
                            setFilterData={setFilterData}
                            filterBy={filterBy}
                            setFilterBy={setFilterBy}
                            inputPlaceHolder={`Search aggregator `}
                            headerData={[
                                "S/N",
                                "Id",
                                "First name",
                                "Last name",
                                "Username",
                                "Email",
                                "Date of birth",
                                "Gender",
                                "Residential address",
                                "State",
                                // "agent_type",
                                // "user_type",
                                "Account status",
                                "Created at",
                            ]}
                            data={actionData}
                        >
                        {
                            actionData?.map((info,index)=>{
                                const{
                                    id,
                                    first_name,
                                    last_name,
                                    username,
                                    email,
                                    dob,
                                    gender,
                                    residential_address,
                                    state,
                                    // agent_type,
                                    // user_type,
                                    account_status,
                                    created_at,
                                    updated_at,
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
                                                username,
                                                email,
                                                dob,
                                                gender,
                                                residential_address,
                                                state,
                                                // agent_type,
                                                // user_type,
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