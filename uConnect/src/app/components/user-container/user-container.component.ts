import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( res => console.log(res));
  }

}
