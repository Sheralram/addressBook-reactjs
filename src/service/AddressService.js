import axios from 'axios';

class AddressService {
    baseUrl = "http://localhost:8080/addressbook";

    addEmployee(data){
        return axios.post(`${this.baseUrl}/create`,data);
    }

    getAllEmployees(){
        return axios.get(`${this.baseUrl}/getall`);
    }

    getAddressById(employee_id){
        return axios.get(`${this.baseUrl}/get_by_id/${employee_id}`);
    }

    updateEmployee(employee_id,data){
        return axios.put(`${this.baseUrl}/update/${employee_id}`,data);
    }

    deleteEmployee(employeeId){
        return axios.delete(`${this.baseUrl}/delete_by_id/${employeeId}`);
    }
}
export default new AddressService();