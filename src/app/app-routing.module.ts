import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'onboarding' },
  { path:"onboarding", component: OnboardingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
