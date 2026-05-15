import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TotalTripsComponent } from './total-trips/total-trips.component';
import { UpcomingTripsComponent } from './upcoming-trips/upcoming-trips.component';
import { CompletedTripsComponent } from './completed-trips/completed-trips.component';
import { AvgBudgetComponent } from './avg-budget/avg-budget.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'total', component: TotalTripsComponent, canActivate: [AuthGuard] },
      { path: 'upcoming', component: UpcomingTripsComponent, canActivate: [AuthGuard] },
      { path: 'completed', component: CompletedTripsComponent, canActivate: [AuthGuard] },
      { path: 'budget', component: AvgBudgetComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'total', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
