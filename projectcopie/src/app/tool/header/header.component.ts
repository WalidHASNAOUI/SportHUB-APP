import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isFriendListVisible = false;
  isNotificationVisible = false;
  isMessagePopupVisible = false;

  toggleFriendList() {
    this.isFriendListVisible = !this.isFriendListVisible;
  }

  toggleNotifications() {
    this.isNotificationVisible = !this.isNotificationVisible;
  }

  toggleMessagePopup() {
    this.isMessagePopupVisible = !this.isMessagePopupVisible;
  }
}
