import { AgentLayout } from "./agentLayout"
import { TableLayout } from "./tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import { useGetAllAggregatorsQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import { useState } from "react";
import toast from "react-hot-toast";
import { ToastError } from "../global/toast";
export const ViewAggregators =()=>{
    
    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"first_name",
        value:""
    });

    const{
        data:aggregatorsData,
        isLoading,
        isError,
        error
    }= useGetAllAggregatorsQuery({
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
                title:e,
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
        <AgentLayout title="View Aggregators">
            {
                isLoading ? (
                    <Spinner/>
                    ):(
                        <TableLayout
                            createBtnAction={()=>window.location.replace("/create_aggregators")}
                            createBtnText="Create Aggregators"
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
                                    title:"Email",
                                    action:"email"
                                },{
                                    title:"Id",
                                    value:"id"
                                    }
                                ]}
                            filterData={filterData}
                            setFilterData={setFilterData}
                            handleFilterChange={handleFilterChange}
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
                            data={aggregatorsData?.data}
                        >
                        {
                            aggregatorsData?.data?.map((info,index)=>{
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
                                                state?.name,
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