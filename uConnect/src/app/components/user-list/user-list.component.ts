import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: any;
  @Output() selectedUser = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  selectUser(user) {
    console.log('selecciona al usuario ', user);
    this.selectedUser.emit(user);
  }

}
