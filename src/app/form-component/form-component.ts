import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-component',
  standalone: false,
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
})
export class FormComponent {
  loginForm!: FormGroup;

  // We can use a FormBuilder instance via Dependency injection to create a form group
  constructor(private formBuilderInstance: FormBuilder) {
    // create a form group with two form controls: email, password, subscribe
    this.loginForm = this.formBuilderInstance.group({
      email: '',
      password: '',
      subscribe: false,
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
