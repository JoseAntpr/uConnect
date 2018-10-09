import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ConnectionService } from '../../services/connection.service';

import { User } from './../../models/User.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

  users: User[];
  usersConnected: User[];
  userSelected: User;
  secondaryListTitle: string;
  listType = true;

  constructor(
    private userService: UserService,
    private connectionService: ConnectionService
    ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( (users: User[]) => {
      console.log(users);
      return this.users = users;
    });
  }

  selectedUser( user: User ) {
    this.userSelected = user;
    this.listType = true;
    this.secondaryListTitle = `Connected with:  ${user.name}`;
    this.connectionService.getUserConnections( user ).subscribe( (usersConnected: User[]) => {
      return this.usersConnected = usersConnected;
    });

  }

  connection( user: User) {
    this.secondaryListTitle = `Connect one user with ${user.name}`;
    this.listType = false;
    this.connectionService.getUserNotConnected( user ).subscribe( (usersNotConnected: User[]) => {
      return this.usersConnected = usersNotConnected;
    });
  }

}
