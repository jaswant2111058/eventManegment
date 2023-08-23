import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosSignup = (data) => {
    const [responseSignup, setResponseSignup] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            setIsLoading(true);
            try{
                const responseSignup = await axios.post("http://localhost:5000/signup",data,{
                    cancelToken: source.token
                });
                if(isMounted) {
                    setResponseSignup(responseSignup.data);
                    setFetchError(null);
                }
            }
            catch (err){
                if(isMounted) {
                    setFetchError(err.message);
                    setResponseSignup([]);
                }
            }
            finally{
                isMounted && setIsLoading(false)
            }
        }
        fetchData(data);

        const cleanUp = () => {
            //console.log('clean up function');
            isMounted = false;
            source.cancel();
        }
        return cleanUp;
    },[data]);
    return {responseSignup, fetchError, isLoading}
}

export default useAxiosSignup;