import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../list-of-users/list-of-users.component';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  public employee: Employee;
  constructor(private httpService: HttpService,
    private router: Router) { }

  ngOnInit() {
    this.employee= new Employee(0,'','', '', new Date());
  }

  saveEmployee() {

    console.log(JSON.stringify("Adding Employee : "+JSON.stringify(this.employee)))
    this.httpService.saveEmployee(this.employee)
    .subscribe(Response => this.router.navigate(["/home"]));
  }

}
