import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  notifications = [
    { id: 1, message: 'Nouvelle demande d’amitié', read: false },
    { id: 2, message: 'Match de sport prévu demain', read: false },
    { id: 3, message: 'Votre équipe a gagné un tournoi', read: false },
    { id: 4, message: 'Votre équipe a gagné un tournoi', read: false },
    { id: 5, message: 'Votre équipe a gagné un tournoi', read: false }

  ];

  isMenuOpen = true;

  @Output() close = new EventEmitter<void>();

  get unreadNotificationsCount(): number {
    return this.notifications.filter(notification => !notification.read).length;
  }

  markAsRead(notification: any) {
    notification.read = true;
  }

  clearAllNotifications() {
    this.notifications = [];
  }

  closeNotifications() {
    this.close.emit();
  }
}
