import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  arrayUserConnection = new Array<User> ();

  constructor(private http: HttpClient) { }

  getUserConnections( user: User ) {
    this.arrayUserConnection.length = 0;
    return this.http.get(`http://localhost:4000/connection/${user._id}`)
      .pipe(
        map( (data: any) =>  {
          data.connections.forEach( userConnect => {
            this.arrayUserConnection.push(new User(userConnect));
          });
          return this.arrayUserConnection;
        })
      );
  }
}
