import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

  users: any;
  usersConnected: any;

  constructor(
    private userService: UserService,
    private connectionService: ConnectionService
    ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( users => {
      return this.users = users;
    });
  }

  selectedUser( user ) {
    console.log('Usuario recibido en container', user);
    this.connectionService.getUserConnections( user ).subscribe( usersConnected => {
      return this.usersConnected = usersConnected;

    });

  }

}
