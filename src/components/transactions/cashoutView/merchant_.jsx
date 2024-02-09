import { TableLayout } from "../../agents/tableLayout"

export const Merchant_Cashout_Table =({
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
                "S/N","Id" ,"Terminal ID","Transaction Ref","Transaction Amount","Pos id","Type","Customer Info","Bank","RRN","Stan","Status","Description","Transaction Time"
            ]}
            data={transactData?.data}
            >
            {
                transactData?.data?.map((info,index)=>{
                    const{
                        id,
                        terminal_id,
                        transaction_ref,
                        amount,
                        pos_id,
                        type,
                        customer_info,
                        bank,
                        rrn,
                        stan,
                        status,
                        description,
                        transaction_time
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
                                    transaction_ref,
                                    amount,
                                    pos_id,
                                    type,
                                    customer_info,
                                    bank,
                                    rrn,
                                    stan,
                                    status,
                                    description
                                ].map((body,index)=>{
                                    return  (
                                        <td className={bodyStyle} key={index}>{body}</td>
                                        )
                                })
                            }
                            <td className={bodyStyle}>{
                                    new Date( transaction_time)
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