import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { DilogBoxService } from '../services/dilog-box.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {



  public employeeData: any;
  constructor(private userservice: UserService, private dilog: DilogBoxService) {
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
    this.dilog.openDialog(FormComponent)
  }
}
