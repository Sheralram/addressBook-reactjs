import React,{Component} from 'react';

 
import '../home/home.css'
import Header from '../header/header';
import AddressService from '../../service/AddressService';

import Display from './Display';
// import add from '../../assets/add-24px.svg'



export class Home extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          employees: [],
        };
       
      }

    
      getEmployeeList = () => {
       
        AddressService
          .getAllEmployees()
          .then((response) => {
            console.log("Data Added Successfully", response.data);
            this.setState({ employeeList: response.data.data, count: response.data.data.length });
           })
          .catch((error) => console.log("Error Encountered!"));
    };

    componentDidMount() {
        localStorage.removeItem("editEmp");
        this.getEmployeeList();
    }

    

    
    render(){
        return(
           
     <div>
                <Header/>

            <div className='navbar navbar-xpand-md'>
                    <ul>
                        <li className="nav-item">
                           
                           <a className="add-button" href="/address-form">                           
                              Add User
                           </a>
                      </li>
                   </ul>
        </div>

<div>
    <h1>Personal Details</h1>
<div>  
<Display
                            
                            employeeArray={this.state.employeeList}
                        />
    </div>

</div>


      </div>
                
                



       
        )
    }
}
export default Home;

