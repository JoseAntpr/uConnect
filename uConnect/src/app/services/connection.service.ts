import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS
import { map } from 'rxjs/operators';

// Model
import { User } from '../models/User.model';

// Environment
import { environment } from '../../environments/environment';

@Injectable()
export class ConnectionService {
  constructor(private http: HttpClient) {}

  getUserConnections(user: User) {
    return this.http.get(`${environment.api.url}connected/${user._id}`).pipe(
      map((data: any) => {
        return data.connections.map(userConnect => {
          return new User(userConnect);
        });
      })
    );
  }

  getUserNotConnected(user: User) {
    return this.http.get(`${environment.api.url}connection/${user._id}`).pipe(
      map((data: any) => {
        return data.users.map(userConnect => {
          return new User(userConnect);
        });
      })
    );
  }

  connection(connection) {
    return this.http.post(`${environment.api.url}connection`, connection).pipe(
      map((data: any) => {
        console.log(data);
      })
    );
  }
}
