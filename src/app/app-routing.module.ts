import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StreampageComponent } from './components/streampage/streampage.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'streampage', component: StreampageComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
