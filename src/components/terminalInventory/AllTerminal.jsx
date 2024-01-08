 import { toast } from "react-toastify";
import { useDeleteTerminalsMutation, useGetAllTerminalsQuery } from "../../store/apiSlice";
import { TableLayout } from "../agents/tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import { TableDropDown } from "../global/dropdown";
import { TerminalLayout } from "./terminalLayout";
import Spinner from "../global/spinner";
import { useEffect, useState } from "react";

export const AllTerminal =()=>{
    const{
        data:terminalData,
        isLoading:terminalIsLoading,
        isError,
        error
    }= useGetAllTerminalsQuery();

    const [deleteTerminals, {isLoading}] = useDeleteTerminalsMutation()

    const deleteAction =(id)=>{
        deleteTerminals({
            id:id
        }).unwrap().then((payload)=>{
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
        if(terminalData){
            setActionData(terminalData?.data)
        }
    },[terminalData])

    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    const handleInputChange =(e)=>{
        const filtereddata = terminalData?.data?.filter((data)=>data.name?.toLowerCase().includes(e.target.value))
        setActionData(filtereddata)
    }

    const SortDataAction =(action)=>{
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
        <TerminalLayout title="All Terminals">
        {
                terminalIsLoading ? (
                    <Spinner/>
                    ):(
            <TableLayout
                createBtnAction={()=>window.location.replace("/add_terminal")}
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
                createBtnText="Add Terminal"
                headerData={[
                    "s/n",
                    // "Id",
                    // "Business ID",
                    // "User_ID",
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
                    "Trans_pin",
                    "Default_pin",
                    "Payout_status",
                    "Payout_Fee",
                    "Fee Type",
                    "Flat Fee",
                    "Fee Cent",
                    "Fee Cap",
                    "cta",
                    "Paf",
                    "Fee Bearer",
                    "Status",
                    "Date_assigned",
                    // "Created_at",
                    // "Updated_at",
                    "Actions"
                ]}
                data={ actionData}
            >
            {
                 actionData?.map((info,index)=>{
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
                                    // id,
                                    // business_id,
                                    // user_id,
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
        </DashBoardLayout>
    )
}