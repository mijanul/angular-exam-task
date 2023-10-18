import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public genderOptions: string[] = ['Male', 'Female'];

  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/
          ),
        ],
      ],
      gender: ['Male', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(150)]],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }
}
