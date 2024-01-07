import { DashBoardLayout } from "../global/dashboardLayout";
import { PortalLayout } from "./portalLayout";
import { useEffect, useState } from "react";
import Spinner from "../global/spinner";
import { TableLayout } from "../agents/tableLayout";
import { TableDropDown } from "../global/dropdown";
import { useDeleteRolesMutation, useGetAllRolesQuery } from "../../store/apiSlice";
import { toast } from "react-toastify";

export const AllRoles =()=>{
    const{
        data:rolesData,
        isLoading:rolesIsLoading,
        isError,
        error
    }= useGetAllRolesQuery();

    const [deleteRoles, {isLoading :deleteIsLoading}] = useDeleteRolesMutation();

    const deleteAction =(id)=>{
        deleteRoles(id).unwrap().then((payload)=>{
            toast(payload?.message)
        }).catch((error)=>{
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
        })
    }

    const[
        actionData,
        setActionData
    ]= useState([]);

    useEffect(()=>{
        if(rolesData){
            setActionData(rolesData?.data)
        }
    },[rolesData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e)=>{
        const filtereddata = rolesData?.data?.filter((data)=>data.first_name?.toLowerCase().includes(e.target.value))
        setActionData(filtereddata)
    }

    const SortDataAction=(action)=>{
        let filteredData;
        switch(action){
            case 'name':(
                filteredData =terminalData?.data?.sort((a, b)=> (a.name < b.name ) ? -1 : (a.name > b.name) ? 1 : 0)
            )
            break;
            case 'date':(
                filteredData =terminalData?.data?.sort((a, b)=> (a.created_at < b.created_at ) ? -1 : (a.created_at > b.created_at) ? 1 : 0)
            )
            break;
            default:(
                filteredData =terminalData?.data?.sort((a, b)=> (a.name < b.name ) ? -1 : (a.name > b.name) ? 1 : 0)
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
        <PortalLayout  title="Roles">
        {
            rolesIsLoading ? (
                <Spinner/>
                ):(
                <TableLayout
                    createBtnAction={()=>window.location.replace("/add_roles")}
                    createBtnText="Add Roles"
                    headerData={[
                        "Name","Guard name","created at","updated at","Action"
                    ]}
                    handleInputChange={(e)=>handleInputChange(e)}
                    sortButton={[
                        {
                            title:"Name",
                            action:"name"
                        },{
                            title:"Date",
                            action:"date"
                        },
                    ]}
                    SortDataAction={SortDataAction}
                    data={ actionData}
                >
                {
                    actionData?.map((info,index)=>{
                        const{
                            id,
                            name,
                            guard_name,
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
                                        name,
                                        guard_name
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
                                <td>
                                    {/* <TableDropDown
                                        list={[
                                            {
                                                dropTitle:deleteIsLoading?"please wait...":"delete",
                                                action:deleteAction(id)
                                            },{
                                                dropTitle:"update",
                                                action:()=>window.location.replace(`/portal/update_roles/${id}`)
                                            },{
                                                dropTitle:"assign",
                                                action:()=>{
                                                    let action = "assign"
                                                    window.location.replace(`/portal/${action}/${id}`)
                                                }
                                            },{
                                                dropTitle:"revoke",
                                                action:()=>{
                                                    let action = "revoke"
                                                    window.location.replace(`/portal/${action}/${id}`)
                                                }
                                            }
                                        ]}
                                    /> */}
                                </td>
                            </tr>
                        )
                    }
                )
            }
            </TableLayout>
            )
        }
        </PortalLayout>
        </DashBoardLayout>
    )
}