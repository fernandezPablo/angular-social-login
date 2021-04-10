import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFacebookComponent } from './componentes/login-facebook/login-facebook.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {
    path: 'login',
   component: LoginComponent
  },
  {
    path: 'login-facebook',
   component: LoginFacebookComponent
  },
  {
    path: '**',
   redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
