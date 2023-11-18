import { Auth_Register_Layout } from "../components/auth/auth_register_layout"
import { StepOne } from "../components/auth/stepOne"

export const Auth_Personanl =()=>{
    return(
        <>
            <Auth_Register_Layout title={"Personal Details"}>
                <StepOne/>
            </Auth_Register_Layout>
        </>
    )
}