import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.scss']
})
export class DetailTicketComponent implements OnInit {

  ticket:any

  constructor() { }

  ngOnInit(): void {
    this.ticket = localStorage.getItem('ticket');
  }

}
