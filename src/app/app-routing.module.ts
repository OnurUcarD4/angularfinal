import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { QuestionsComponent } from './questions/questions.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"main",
    component: MainComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin",
    component: AdminComponent,
    canActivate:[RoleGuard]
  },
  {
    path:"hakkimizda",
    component: AboutComponent,
    },
      {
    path:"sorular",
    component: QuestionsComponent,
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
