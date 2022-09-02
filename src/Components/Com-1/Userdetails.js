import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function UserDetails(){
 const navigate = useNavigate()
    const [getData,setData] = useState('')

const getUserDetails = () =>{
    axios.get("http://localhost:7070/user/getUser").then(res=>{
        console.log("res",res.data)
        setData(res.data.result)
    }).catch(err=>{
        console.log("err",err.message)
    })
}

const deletedata = (mail) =>{
    console.log('mail',mail)
    axios.delete("http://localhost:7070/user/deleteData",{params:{email:mail}}).then(res=>{
        console.log("success")
        getUserDetails();
        alert("sucessfully deleted")
    }).catch(err=>{
        console.log("err",err.message)
    })
}


if(getData){

    return(<>
    <div className="col-mb-4-md-2 container">
    <h1>USER_DETAILS</h1>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">username</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Email Id</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
 {
    getData.map((data,index)=>{
 
        return(<>
        <tr>
            <td>{index+1}</td>
            <td>{data.username}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td><button type="button" className="btn btn-primary" onClick={()=>navigate('/update',{state:data})}>Update</button></td>
            <td><button type="button" className="btn btn-danger" onClick={()=>deletedata(data.email)}>Delete</button></td>
        </tr>
        </>)
    })
 }
  </tbody>
</table>
</div>
    </>)

}else{
    return(<>
    <div className="col-md-2 container">
    <button type="button" onClick={getUserDetails} className="btn btn-primary"> get-userDetails</button>
    </div>
    </>)
}
}


export default UserDetails