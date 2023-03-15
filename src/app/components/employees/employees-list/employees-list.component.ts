import { Component , OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees : Employee[] = [];
  /*
  employees : Employee[] = [
    {
      id: "100",
      name: "Amit Joshi",
      email: "amitjoshipune@yahoo.com",
      phone: 9890490086,
      salary: 75000,
      department: "Tools Engineering"
    },
    {
      id: "115",
      name: "Pramod Aaskar",
      email: "paaskar@yahoo.com",
      phone: 9860344564,
      salary: 65000,
      department: "Tools Engineering"
    },
    {
      id: "750",
      name: "Swara Joshi",
      email: "swara-joshi0110@yahoo.com",
      phone: 9890490086,
      salary: 45000,
      department: "Human Resources"
    }

  ];
  */
constructor (private employeeService : EmployeesService){

}
  ngOnInit(): void {
    /* uncomment this to test no employee found message
    this.employees = [];
    */
   this.employeeService.getAllEmployees()
   .subscribe({
    next: (employees)=>{
      console.log(employees);
      this.employees = employees;
    },
    error:(response) =>{
      console.log(response);
    }
   });
  }


}
