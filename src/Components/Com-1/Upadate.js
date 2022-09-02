import React, { useState } from "react";
import {useLocation} from "react-router-dom"
import axios from "axios"


function Upadtedata(){
    
    const {state} = useLocation();

    const [getName,setName]=useState(state.username)
    const [getMobile,setmobile]=useState(state.phone)
    const [getEmail,setEmail]=useState(state.email)
    
    const updateData = () =>{
        let data = {
            email : getEmail,
            username : getName,
            phone : getMobile
        }
        axios.put("http://localhost:7070/user/upadteData",data,{headers:{"token":localStorage.getItem('token')}}).then(res=>{
            console.log("res",res.data)
            alert('successfully upadted')
        }).catch(err=>{
            console.log("err",err.message)
        })
    }

    console.log("state",state)
    
    return(<>
     <h1>Upadate Your Details</h1>
   <div className="col-md-2 container">

   
   <div className="form-outline mb-4">
        <input type="text" className="form-control" value={getName} onChange={(e)=>setName(e.target.value)} />
        <label className="form-label" >Name</label>
    </div> 

      <div className="form-outline mb-4">
        <input type="text" className="form-control" value={getMobile} onChange = {(e)=>setmobile(e.target.value)} />
        <label className="form-label" >Phone Number</label>
      </div>

  
  <div className="form-outline mb-4 ">
    <input type="email"  className="form-control" value={state.email} onChange ={(e)=>setEmail(e.target.value)} disabled />
    <label className="form-label" >Email address</label>
  </div>

  
  <button type="button" onClick={updateData} className="btn btn-primary btn-block mb-4">Update</button>
  </div>


    </>)
}

export default Upadtedata