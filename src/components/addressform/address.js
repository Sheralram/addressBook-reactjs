
import React, { useState, useEffect } from 'react';
import { useParams , Link} from 'react-router-dom';
import AddressService from '../../service/AddressService'
import  Header  from '../header/header'
import '../addressform/address.css'


const Addressform = (props) => {
  let initialValue = {
    name: '',
    phoneNumber:'',
    address:'',
    city:'',
    state:'',
    zip:'',
    email:'',
    isUpdate: false,
            error: {
              name: '',
              phoneNumber:'',
              address:'',
              city:'',
              state:'',
              zip:'',
              email:'',
            }
  }

  const [formValue, setForm] = useState(initialValue);
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
    if(params.id){
      getAddressById(params.id);
    }
 }, [params.id]);

 const getAddressById = (id) => {
    AddressService
    .getAddressById(id)
    .then((data) => {
        console.log(data.data.data);
        let obj = data.data.data;
        setData(obj);
    })
    .catch((error) => {
        alert("Error is ", error);
    });
 };

 const setData = (obj) => {
  // let array = obj.startDate;
  // console.log(array);
  console.log();
  setForm({
      ...formValue,
      ...obj,
      isUpdate:true,
      id: obj.empId,
      name: obj.name,
      phoneNumber:obj.phoneNumber,
      address:obj.address,
      city:obj.city,
      state:obj.state,
      zip:obj.zip,
      email:obj.email,
  });
  console.log(formValue);
};

const changeValue = (event) => {
  setForm({ ...formValue, [event.target.name]: event.target.value })

}

//TODO LIST  onCheckChange  , onCheckChange 





const save = async (event) => {
  event.preventDefault();
  
  let object = {
      name: formValue.name,
      phoneNumber:formValue.phoneNumber,
      address:formValue.address,
      city:formValue.city,
      state:formValue.state,
      zip:formValue.zip,
      email:formValue.email,
      
  };
  console.log(object);

    if (formValue.isUpdate) {  
      AddressService
      .updateEmployee(params.id, object)
      .then((data)=> {
          var answer =  window.confirm("Data once modified cannot be restored!! Do you wish to continue?",data);
          if (answer === true){
              alert("Data updated Successfully!!");
            //   props.history.push("");
          }
          else{
              window.location.reload();
          }
      })
.catch((error) => {
   alert("Warning!! Error Updating Data", error);
});
    }else{
      AddressService
    .addEmployee(object)
    .then((response) => {
      console.log(response);
      alert("Data Added successfully!!",response)
      // props.history.push("");
    })
    .catch(error => {
      console.log(error);
     
      // alert("Warning!! Error Adding Data", error);
    });

}     
    }

    const reset = () => {
      setForm({ ...initialValue, id: formValue.id, isUpdate: formValue.isUpdate });
  }


// }


	return (
	<div >
	
	  <Header/>

      <div className="form-content">
                <form action="#" className="form" onSubmit={save} onReset={reset}>
                    <div className="form-head-content">
                        <div className="form-head">Person Address Form</div>
                        <div className="form-logo-content">
                            {/* <Link to="/home">
                                <img src="../assets/images.png" style={{ height: "25px" }} />
                            </Link> */}
                        </div>
                    </div>
                    <div className="row-content">

                        {/* NAME */}

                        <label className="label text" htmlFor="name">  Name  </label>
                        <input
                            className="input"
                            type="text"
                            name="name"
                            id="name"
                            value={formValue.name}
                            onChange={changeValue}
                            required
                        />
                        <error-output className="name-error" htmlFor="text" />
                    </div>

                    {/* ADDRESS */}

                    <div className="row-content">
                        <label className="label text" htmlFor="address"> Address </label>
                        <textarea
                            className="input"
                            id="address"
                            name="address"
                            style={{ height: "100px" }}
                            defaultValue={formValue.address}
                            onChange={changeValue}
                            required
                        />
                        <error-output id="address-error" className="address-error" htmlFor="address"
                        />
                    </div>

                    {/* CITY */}

                    <div className="row-content-exp">
                        <div className="oneRow-content">
                            <label className="label text" htmlFor="city"> City  </label>
                            <select
                                className="select-input"
                                id="city"
                                name="city"
                                typeof="text"
                                value={formValue.city}
                                onChange={changeValue}
                                required
                            >
                                <option value selected disabled hidden> Select City </option>
                                <option value="Allahabad">Allahabad</option>
                                <option value="Amritsar">Amritsar</option>
                                <option value="Bhubneswa">Bhubneswar</option>
                                <option value="Cuttack">Cuttack</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Bhopal">Bhopal</option>
                                <option value="Patna">Patna</option>
                                <option value="Ranchi">Ranchi</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Vaishali">Vaishali</option>
                                <option value="Ramgarh">Ramgarh</option>
                                <option value="Hajipur">Hajipur</option>
                            </select>
                        </div>

                        {/* STATE */}

                        <div className="oneRow-content">
                            <label className="label text" htmlFor="state"> State </label>
                            <select
                                className="select-input"
                                id="state"
                                name="state"
                                value={formValue.state}
                                onChange={changeValue}
                                required
                            >
                                <option value selected disabled hidden> Select State </option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands"> Andaman and Nicobar Islands </option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli"> Dadar and Nagar Haveli </option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>

                        {/* ZIP */}

                        <div className="oneRow-content">
                            <label className="label text" htmlFor="zip"> Zip </label>
                            <input
                                className="input"
                                type="text"
                                name="zip"
                                id="zip"
                                value={formValue.zip}
                                onChange={changeValue}
                                required
                            />
                        </div>
                    </div>

                    {/* PHONE NUMBER */}

                    <div className="row-content">
                        <label className="label text" htmlFor="phone"> Phone Number </label>
                        <input
                            className="input"
                            type="text"
                            name="phoneNumber"
                            id="phone"
                            value={formValue.phoneNumber}
                            onChange={changeValue}
                            required
                        />
                        <error-output className="phone-error" htmlFor="text" />
                    </div>

                    {/* EMAIL */}

                    <div className="row-content">
                        <label className="label text" htmlFor="email"> Email </label>
                        <input
                            className="input"
                            type="text"
                            name="email"
                            id="email"
                            value={formValue.email}
                            onChange={changeValue}
                            required
                        />
                        <error-output className="email-error" htmlFor="text" />`
                    </div>

                    {/* BUTTONS */}

                    <div className="add-reset">
                        <button type="submit" className="button addButton" id="addButton">
                            {formValue.isUpdate ? "Update" : "Add"}
                        </button>
                        <button type="reset" onClick ={reset} className="resetButton button">Reset </button>
                    </div>
                </form>
            </div>





	</div>
	);
  }

  export default Addressform; 