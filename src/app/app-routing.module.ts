import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { SignupComponent } from './signup/signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserviewComponent } from './userview/userview.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"add",component:AddComponent},
  {path:"edit/:id",component:EditComponent},
  {path:"list",component:ListComponent},
  {path:"signup",component:SignupComponent},
  {path:"userlogin",component:UserLoginComponent},
  {path:"userview",component:UserviewComponent},
  {path:"view/:id",component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
