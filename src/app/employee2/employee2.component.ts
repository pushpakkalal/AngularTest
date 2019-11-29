import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from "./employee.service";
import { Employee } from './employee';

@Component({
  selector: 'cupping-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.scss']
})
export class Employee2Component{
  employees: Employee[];
  constructor(public http: HttpClient, private employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.newgetEmployee();
  }
  newgetEmployee() {
    this.employeeservice.getEmployee().subscribe((data:Employee[]) => {
      console.log(data);
      this.employees = data;
    });
  }
}
``