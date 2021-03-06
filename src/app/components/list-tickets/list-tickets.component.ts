import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.scss']
})
export class ListTicketsComponent implements OnInit {

  tickets:any[] = []

  subscriptions: Subscription[] = [];

  constructor(private ticketsService: TicketsService, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    const sub = this.ticketsService.getAllTicketsByUserId(this.authService.getUserId()).subscribe((res:any)=>{
      this.tickets = res
     
    })
    this.subscriptions.push(sub)
  }

  goToSeeTicketDetail(ticket:any){
    localStorage.setItem('ticket',JSON.stringify(ticket))
    this.router.navigate(['detailTicket'])
  }

  ngOnDestroy() {
    this.subscriptions.map((res) => res.unsubscribe());
  }

}
