import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { BlockedlevelComponent } from './blockedlevel/blockedlevel.component';
import { CodelevelComponent } from './codelevel/codelevel.component';
import { AdminComponent } from './admin/admin.component';
import { ContainerlevelComponent } from './containerlevel/containerlevel.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'level/:id', component: CodelevelComponent },
  { path: 'lev/:id', component: ContainerlevelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'evaluation', component: EvaluationComponent },
  {path: 'blocked', component: BlockedlevelComponent},
  {path: 'admin', component: AdminComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
