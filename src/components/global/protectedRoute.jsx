import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";


export const ProtectedRoute = () => {
    const cookies = new Cookies(null, { path: '/' });
    const location = useLocation();
    const user = cookies.get('paylonyToken')
    const navigate = useNavigate();

    useEffect(()=>{
        const lastLoginTime = new Date(localStorage.getItem(
            'lastLoginTime'
        ));
        const sessionTimeout = new Date(
            lastLoginTime.getTime() + user?.authorization?.expires_in * 60000
        );
        const checkTimeout =()=>{
            const currentTime = new Date();
            if(currentTime.getTime()  >= sessionTimeout){
                Swal.fire({
                    icon: "warning",
                    title: "Session Time out",
                    text:'Kindly login again',
                    allowOutsideClick:false
                }).then((result)=>{
                    if(result.isConfirmed){
                        cookies.remove('paylonyToken')
                        localStorage.removeItem("lastLoginTime")
                        navigate("/login");
                    }
                });
                clearInterval(timeoutid) 
            }
        }
        const timeoutid = setInterval(checkTimeout,1000) //check every second
        return () => {
            clearInterval(timeoutid) //clear interval on component unmount or logout
        }
    },[])

    if (!user) {
        return (
            <Navigate 
                to="/login" 
                state={{ 
                    from: location 
                }} 
                replace 
            />
        )
    } else {
        if(user) {
            return <Outlet/>;
        }
    }

    return (
        <Navigate 
            to="/login" 
            state={{ 
                from: location 
            }} 
            replace 
        />
    )
};