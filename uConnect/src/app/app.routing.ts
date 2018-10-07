import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserContainerComponent } from './components/user-container/user-container.component';



const routes: Routes = [
  { path: 'users', component: UserContainerComponent },
  { path: 'add', component: NewUserComponent },
  { path: '', pathMatch: 'full', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

