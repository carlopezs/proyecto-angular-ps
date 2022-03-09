import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http:HttpClient) { }




  getAllTicketsByUserId(userId:string){
    const formData = new FormData();
    formData.append('Empleado_id', userId);
    formData.append('query', '');
    formData.append('Tarea', 'LISTARCC');
    formData.append('todos', '1');

    return this.http.post('http://45.70.13.23:8011/plus1/api/v1/getTickets/',formData)
  }


}
