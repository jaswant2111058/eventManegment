import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosLogin = (data) => {
    const [response, setResponse] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            setIsLoading(true);
            try{
                const response = await axios.post("http://localhost:5000/login",data,{
                    cancelToken: source.token
                });
                if(isMounted) {
                    setResponse(response.data);
                    setFetchError(null);
                }
            }
            catch (err){
                if(isMounted) {
                    setFetchError(err.message);
                    setResponse([]);
                }
            }
            finally{
                isMounted && setIsLoading(false)
            }
        }
        fetchData(data);

        const cleanUp = () => {
            // console.log('clean up function');
            isMounted = false;
            source.cancel();
        }
        return cleanUp;
    },[data]);
    return {response, fetchError, isLoading}
}

export default useAxiosLogin;