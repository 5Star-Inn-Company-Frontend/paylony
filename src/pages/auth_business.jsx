import { StepTwo } from "../components/auth/StepTwo"
import { Auth_Register_Layout } from "../components/auth/auth_register_layout"

export const Auth_Business =()=>{
    return(
        <>
            <Auth_Register_Layout title={"Business Information"}>
                <StepTwo/>
            </Auth_Register_Layout>
        </>
    )
}