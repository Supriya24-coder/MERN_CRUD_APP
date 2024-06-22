import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [addLeague, setAddLeague] = useState({
    title: "",
    desc: ""
  });

  const [updateLeague, setUpdateLeague] = useState({
    title: addLeague,
    desc: addLeague
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddLeague({
      ...addLeague,
      [name]: value
    })

    setUpdateLeague({
      ...updateLeague,
      [name]: value
    })
  }

  const onSubmits = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/add`, addLeague);
      const newData = res.data;

      if (newData.status === 400 || !newData) {
        alert("invalid Credentials")
      }

      else {
        alert("League Added Successfully!!");
        navigate("/");
        window.location.reload();
      }
    }


    catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="container">
        <div className="container2">
          <title>Create League</title>
          <h3>Create League</h3>
          <form className="form" onSubmit={onSubmits} method="post">
            <center>

              <div>
                <input className="input" name="title" value={addLeague.title} onChange={handleChange} type="text" placeholder="Title"></input>
              </div>
              <div>
                <textarea className="input" name="desc" value={addLeague.desc} onChange={handleChange} placeholder="Description" rows="4" cols="50"></textarea>
              </div>
              <div>
                <button className="button" type="submit">Add League</button>
              </div>
            </center>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form;