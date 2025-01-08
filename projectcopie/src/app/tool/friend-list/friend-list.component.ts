import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent {
  @Output() close = new EventEmitter<void>();

  friends = [
    { name: 'John Doe', added: false },
    { name: 'Jane Smith', added: false },
    { name: 'Alice Johnson', added: false },
    { name: 'John Doe', added: false },
    { name: 'Jane Smith', added: false },
    { name: 'Alice Johnson', added: false },
    { name: 'John Doe', added: false },
    { name: 'Jane Smith', added: false },
    { name: 'Alice Johnson', added: false },
    { name: 'John Doe', added: false },
    { name: 'Jane Smith', added: false },
    { name: 'Alice Johnson', added: false },
    { name: 'John Doe', added: false },
    { name: 'Jane Smith', added: false },
    { name: 'Alice Johnson', added: false },
    { name: 'John Doe', added: false },
    { name: 'Jane Smith', added: false },
    { name: 'Alice Johnson', added: false },
  ];

  addFriend(friend: any) {
    if (!friend.added) {
      friend.added = true;
      alert(`Invitation envoyée à ${friend.name}`);
    }
  }

  closeFriendList() {
    this.close.emit();
  }
}
