import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators,  ValidatorFn, AbstractControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true
})
export class SignupComponent {
  signupForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    { validators: this.passwordsMatchValidator } // Add the custom validator to the form group
  );
  }

  // Custom validator to check if passwords match
  passwordsMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordsMismatch: true };
  };

  onSubmit() {
    if (this.signupForm.invalid || this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
      this.errorMessage = 'Please check your input and ensure passwords match.';
      return;
    }

    const formData = this.signupForm.value;
    delete formData.confirmPassword; // We don't send confirmPassword to backend

    this.http.post('http://localhost:5000/api/users/signup', formData).subscribe({
      next: (response: any) => {
        // Handle successful signup
        this.router.navigate(['/login']);
      },
      error: (err) => {
        // Handle error response
        this.errorMessage = 'Something went wrong. Please try again later.';
      },
    });
  }

}
