import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/Users.model';
import { DataCommunicationService } from '../dataCommmunication/data-communication.service';
import { DilogBoxService } from '../services/dilog-box.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  public employeeForm: FormGroup;
  public employeeData: any;
  id: any;
  closeDialog: any;



  constructor(private usersservice: UserService, private datacommunation: DataCommunicationService, private dilog: DilogBoxService) {
    this.employeeData = [];
    this.employeeForm = new FormGroup({
      id: new FormControl(''),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      phonenumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
      salary: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }


  ngOnInit(): void {
  }
  get function(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }
  save() {
    debugger
    if (this.employeeForm.valid) {

      if (this.employeeForm.value.id) {
        this.updateData()
      }
      else {
        this.usersservice.addEmployee(this.employeeForm.value).subscribe((res: any) => {
          debugger
          this.datacommunation.getData(res);
        })
      }
    }

  }

  public reset(): void {
    this.employeeForm.reset();
  }

  updateData() {
    this.usersservice.updateEmployee(this.employeeForm.value.id, this.employeeForm.value).subscribe(res => {
      this.datacommunation.getData(res);
    })
  }

  getEmployeeData() {
    this.usersservice.getEmployee().subscribe(res => {
      this.employeeData = res
    });
  }

}
