import React,{useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import "../App.css";
import { useglobalContext } from './Context';
import axios from 'axios';

const LeagueCard = () => {
  const {league} = useglobalContext();
  const navigate = useNavigate();

  const createLeague =()=>{
    navigate("/add");
  }

  const handleDelete = async(id)=>{
    
      const res = await axios.delete(`http://localhost:5000/${id}`);
      const newData = await res.data;
      window.location.reload();
      alert("League Deleted Successfully!!");

  }
  return (
    <>
    <div className='data-container'>
      <h2>My League</h2>
      <div className='data-container-2'>
        <button className='btn' onClick={createLeague}>Create League</button>
    {league.map((elem)=>{
      return(
        <>
        <div className='data-wrap'>
                    <div className='data'>
                    Title<p className='info'>  {elem.title} </p>
                    </div>
                    <div className='data'>
                    Description<p className='info'>  {elem.desc}</p>
                    </div>
                    <div className='data'>
                    <button className='btn2' onClick={()=>{
                       const id = elem._id;
                       navigate(`/${id}`)
                       return id;
                    }}> Edit League </button>
                    <button className='btn2' onClick={()=>{
                      const id = elem._id;
                      handleDelete(id)}}>Delete League</button>
                    <button className='btn2'>Invite Friend</button>
                    </div>
                    </div>
        </>
      )
    })}
    </div>
    </div>
    </>
  )
}

export default LeagueCard;
