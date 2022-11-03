import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  public employeeForm: FormGroup;
  constructor(private formbuider: FormBuilder,
    private userServices: UserService) {
    this.employeeForm = new FormGroup('');
    this.employeeForm = this.formbuider.group({});
  }

  ngOnInit(): void {
  }

}
