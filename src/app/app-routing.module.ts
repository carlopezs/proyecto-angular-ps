import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/auth/login/login.component';
import { ListTicketsComponent } from './components/list-tickets/list-tickets.component';
import { DetailTicketComponent } from './components/detail-ticket/detail-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'listTickets/:id',
    component: ListTicketsComponent,
  },
  {
    path: 'detailTicket',
    component: DetailTicketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
