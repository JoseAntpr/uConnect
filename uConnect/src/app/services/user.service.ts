import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getUsers() {
    return this.http.get('http://localhost:3000/user')
      .pipe(
        map( (data: any) =>  data.user)
      );
  }

}
