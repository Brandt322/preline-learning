import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/components/login/login.component";
import { MainComponent } from "./shared/components/layout/main/main.component";
import { DashboardComponent } from "./features/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // // { path: 'register', component: SingUpComponent },
  {
    path: 'main', component: MainComponent, children: [
      { path: '', pathMatch: 'full', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
