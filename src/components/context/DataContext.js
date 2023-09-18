import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const DateContext = createContext();

export const useData = () => {
  return useContext(DateContext);
};

export const DataProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [user,setUser]=useState({})
  const baseURL = "http://localhost:5000"


  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    document.getElementById("wraper").style.opacity = "1"
    setLoading(false);
  };

  useEffect(()=>{
      const isUser = localStorage.getItem("user")
      setUser(isUser?JSON.parse(isUser):"")
  },[])
  useEffect(() => {
    const performSearch = async () => {
    
      try {
        const response = await axios.get(`${baseURL}/search?q=${query}`); 
            if(!response){
              setResults(response.data);
            }
      } catch (error) {
        console.error('Error searching:',error);
      } 
    };

    if (query) {
      performSearch();
    } else {
      // Clear the results when the query is empty
      setResults([]);
    }
  }, [query]);

  return (
    <DateContext.Provider value={{
       query, 
       setQuery, 
       results,
       isLoading, 
       startLoading, 
       stopLoading,
       user,
       setUser
       }}>
      {children}
    </DateContext.Provider>
  );
};











