import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeserviceService } from './employeeservice.service';

@Component({
  selector: 'cupping-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee: Employee[] = [];

  constructor(private _employeeService: EmployeeserviceService ) { }
 
  ngOnInit() {
    this.employee = this._employeeService.getEmployees();
  }

}
