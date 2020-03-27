import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './view/sign/sign.component';
import { WorkComponent } from './view/work/work.component';

const routes: Routes = [
  {
    path: "sign",
    component: SignComponent
  },
  {
    path: "work",
    component: WorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
