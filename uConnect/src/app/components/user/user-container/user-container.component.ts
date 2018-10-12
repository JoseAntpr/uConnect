import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from '../../../services/user.service';
import { ConnectionService } from '../../../services/connection.service';

// Models
import { User } from 'src/app/models/User.model';


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

  addConnection( user: User) {
    this.secondaryListTitle = `Connect one user with ${user.name}`;
    this.listType = false;
    this.userSelected = user;
    this.connectionService.getUserNotConnected( user ).subscribe( (usersNotConnected: User[]) => {
      return this.usersConnected = usersNotConnected;
    });
  }

  connect( connection ) {
    this.connectionService.connection({userOne: this.userSelected, ...connection}).
      subscribe(() =>  {
        this.usersConnected =  this.usersConnected.filter((u: User) => connection.userTwo._id !== u._id);
      });
  }

}
