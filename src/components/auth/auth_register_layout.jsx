import logo from "../../assets/Paylony logo 1.png"
import { AiOutlineAudit, AiOutlineUser, AiTwotoneContainer,AiOutlineToTop } from "react-icons/ai";
import { Text } from "../global/text";
import { Link } from "react-router-dom";

export const Auth_Register_Layout =({title,children})=>{
    return(
        <div className="py-8 lg:px-4 xl:px-4 md:px-4 sm:px-2 xs:px-2 xxs:px-2 xxxs:px-2  m-auto lg:w-[75%] xl:w-[75%] md:w-[75%] sm:w-full xs:w-full xxs:w-full">
            <div className="mb-8 m-auto w-fit">
                <img 
                    src={logo}
                    alt="object not found"
                    className="w-18 h-18"
                />
            </div>
            <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-4 xxs:grid-cols-4 gap-2 w-full">
                {
                    [
                        {
                            heading:"Personal Details",
                            icon:<AiOutlineAudit
                                    size="2rem"
                                    className={`${title == "Personal Details"?" bg-purple":"bg-mixed-grey"} p-2 rounded-md`}
                                    color={title == "Personal Details"?"white":null}
                             />
                        },{
                            heading:"Business Information",
                            icon:<AiTwotoneContainer
                                    size="2rem"
                                    className={`${title == "Business Information"?" bg-purple":"bg-mixed-grey"} p-2 rounded-md`}
                                    color={title == "Business Information"?"white":null}
                             />
                        },{
                            heading:"Account Information",
                            icon:<AiOutlineUser
                                    size="2rem"
                                    className={`${title == "Account Information"?" bg-purple":"bg-mixed-grey"} p-2 rounded-md`}
                                    color={title == "Account Information"?"white":null}
                             />
                        },{
                            heading:"Document Upload",
                            icon:<AiOutlineToTop
                                    size="2rem"
                                    className={`${title == "Document Upload"?" bg-purple":"bg-mixed-grey"} p-2 rounded-md`}
                                    color={title == "Document Upload"?"white":null}
                             />
                        }
                    ].map((head,index)=>{
                        const{
                            heading,
                            icon
                        }=head;
                        return(
                            <div 
                                key={index}
                                className={`${heading == title?"bg-white":"bg-mixed-grey"} flex  p-4 rounded-t-md`}
                            >
                                <div className="lg:me-2 xl:me-2 md:me-2 sm:me-0 xs:me-0 xxs:me-0">
                                    {icon}
                                </div>
                                <div>
                                    <Text
                                        style="lg:block xl:block md:hidden sm:hidden xs:hidden xxs:hidden text-black"
                                        value={heading}
                                    />
                                    <Text
                                        style="lg:block xl:block md:block sm:hidden xs:hidden xxs:hidden text-black text-sm"
                                        value={`step ${index +1}`}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="bg-white lg:p-14 xl:p-14 md:p-14 sm:p-4 xs:p-4 xxs:p-4 w-full">
                {
                    children
                }
            </div>
            <div className="flex items-center m-auto w-fit my-8">
                <span className="me-1 text-sm font-medium">Already an account?</span>
                <Link to="/login" className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">Sigup here?</Link>
            </div>
        </div>
    )
}