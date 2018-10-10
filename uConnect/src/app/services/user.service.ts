import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './../models/User.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getUsers() {
    return this.http.get('http://localhost:4000/user')
      .pipe(
        map( (data: any) => {
          return data.user.map( user => {
            return new User(user);
          });
        })
      );
  }

  createUser( user: User ) {
    return this.http.post('http://localhost:4000/user', user)
      .pipe(map( data =>  console.log(data)));
  }

}
