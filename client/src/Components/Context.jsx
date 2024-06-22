import React,{useContext,useEffect, useState} from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({children})=>{

  const [league, setLeague] = useState([]);
  
  const getAllLeague = async(url)=>{
    const res = await axios.get(url);
    const data = await res.data;
    console.log(data);
    if(data.Response===true){
      setLeague(data.getLeagues)
    }
  }

  useEffect(()=>{
    getAllLeague(`http://localhost:5000/`);
  },[])
  
  return (
    <AppContext.Provider value={{league}}>
      {children}
    </AppContext.Provider>
  )
}




// custom hook

const useglobalContext = ()=>{
  return useContext(AppContext);
}


export {AppContext,AppProvider, useglobalContext}