import { DashBoardLayout } from "../global/dashboardLayout";
import { PortalLayout } from "./portalLayout";
import Spinner from "../global/spinner";
import { TableLayout } from "../agents/tableLayout";
import { useGetAllPermissionsQuery } from "../../store/apiSlice";
import toast from "react-hot-toast";

export const AllPermissions =()=>{
    const{
        data:permissionsData,
        isLoading:permissionsIsLoading,
        isError,
        error
    }= useGetAllPermissionsQuery();
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-light"
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
        <DashBoardLayout>
        <PortalLayout  title="Permissions">
        {
            permissionsIsLoading ? (
                <Spinner/>
                ):(
                <TableLayout
                    hideheaderActions={true}
                    headerData={[
                        "S/N","Name","Guard name"
                    ]}
                    data={ permissionsData?.data}
                >
                {
                    permissionsData?.data?.map((info,index)=>{
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