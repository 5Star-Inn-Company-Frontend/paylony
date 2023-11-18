import { Auth_Register_Layout } from "../components/auth/auth_register_layout"
import { StepFour } from "../components/auth/stepFour"

export const Auth_Upload =()=>{
    return(
        <>
            <Auth_Register_Layout title={"Document Upload"}>
                <StepFour/>
            </Auth_Register_Layout>
        </>
    )
}