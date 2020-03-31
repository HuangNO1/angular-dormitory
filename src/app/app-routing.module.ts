import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './view/sign/sign.component';
import { AdminComponent } from './view/admin/admin.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "sign",
    component: SignComponent,
    children: [
      {
        path: "sign-in",
        component: SignInComponent
      },
      {
        path: "sign-up",
        component: SignUpComponent
      }
    ]
  },
  {
    path: "admin",
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
