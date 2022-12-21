import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './header/user/user.component';
import { ProfileComponent } from './header/profile/profile.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'user', component: ProfileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
