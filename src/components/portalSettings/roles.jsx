import { PortalLayout } from "./portalLayout";
import { useEffect, useState } from "react";
import Spinner from "../global/spinner";
import { TableLayout } from "../agents/tableLayout";
import { TableDropDown } from "../global/dropdown";
import { useDeleteRolesMutation, useGetAllRolesQuery } from "../../store/apiSlice";
import toast from "react-hot-toast";

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
            toast.success(payload?.message,{
                style:{
                    background:"#ecfdf5",
                },
                iconTheme:{
                    primary:"#6ee7b7"
                }
            })
        }).catch((error)=>{
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
        })
    }

    const[
        actionData,
        setActionData
    ]= useState([]);

    const[
        filterBy,
        setFilterBy
    ]= useState("name");

    const[
        filterData,
        setFilterData
    ]= useState("");

    useEffect(()=>{
        if(rolesData){
            setActionData(rolesData?.data)
        }
    },[rolesData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e,tobeFilterBy)=>{
        let filterDdata;
        console.log(tobeFilterBy)
        switch(tobeFilterBy){
            case "name": filterDdata = rolesData?.data?.filter((data)=>data.name?.toLowerCase().includes(e))
            break;
            case "id": filterDdata = rolesData?.data?.filter((data)=>data.id?.toLowerCase().includes(e))
            break;
            case "guard_name": filterDdata = rolesData?.data?.filter((data)=>data.guard_name?.toLowerCase().includes(e))
            break;
            default : filterDdata = rolesData?.data?.filter((data)=>data.name?.toLowerCase().includes(e))
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
        <PortalLayout  title="Roles">
        {
            rolesIsLoading ? (
                <Spinner/>
                ):(
                <TableLayout
                    createBtnAction={()=>window.location.replace("/add_roles")}
                    createBtnText="Add Roles"
                    headerData={[
                        "S/n","id","Name","Guard name","Action"
                    ]}
                    handleInputChange={handleInputChange}
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
                            filterBy={filterBy}
                            setFilterBy={setFilterBy}
                            inputPlaceHolder={`Search role `}
                    data={ actionData}
                >
                {
                    actionData?.map((info,index)=>{
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