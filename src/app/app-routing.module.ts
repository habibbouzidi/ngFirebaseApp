import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { content } from './components/content-layout/content-routes';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo:'dashboard/default', pathMatch: 'full'},
  {path: '', component: ContentLayoutComponent, children: content, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
