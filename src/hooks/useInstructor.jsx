import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isInst, isLoading: isInstLoading} = useQuery({
        queryKey: ['isInst', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/inst/${user?.email}`);
           
            return res.data.inst;
        }
    })
    return [isInst, isInstLoading]
}
export default useInstructor;