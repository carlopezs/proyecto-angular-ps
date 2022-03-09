import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.scss']
})
export class ListTicketsComponent implements OnInit {

  tickets:any[] = []

  constructor(private ticketsService: TicketsService, private activateRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.ticketsService.getAllTicketsByUserId(this.activateRoute.snapshot.params['id']).subscribe((res:any)=>{
      this.tickets = res
      console.log(this.tickets)
    })
  }

  goToSeeTicketDetail(ticket:any){
    localStorage.setItem('ticket',JSON.stringify(ticket))
    this.router.navigate(['detailTicket'])
  }

}