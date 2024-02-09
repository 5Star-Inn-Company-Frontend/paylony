import { useDeleteTerminalsMutation, useGetAllTerminalsQuery } from "../../store/apiSlice";
import { TableLayout } from "../agents/tableLayout";
import { TableDropDown } from "../global/dropdown";
import { TerminalLayout } from "./terminalLayout";
import Spinner from "../global/spinner";
import { useState } from "react";
import toast from "react-hot-toast";

export const AllTerminal =()=>{
    const user = JSON.parse(localStorage.getItem('paylonyToken'));

    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"name",
        value:""
    });

    const{
        data:terminalData,
        isLoading:terminalIsLoading,
        isError,
        error
    }= useGetAllTerminalsQuery({
        filterBy:filterBy
    });

    const [deleteTerminals, {isLoading}] = useDeleteTerminalsMutation()

    const deleteAction =(id)=>{
        deleteTerminals({
            id:id
        }).unwrap().then((payload)=>{
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
        filterData,
        setFilterData
    ]= useState({
        title:"name",
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
        <TerminalLayout title="All Terminals">
        {
                terminalIsLoading ? (
                    <Spinner/>
                    ):(
            <TableLayout
                createBtnAction={()=>window.location.replace("/add_terminal")}
                handleFilterChange={handleFilterChange}
                sortButton={[
                    {
                        title:"Name",
                        action:"name"
                    },{
                        title:"Date",
                        action:"date"
                    },{
                        title:"Id",
                        action:"id"
                    },{
                        title:"Serial Number",
                        action:"serial_number"
                    }
                ]}
                downloadAction={"terminals"}
                filterData={filterData}
                setFilterData={setFilterData}
                setFilterBy={setFilterBy}
                inputPlaceHolder={`Search terminal `}
                createBtnText="Add Terminal"
                hideCreateAction={user?.user_type === "admin"?true:false}
                headerData={[
                    "S/N",
                    "Id",
                    user?.user_type === "admin"?"Business ID":null,
                    user?.user_type === "admin"?"User_ID":null,
                    "Serial Number",
                    "POS Type",
                    "Name",
                    "Terminal Sim",
                    "Type",
                    "Balance",
                    "Cashback",
                    "Mid_id",
                    "State head",
                    "Aggregator",
                    "location",
                    "Transfer pin",
                    "Default pin",
                    "Payout status",
                    "Payout Fee",
                    "Fee Type",
                    "Flat Fee",
                    "Fee Cent",
                    "Fee Cap",
                    "cta",
                    "Paf",
                    "Fee Bearer",
                    "Status",
                    "Date_assigned",
                    "Actions"
                ]}
                data={terminalData?.data}
            >
            {
                 terminalData?.data?.map((info,index)=>{
                    const{
                        id,
                        business_id,
                        user_id,
                        serial_number,
                        pos_type,
                        name,
                        terminal_sim,
                        type,
                        balance,
                        cashback,
                        mid_id,
                        statehead,
                        aggregator,
                        location,
                        trans_pin,
                        default_pin,
                        payout_status,
                        payout_fee,
                        feeType,
                        flatFee,
                        feeCent,
                        feeCap,
                        cta,
                        paf,
                        feeBearer,
                        status,
                        date_assigned,
                        created_at,
                        updated_at
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
                                    user?.user_type === "admin"?business_id:null,
                                    user?.user_type === "admin"?user_id:null,
                                    serial_number,
                                    pos_type,
                                    name,
                                    terminal_sim,
                                    type,
                                    balance,
                                    cashback,
                                    mid_id,
                                    statehead,
                                    aggregator,
                                    location,
                                    trans_pin,
                                    default_pin,
                                    payout_status,
                                    payout_fee,
                                    feeType,
                                    flatFee,
                                    feeCent,
                                    feeCap,
                                    cta,
                                    paf,
                                    feeBearer,
                                    status
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
                            {/* <td className={bodyStyle}>{
                                    new Date(updated_at)
                                    .toLocaleString()
                                }
                            </td> */}
                            <td>
                                <TableDropDown
                                    list={[{
                                        dropTitle:isLoading?"please wait...":"delete",
                                        action:()=>deleteAction(id)
                                    }]}
                                />
                            </td>
                        </tr>
                    )
                }
            )
        }
            </TableLayout>
        )}
        </TerminalLayout>
    )
}