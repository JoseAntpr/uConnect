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
    return this.http.get(`http://localhost:4000/connection/${user._id}`)
      .pipe(
        map( (data: any) =>  data.connections)
      );
  }
}
