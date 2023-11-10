import { Link} from "react-router-dom";
import { RegisterLayout } from "../components/auth/registerLayout";

export const Register =()=>{
    return(
        <div className="h-screen overflow-auto authLayout flex flex-col justify-center items-center">
            <div className="w-full h-full py-8 px-2">
                <RegisterLayout />
                <div className="flex items-center m-auto w-fit mb-8">
                    <span className="me-1 text-sm font-medium">Already have an account?</span>
                    <Link to="/login" className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">Sigup here?</Link>
                </div>
            </div>
        </div>
    )
}