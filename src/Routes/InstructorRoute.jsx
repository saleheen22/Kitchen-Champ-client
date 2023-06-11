
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInst, isInstLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInst) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;
