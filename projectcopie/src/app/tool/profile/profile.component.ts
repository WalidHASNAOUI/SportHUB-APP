import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  firstName = '';
  lastName = '';
  dateOfBirth = '';
  address = '';
  sport = '';
  description = '';
  profileImage: string | null = null;
  show = true;

  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profileImage = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (!this.firstName || !this.lastName || !this.address) {
      alert('First name, last name, and address are required.');
      return;
    }

    const profileData = {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      address: this.address,
      sport: this.sport,
      description: this.description,
    };

    const userId = localStorage.getItem('userId');

    if (!userId) {
      alert('User ID not found. Please log in again.');
      return;
    }

    this.http.put(`${this.apiUrl}/profile/${userId}`, profileData)
      .subscribe({
        next: (response: any) => {
          alert('Profile updated successfully!');
          this.router.navigate(['/']); 
        },
        error: (err) => {
          console.error('Error updating profile:', err);
          alert(err.error.msg || 'An error occurred while updating your profile.');
        }
      });
  }
}
