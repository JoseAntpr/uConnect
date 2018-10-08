import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() users;
  @Output() selectedUser = new EventEmitter<User>();
  userConnect;

  constructor() {
  }

  selectUser(user: User) {
    this.selectedUser.emit(user);
  }

  connectUserSelected(user) {
    this.userConnect = user;
  }

}
