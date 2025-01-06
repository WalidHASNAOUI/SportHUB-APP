import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  dropdownVisible = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  goToProfile() {
    this.dropdownVisible = false;
    console.log('Navigating to profile...');
  }

  logOut() {
    this.dropdownVisible = false;
    console.log('Logging out...');
  }
}
