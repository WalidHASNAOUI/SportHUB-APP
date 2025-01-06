import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {
  suggestedFriends = [
    {
      name: 'Max Paul',
      location: 'Annecy, Haute Savoie, France',
      mutual: 'You have mutual friends on Sportify',
      image: 'images/profile/large.png',
    },
    {
      name: 'Matt Tom',
      location: 'Annecy / Lannion, France',
      mutual: 'You have mutual friends on Sportify',
      image: 'images/profile/large.png',
    },
    {
      name: 'Hakan HASNAOUI',
      location: 'Annecy, France',
      mutual: 'You have mutual friends on Sportify',
      image: 'images/profile/large.png',
    }
  ];
}
