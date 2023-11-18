import { StepThree } from "../components/auth/StepThree"
import { Auth_Register_Layout } from "../components/auth/auth_register_layout"

export const Auth_Acc =()=>{
    return(
        <>
            <Auth_Register_Layout title={"Account Information"}>
                <StepThree/>
            </Auth_Register_Layout>
        </>
    )
}