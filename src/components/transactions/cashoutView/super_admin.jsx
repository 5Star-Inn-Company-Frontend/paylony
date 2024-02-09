import { TableLayout } from "../../agents/tableLayout"

export const SuperAdmin_Cashout_Table =({
    handleFilterChange,
    filterData,
    setFilterData,
    setFilterBy,
    transactData
})=>{
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
    return(
        <TableLayout
            handleFilterChange={handleFilterChange}
            sortButton={[
                {
                    title:"Transaction Ref",
                    action:"transaction_ref"
                },{
                    title:"Terminal Id",
                    action:"terminal_id"
                },{
                    title:"Transaction Amount",
                    action:"amount"
                },{
                    title:"Status",
                    action:"status"
                },{
                    title:"Type",
                    action:"type"
                }
            ]}
            filterData={filterData}
            downloadAction={"cashouts"}
            setFilterData={setFilterData}
            setFilterBy={setFilterBy}
            inputPlaceHolder={`Search`}
            hideCreateAction={true}
            headerData={[
                "S/N","Id" ,"Terminal ID","User Id","User First Name","User Last Name","User Email","User Type","Business Id","Business Name","Business Email","Business Address","Total Amount","Fee Bearer","Fee","Reference","Masked Pan","card Holder Name","Card Scheme","Dedicated FileName","Account Details","Gateway","Gateway Response","Transaction Amount","Type","RRN","Stan","Status","Transaction Time"
            ]}
            data={transactData?.data}
            >
            {
                transactData?.data?.map((info,index)=>{
                    const{
                        id,
                        terminal_id,
                        user,
                        business,
                        totalAmount,
                        feeBearer,
                        fee,
                        reference,
                        maskedPan,
                        cardHolderName,
                        cardScheme,
                        dedicatedFileName,
                        acc_details,
                        gateway,
                        gateway_response,
                        amount,
                        type,
                        rrn,
                        stan,
                        status,
                        description,
                        created_at
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
                                    terminal_id,
                                    user?.id,
                                    user?.first_name,
                                    user?.last_name,
                                    user?.email,
                                    user?.user_type,
                                    business?.id,
                                    business?.business_name,
                                    business?.business_email,
                                    business?.business_address,
                                    totalAmount,
                                    feeBearer,
                                    fee,
                                    reference,
                                    maskedPan,
                                    cardHolderName,
                                    cardScheme,
                                    dedicatedFileName,
                                    acc_details,
                                    gateway,
                                    gateway_response,
                                    amount,
                                    type,
                                    rrn,
                                    stan,
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
                        </tr>
                    )
                }
            )
        }
    </TableLayout>
    )
}