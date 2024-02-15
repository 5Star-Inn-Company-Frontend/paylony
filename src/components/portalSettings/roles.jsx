import { PortalLayout } from "./portalLayout";
import {useState } from "react";
import Spinner from "../global/spinner";
import { TableLayout } from "../agents/tableLayout";
import { TableDropDown } from "../global/dropdown";
import { useDeleteRolesMutation, useGetAllRolesQuery } from "../../store/apiSlice";
import { ToastError, ToastSucess } from "../global/toast";

export const AllRoles =()=>{
    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"name",
        value:""
    });

    const{
        data:rolesData,
        isLoading:rolesIsLoading,
        isError,
        error
    }= useGetAllRolesQuery({
        filterBy:filterBy
    });

    const [deleteRoles, {isLoading :deleteIsLoading}] = useDeleteRolesMutation();

    const deleteAction =(id)=>{
        deleteRoles(id).unwrap().then((payload)=>{
            ToastSucess(payload?.message);
        }).catch((error)=>{
            const{
                status,
                data
            }=error
            ToastError(status,data)
            console.log(error)
        })
    }

    const[
        filterData,
        setFilterData
    ]= useState({
        title:"name",
        value:""
    });

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
   
    const handleFilterChange =(e)=>{
        console.log(e)
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
        <PortalLayout  title="Roles">
        {
            rolesIsLoading ? (
                <Spinner/>
                ):(
                <TableLayout
                    createBtnAction={()=>window.location.replace("/add_roles")}
                    createBtnText="Add Roles"
                    headerData={[
                        "S/N","Id","Name","Guard name","Action"
                    ]}
                    handleFilterChange={handleFilterChange}
                    sortButton={[
                        {
                            title:"Name",
                            action:"name"
                        },{
                            title:"Guard Name",
                            action:"guard_name"
                        },{
                            title:"Id",
                            action:"id"
                        }
                    ]}
                    filterData={filterData}
                    setFilterData={setFilterData}
                    setFilterBy={setFilterBy}
                    inputPlaceHolder={`Search for role `}
                    data={rolesData?.data}
                    >
                {
                    rolesData?.data?.map((info,index)=>{
                        const{
                            id,
                            name,
                            guard_name
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
                                        name,
                                        guard_name
                                    ].map((body,index)=>{
                                        return  (
                                            <td className={bodyStyle} key={index}>{body}</td>
                                            )
                                    })
                                }
                                <td>
                                    <TableDropDown
                                        list={[
                                            {
                                                dropTitle:deleteIsLoading?"please wait...":"delete",
                                                action:()=>deleteAction(id)
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
                                    />
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
    )
}