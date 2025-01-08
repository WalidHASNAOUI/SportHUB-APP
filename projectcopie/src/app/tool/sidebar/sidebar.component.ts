import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  userName: string = 'John Doe'; 
  isMessagePopupVisible = false;

  constructor() {}

  ngOnInit(): void {
    this.userName = 'Sami Sbai'
  }

  toggleMessagePopup(): void {
    this.isMessagePopupVisible = !this.isMessagePopupVisible;
  }
}
