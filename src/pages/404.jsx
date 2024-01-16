import logo from "../assets/Paylony logo 1.svg"
import { Text } from "../components/global/text"
export const PageNotFound =()=>{
    return(
        <div className="h-screen flex flex-col justify-center items-center p-4 m-auto">
            <div className="flex flex-col justify-center items-center">
                <Text
                    style="mb-2 text-center text-purple text-4xl"
                    value="404"
                />
                <Text
                    style="mb-2 text-center text-purple text-lg"
                    value="PAGE NOT FOUND"
                />
                <div 
                    className="m-auto w-fit cursor-pointer"
                    onClick={()=>window.location.replace("/")}
                >
                    <img 
                        src={logo}
                        alt="object not found"
                        className="w-18 h-18"
                    />
                </div>
            </div>
        </div>
    )
}