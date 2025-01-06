import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})

export class LoginComponent
{
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient, 
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const formData = this.loginForm.value;
    console.log(formData);

    this.http.post('http://localhost:5000/api/users/login', formData)
     .subscribe({
      next: (response: any) => {
        // Handle successful login
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/dashboard']); // Redirect to dashboard or home
      },
      error: (err) => {
        // Handle error response
        this.errorMessage = 'Invalid email or password';
      },
    });
  }
}
