import { AgentLayout } from "./agentLayout"
import { toast } from "react-toastify";
import { TableLayout } from "./tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import { useGetAllAggregatorsQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import { useEffect, useState } from "react";
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

    useEffect(()=>{
        if(aggregatorsData){
            setActionData(aggregatorsData?.data)
        }
    },[aggregatorsData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"

    const handleInputChange =(e)=>{
        const filtereddata = aggregatorsData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e.target.value))
        setActionData(filtereddata)
    }
    
    const SortDataAction=(action)=>{
        let filteredData;
        switch(action){
            case 'name':(
                filteredData = aggregatorsData?.data?.sort((a, b)=> (a.first_name < b.first_name ) ? -1 : (a.first_name > b.first_name) ? 1 : 0)
            )
            break;
            case 'email':(
                filteredData = aggregatorsData?.data?.sort((a, b)=> (a.email < b.email) ? -1 : (a.email > b.email) ? 1 : 0)
            )
            break;
            case 'account_status':(
                filteredData = aggregatorsData?.data?.sort((a, b)=> (a.account_status < b.account_status ) ? -1 : (a.account_status > b.account_status) ? 1 : 0)
            )
            break;
            case 'date':(
                filteredData = aggregatorsData?.data?.sort((a, b)=> (a.created_at < b.created_at ) ? -1 : (a.created_at > b.created_at) ? 1 : 0)
            )
            break;
            default:(
                filteredData = aggregatorsData?.data?.sort((a, b)=> (a.first_name < b.first_name ) ? -1 : (a.first_name > b.first_name) ? 1 : 0)
            )
            break;
        }
        setActionData( filteredData)
    }

    if(isError){
        const{
            status,
            data
        }=error
        if(data?.error){
            toast.error(data?.error)
        }else{
         toast.error(data?.message)
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
                            handleInputChange={(e)=>handleInputChange(e)}
                            createBtnAction={()=>window.location.replace("/create_aggregators")}
                            createBtnText="Create Aggregators"
                            sortButton={[
                                {
                                    title:"Name",
                                    action:"name"
                                },{
                                    title:"Email",
                                    action:"email"
                                },{
                                    title:"Status",
                                    action:"account_status"
                                },{
                                    title:"Date",
                                    action:"date"
                                },
                            ]}
                            SortDataAction={SortDataAction}
                            headerData={[
                                "s/n",
                                // "id",
                                "first_name",
                                "last_name",
                                "username",
                                "email",
                                "dob",
                                "gender",
                                "residential_address",
                                "state",
                                // "agent_type",
                                // "user_type",
                                "account_status",
                                "created_at",
                                "updated_at",
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
                                                // id,
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