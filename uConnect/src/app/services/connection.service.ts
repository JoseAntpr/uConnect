import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  getUserConnections( user: any ) {
    return this.http.get(`http://localhost:3000/connection/${user._id}`)
      .pipe(
        map( data =>  data.connections)

      );
  }
}
