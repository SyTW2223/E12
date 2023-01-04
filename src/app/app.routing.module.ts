import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { UserComponent } from './modules/header/user/user.component';
import { ProfileComponent } from './modules/header/profile/profile.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'user', component: UserComponent},
  {path:'profile', component: ProfileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
