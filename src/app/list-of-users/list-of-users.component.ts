import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

export class Employee {

  public constructor(public employeeId:number, public name:string, public designation:string,
    public department:string, public dateOfJoining:Date) {}

}


@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {

  public employees: Employee[];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getAllEmployees().
    subscribe(response => this.employees = response);
  }

}
