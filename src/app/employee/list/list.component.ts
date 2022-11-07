import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Users.model';
import { FormComponent } from '../form/form.component';
import { DilogBoxService } from '../services/dilog-box.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public employeeForm: any;
  public employeeData: any;

  constructor(private userservice: UserService, private dailog: DilogBoxService, private router: Router, private overlay: Overlay) {
    this.employeeData = [];

  }

  ngOnInit(): void {
    this.getEmployeeData();
  }
  getEmployeeData() {
    this.userservice.getEmployee().subscribe((result) => {
      console.log(result);
      this.employeeData = result;
    }
    )
  }



  openForm() {
    this.dailog.openDialog(FormComponent);
  }

  removeAt(id: any) {
    this.userservice.removeAt(id).subscribe((result) => {
      this.getEmployeeData();
    });
  }

  editItem(user: user) {
    this.dailog.openDialog(FormComponent);

  }
}
