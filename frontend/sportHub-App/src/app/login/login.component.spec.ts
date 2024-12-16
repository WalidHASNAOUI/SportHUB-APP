import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        // Store token and navigate to profile
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}
