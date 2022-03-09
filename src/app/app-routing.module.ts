import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/auth/login/login.component';
import { ListTicketsComponent } from './components/list-tickets/list-tickets.component';
import { DetailTicketComponent } from './components/detail-ticket/detail-ticket.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'listTickets',
    component: ListTicketsComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'detailTicket',
    component: DetailTicketComponent,
    canActivate: [AuthGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
