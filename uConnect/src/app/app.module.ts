import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppRoutingModule } from './app.routing';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    NewUserComponent,
    UserContainerComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
