import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(
    private http: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    if ( this.form.valid ) {
      this.http.createUser(this.form.value).subscribe( data => {
        this.router.navigate(['/users']);
      });
    }
  }

}
