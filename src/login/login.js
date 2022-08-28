import React, { useState, useEffect } from 'react';
import UserService from '../service/UserService';
import { useParams , Link} from 'react-router-dom';
import logo from '../assets/images/icon.png'


const Login  = (props) =>{
    let initialValue = {
       
        password:'',
        emailId:'',
          error: {
         
          password:'',
          emailId:'',
        }
      }
      const [formValue, setForm] = useState(initialValue);
  
  
  
      const setData = (obj) => {
          
          console.log();
          setForm({
              ...formValue,
              ...obj,
              // isUpdate:true,
              // id: obj.empId,
              
              password:obj.password,
              emailId:obj.emailId,
          });
          console.log(formValue);
        };
        
        const changeValue = (event) => {
          setForm({ ...formValue, [event.target.name]: event.target.value })
        
        }
  
  
        const save = async (event) => {
          event.preventDefault();
          
          let object = {
             
              password:formValue.password,
              emailId:formValue.emailId
          };
          console.log(object);
  
          UserService.addUser(object)
          .then((response) => {
              console.log(response);
              alert("User registration is Added",response);
          }).catch(error => {
              console.log(error);
              alert("Not Added User!!")   
               });
  
              }
  
  
              const reset = () => {
                  setForm({ ...initialValue, id: formValue.id, isUpdate: formValue.isUpdate });
              }
  
  
      return (
  
          <div>
              {/* <header class="header-content header">
          <div class="logo-content">
      
              <img src= {logo} alt="logo" />
  
              <div>
                  <span class="address-text">Address</span><br />
                  <span class="address-text address-book">Book</span>
              </div>
          </div>
    </header> */}
  
  
    <form action="#" className="form" onSubmit={save} onReset={reset}>
                      <div className="form-head-content">
                          <div className="form-head">LOGIN FORM</div>
                          <div className="form-logo-content">
                              
                          </div>
                      </div>
  
  
  
   
  


  <div className="row-content">
  
  {/* EMAIL ID */}
  
  <label className="label text" htmlFor="emailId"> Email ID </label>
  <input
      className="input"
      type="text"
      name="emailId"
      id="emailId"
      value={formValue.emailId}
      onChange={changeValue}
      required
  />
  <error-output className="emailId-error" htmlFor="text" />
  </div>







  <div className="row-content">
  
  {/* PASSWORD */}
  
  <label className="label text" htmlFor="password">  Password  </label>
  <input
      className="input"
      type="text"
      name="password"
      id="password"
      value={formValue.password}
      onChange={changeValue}
      required
  />
  <error-output className="password-error" htmlFor="text" />
  </div>
  
  
  
  
  
  <div>
                  <Link to='/' >     
                    <button className='button-reset' type="login"> Login </button>
                  </Link>
                      </div>
  
                      <div className="link">
                     
                        <Link to="/register" className="link">New User  Click here to Register </Link>
                    </div>
                      </form>
          </div>
      )



}


export default Login ; 