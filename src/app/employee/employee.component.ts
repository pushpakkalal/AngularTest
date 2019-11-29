import { Component } from '@angular/core';
import { Employee } from './employee';


@Component({
  selector: 'cupping-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  

  constructor() { }
  employees: Employee[] = 
    [
        {
            "id": 1,
            "firstName": "ted",
            "lastName": "JAMES",
            "gender": "male",
            "address": "1234 Anywhere St.",
            "city": " Phoenix ",
            "state": {
                "abbreviation": "AZ",
                "name": "Arizona"
            },
            "salary": 25000,
            "joinDate": "July 2, 2015",
            "rating":4
        },
        {
            "id": 2,
            "firstName": "Michelle",
            "lastName": "Thompson",
            "gender": "female",
            "address": "345 Cedar Point Ave.",
            "city": "Los Angeles ",
            "state": {
                "abbreviation": "CA",
                "name": "California"
            },
            "salary": 30000,
            "joinDate": "July 2, 2015",
            "rating":2
        }
    ];

}
