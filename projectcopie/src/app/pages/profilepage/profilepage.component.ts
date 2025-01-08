import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css'],
})
export class ProfilepageComponent {
  user = {
    name: 'Sami Sbai',
    bio: 'Sports enthusiast. Love football and marathon running!',
    email: 'samisbai2@gmail.com',
    location: 'New York, USA',
    joined: new Date('2022-01-01'),
  };

  friends = [
    { name: 'Jane Smith', profilePicture: 'assets/profile-picture.jpg'},
    { name: 'Mike Johnson', profilePicture:' assets/profile-picture.jpg'},
    { name: 'Emily Davis', profilePicture: 'assets/profile-picture.jpg'}
  ];

  photos = [
  ];

  selectedTab = 'timeline';

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
