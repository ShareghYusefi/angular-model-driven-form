import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { avoidWord } from '../customValidation';

@Component({
  selector: 'form-component',
  standalone: false,
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
})
export class FormComponent {
  loginForm!: FormGroup;

  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   subscribe: new FormControl(false),
  // });

  // We can use a FormBuilder instance via Dependency injection to create a form group
  constructor(private formBuilderInstance: FormBuilder) {
    // create a form group with two form controls: email, password, subscribe
    this.loginForm = this.formBuilderInstance.group({
      email: [
        '',
        [
          Validators.email,
          Validators.required,
          Validators.minLength(5),
          avoidWord,
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
      subscribe: false,
    });
  }

  // getter for loginFrom email formControl
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
