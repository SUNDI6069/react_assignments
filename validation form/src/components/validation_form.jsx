import { useState } from "react";
import React from "react";
/******propogation--> movemnt of event from child to parent****/
const ValidationForm = ()=>{
    const [form, setForm] = useState({username:"", email:"",gender:"",phone:"", password:"", confirm_password:""})
    const [error,setError] = useState({username:{isValid: true, message:""}, email:{isValid: true, message:""}, 
    gender:{isValid: true, message:""}, phone:{isValid: true, message:""}, password:{isValid: true, message:""}, confirm_password:{isValid: true, message:""}} )

    const handleSubmit=(event)=>{
        event.preventDefault();  //for preventing event bubbling like when we click on submit button this prevent our page for refreshing
        alert(`Hi ${form.email} your form submitted succefully`)
        setForm({username:"", email:"",gender:"",phone:"", password:"", confirm_password:""})
    }

    const checkError = (type)=>{
        switch(type){
            case "username":
                if(form.username.length <= 0){
                    setError({...error, username:{isValid: false, message:"Name must be alphanumeric"}})
                }
                else{
                    setError({...error,username:{isValid: true, message:""}})
                }
                break;
            case "email":
                if(form.email.length <= 0){
                    setError({...error, email:{isValid: false, message:"email must contain @"}})
                }
                else{
                    setError({...error,email:{isValid: true, message:""}})
                }
                break;
            case "gender":
                break;
            case "phone":
                if(form.phone.length < 6){
                    setError({...error, phone:{isValid:false, message:"phone must have atleast 10 digits"}})
                 }else{
                     setError({...error, phone:{isValid:true, message:""}})
                 }
                break;
            case "password":
                if(form.password.length < 6){
                   setError({...error, password:{isValid:false, message:"password must have atleast 6 charcters"}})
                }else{
                    setError({...error, password:{isValid:true, message:""}})
                }
                break;
            case "confirm_password":
                if(form.confirm_password !== form.password){
                    setError({...error,confirm_password:{isValid:false, message:"password is not match"}})
                }else{
                    setError({...error, confirm_password:{isValid:true, message:""}})
                }
                break;  
        }
    }

    const isSubmitValid = form.username.length && form.email.length && form.password.length && form.phone.length && form.confirm_password.length;
    
    return(
        <div>
            <h1>Registration Form</h1>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input data-testid = 'name' id="username" onChange={(event)=>{setForm({...form, username:event.target.value})}} onBlur={(event)=>{checkError("username")}} value={form.username}></input>
                    {!error.username.isValid ? <div style={{color:"red"}}>{error.username.message}</div>:null}
                </div><br/>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input data-testid = 'email' type="email" id="email" onChange={(event)=>{setForm({...form, email:event.target.value})}} onBlur={(event)=>{checkError("email")}} value={form.email}></input>
                    {!error.email.isValid ? <div style={{color:"red"}}>{error.email.message}</div>:null}
                </div><br/>

                <div>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" data-testid = 'gender'>
                    <option onChange={(event)=>{setForm({...form, gender:event.target.value})}} onBlur={(event)=>{}} value={form.gender}>Male</option>
                    <option onChange={(event)=>{setForm({...form, gender:event.target.value})}} onBlur={(event)=>{}} value={form.gender}>Female</option>
                    <option onChange={(event)=>{setForm({...form, gender:event.target.value})}} onBlur={(event)=>{}} value={form.gender}>Other</option>
                </select>
                </div><br/>

                <div>
                    <label htmlFor="number">Phone:</label>
                    <input data-testid = 'phone' type="number" id="number" maxLength="10" onChange={(event)=>{setForm({...form, phone:event.target.value})}} onBlur={(event)=>{checkError("phone")}} value={form.phone}></input>    
                    {!error.phone.isValid ? <div style={{color:"red"}}>{error.phone.message}</div>:null}
                </div><br/>

                <div>
                <label htmlFor="password">Password:</label>
                <input data-testid = 'password' type="password" id="password" name="pass" onChange={(event)=>{setForm({...form, password:event.target.value})}} onBlur={(event)=>{checkError("password")}} value={form.password}></input>
                {!error.password.isValid ? <div style={{color:"red"}}>{error.password.message}</div>:null}
                </div><br/>

                <div>    
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" onChange={(event)=>{setForm({...form, confirm_password:event.target.value})}} onBlur={(event)=>{checkError("confirm_password")}} value={form.confirm_password}></input>
                {!error.confirm_password.isValid ? <div style={{color:"red"}}>{error.confirm_password.message}</div>:null}
                </div><br/>

                <div>
                    <button data-testid = 'submit' type="submit" onClick={handleSubmit} disabled = {isSubmitValid === 0 ? true : false}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ValidationForm;