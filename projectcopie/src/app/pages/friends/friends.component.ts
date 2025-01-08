import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent {
  friends = [
    { name: 'Alice', added: false },
    { name: 'Bob', added: false },
    { name: 'Charlie', added: false },
  ];


}
