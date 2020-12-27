import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../list-of-users/list-of-users.component';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  public employee: Employee;
  constructor(private httpService: HttpService,
    private router:Router) { }

  ngOnInit() {
    this.employee = new Employee(0,'','','', new Date());
  }

  deleteEmployee() {
      console.log("delemp")
      this.httpService.deleteEmployee(this.employee.employeeId)
      .subscribe(response => this.router.navigate(['listUsers']));
  }
}
