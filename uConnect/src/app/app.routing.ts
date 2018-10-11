import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserContainerComponent } from './components/user/user-container/user-container.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';




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

