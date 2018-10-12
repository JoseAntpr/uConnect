import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

// Modules
import { AppRoutingModule } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UserContainerComponent } from './components/user/user-container/user-container.component';
import { UserListComponent } from './components/user/user-container/user-list/user-list.component';
import { UserItemComponent } from './components/user/user-container/user-list/user-item/user-item.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';

// Services
import { ConnectionService } from './services/connection.service';
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
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    UserService,
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
