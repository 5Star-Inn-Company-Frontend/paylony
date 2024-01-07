import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";


export const ProtectedRoute = () => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('paylonyToken'))
    const navigate = useNavigate();

    useEffect(()=>{
        const sessionTimeout = user?.authorization?.expires_in;
        const lastLoginTime = new Date(localStorage.getItem(
            'lastLoginTime'
        ));
        const checkTimeout =()=>{
            const currentTime = new Date();
            const elapsedTime = currentTime.getTime() - lastLoginTime.getTime()
            console.log(elapsedTime ,sessionTimeout)
            if(elapsedTime >= (sessionTimeout - 5000)){
                Swal.fire({
                    icon: "warning",
                    title: "Session Time out",
                    text:'Kindly login again',
                    allowOutsideClick:false
                }).then((result)=>{
                    if(result.isConfirmed){
                        localStorage?.removeItem("paylonyToken")
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

    if (!localStorage?.getItem("paylonyToken")) {
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
        if (user) {
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