import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
    const location = useLocation();
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
        let user = localStorage?.getItem('paylonyToken');
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