import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent {
  state = AuthenticatorCompState.LOGIN;
  isVisible = true;

  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  onForgotPasswordClick() {
    this.state = AuthenticatorCompState.FORGOT_PASSWORD;
  }

  onCreateAccountClick() {
    this.state = AuthenticatorCompState.REGISTER;
  }

  onLoginClick() {
    this.state = AuthenticatorCompState.LOGIN;
  }

  isLoginState() {
    return this.state === AuthenticatorCompState.LOGIN;
  }

  isRegisterState() {
    return this.state === AuthenticatorCompState.REGISTER;
  }

  isForgotPasswordState() {
    return this.state === AuthenticatorCompState.FORGOT_PASSWORD;
  }

  getStateText() {
    switch (this.state) {
      case AuthenticatorCompState.LOGIN:
        return 'Login';
      case AuthenticatorCompState.REGISTER:
        return 'Register';
      case AuthenticatorCompState.FORGOT_PASSWORD:
        return 'Forgot Password';
    }
  }

  hideComponent() {
    this.isVisible = false;
  }

  onRegister(): void {
    if (!this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.http.post(`${this.apiUrl}/register`, { email: this.email, password: this.password })
      .subscribe({
        next: (response: any) => {
          localStorage.setItem('userId', response.userId);

          this.errorMessage = '';
          this.successMessage = 'Registration successful! Please complete your profile.';
          this.router.navigate(['/profile']); 
        },
        error: (err) => {
          console.error('Error during registration:', err);
          this.errorMessage = err.error.msg || 'Registration failed.';
          this.successMessage = '';
        }
      });
  }

  onLogin(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required.';
      return;
    }

    this.http.post(`${this.apiUrl}/login`, { email: this.email, password: this.password })
      .subscribe({
        next: (response: any) => {
          this.successMessage = 'Login successful!';
          this.errorMessage = '';

          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.userId);

          this.hideComponent();
          this.router.navigate(['/postfeed']);
        },
        error: (err) => {
          console.error('Error during login:', err);
          this.errorMessage = err.error.msg || 'Login failed.';
          this.successMessage = '';
        }
      });
  }

  onResetPassword(): void {
    if (!this.email) {
      this.errorMessage = 'Email is required.';
      return;
    }

    this.http.post(`${this.apiUrl}/reset-password`, { email: this.email })
      .subscribe({
        next: (response: any) => {
          this.successMessage = 'Reset password email sent!';
          this.errorMessage = '';
        },
        error: (err) => {
          console.error('Error during password reset:', err);
          this.errorMessage = err.error.msg || 'Failed to send reset email.';
          this.successMessage = '';
        }
      });
  }
}

export enum AuthenticatorCompState {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD
}
