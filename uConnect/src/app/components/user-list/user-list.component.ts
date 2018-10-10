import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/User.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() users;
  @Input() listType = null;
  @Output() selectedUser = new EventEmitter<User>();
  @Output() SelectedUserForConnection = new EventEmitter<User>();
  @Output() userSelectedForConnect = new EventEmitter<Object>();
  form = new FormGroup({
    connection: new FormControl('FRIENDS', Validators.required)
  });
  userConnect: User;

  constructor() {
  }

  selectUser(user: User) {
    this.userConnect = null;
    this.selectedUser.emit(user);
  }

  addUserConnection(user) {
    this.userConnect = user;
    this.SelectedUserForConnection.emit(user);
  }

  connectUser( user: User ) {
    const connection = this.form.value.connection;
    this.userSelectedForConnect.emit({ userTwo: user, connection});
  }

}
