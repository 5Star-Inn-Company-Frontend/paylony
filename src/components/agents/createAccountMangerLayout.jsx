import { useNavigate } from "react-router-dom";
import { DashBoardLayout } from "../global/dashboardLayout"
import { AgentLayout } from "./agentLayout"

export const CreateAccountManagerLayout =({
    title,
    children
})=>{
    return(
        
        <DashBoardLayout>
        <AgentLayout title="Create Account manger">
                <div className="flex flex-col w-full">
                    <div className="w-full">
                        <div className="w-full">
                            {children}
                        </div>
                    </div>
                </div>
        </AgentLayout>
        </DashBoardLayout>
    )
}