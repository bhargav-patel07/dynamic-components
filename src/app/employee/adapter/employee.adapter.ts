import { user } from "../../Users.model";




export class EmployeeAdapter {

    public concat(item: any) {
        debugger
        const employeeAdp: user = new user();
        employeeAdp.id = item.id;
        employeeAdp.firstname = item.firstname;
        employeeAdp.lastname = item.lastname;
        employeeAdp.email = item.email;
        employeeAdp.phonenumber = item.phonenumber;
        employeeAdp.salary = item.salary;
        employeeAdp.fullname = item.firstname.concat(item.lastname);
        return employeeAdp;
    }
}