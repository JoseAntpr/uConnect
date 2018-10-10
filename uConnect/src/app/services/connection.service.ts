import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  getUserConnections( user: User ) {

    return this.http.get(`http://localhost:4000/connected/${user._id}`)
      .pipe(
        map( (data: any) =>  {
          return data.connections.map( userConnect => {
            return new User(userConnect);
          });

        })
      );
  }

  getUserNotConnected( user: User ) {

    return this.http.get(`http://localhost:4000/connection/${user._id}`)
    .pipe(
      map( (data: any) =>  {
       return  data.user.map( userConnect => {
          return new User(userConnect);
        });
      })
    );
  }

  connection( connection ) {
    return this.http.post('http://localhost:4000/connection', connection)
      .pipe(map( data =>  console.log('Conexion realizada', data)));
  }
}
