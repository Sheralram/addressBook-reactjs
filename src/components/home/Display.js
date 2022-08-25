import React, { Component } from "react";
import { useNavigate} from "react-router-dom";
import AddressService from "../../service/AddressService";
import deleteIcon from "../../assets/icons/delete-black-18dp.svg"
import editIcon from "../../assets/icons/create-black-18dp.svg"




const Display = (props) => {

    let navigate = useNavigate();
    const update =(employeeId) => {
        console.log(employeeId);
        navigate(`Addressform/${employeeId}`);
    }


const remove = (employeeId) => {
    var answer = window.confirm("Data once deleted cannot be restored!! Do you wish to continue ?");
    if (answer === true){
        AddressService.deleteEmployee(employeeId)
        .then((res) => {
            alert("Data deleted Successfully!!");
            window.location.reload();
            props.getAllEmployees();
        })
    }
    else{
        window.location.reload();
    }
}

return(



<table id="table-display" className="table">
<tbody>
<tr key = {-1}>
                 <th>ID</th>
                 <th>Full Name</th>
                 <th>Email</th>
                 <th>Phone Number</th>
                 <th>Address</th>
                <th>City</th>
                <th>State</th>
                 <th>ZipCode</th>
              <th>Actions</th>
  </tr>
            {props.employeeArray &&
            props.employeeArray.map((element) => (
        <tr key={element.employeeId} >
        <td>
          {element.id}
        </td>
        <td>{element.name}</td>
        <td>{element.email}</td>
        <td>{element.phoneNumber} </td>
        <td>₹{element.address}</td>
        <td>{element.city}</td>
        <td>{element.state}</td>
        <td>{element.zip}</td>
        <td>
            <img onClick={() => remove(element.id)}
            src={deleteIcon}
            alt="delete" />
          <img onClick={() => update(element.id)}
            src={editIcon}
            alt="edit" />
        </td>
       
    </tr>
    ))}
</tbody>
</table>
);

}

export default Display;