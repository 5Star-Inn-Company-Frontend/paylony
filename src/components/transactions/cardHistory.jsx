import toast from "react-hot-toast";
import { useGetCashOutQuery } from "../../store/apiSlice";
import { TableLayout } from "../agents/tableLayout";
import { DashBoardLayout } from "../global/dashboardLayout";
import Spinner from "../global/spinner";
import { TransactLayout } from "./transactLayout";
import { useState } from "react";
import { Merchant_Cashout_Table } from "./cashoutView/merchant_";
import { SuperAdmin_Cashout_Table } from "./cashoutView/super_admin";

export const CardTransactionHistory =()=>{
    const user = JSON.parse(localStorage.getItem('paylonyToken'));
    const[
        filterBy,
        setFilterBy
    ]= useState({
        title:"transaction_ref",
        value:""
    });

    const{
        data:transactData,
        isLoading:transactIsLoading,
        isError,
        error
    }= useGetCashOutQuery({
        filterBy:filterBy
    });
    const[
        filterData,
        setFilterData
    ]= useState({
        title:"transaction_ref",
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
    console.log(transactData);
    return(
        <DashBoardLayout>
        <TransactLayout title="Cashout Transaction History">
        {
         transactIsLoading? (
            <Spinner/>
            ):(
                user?.user_type !== "admin"?
                (
                    <Merchant_Cashout_Table
                        handleFilterChange={handleFilterChange}
                        filterData={filterData}
                        setFilterData={setFilterData}
                        setFilterBy={setFilterBy}
                        transactData={transactData}
                    />
                ):(
                    <SuperAdmin_Cashout_Table
                        handleFilterChange={handleFilterChange}
                        filterData={filterData}
                        setFilterData={setFilterData}
                        setFilterBy={setFilterBy}
                        transactData={transactData}
                    />
                )
            )
        }
        </TransactLayout>
        </DashBoardLayout>
    )
}