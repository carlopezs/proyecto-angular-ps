import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginUser(user:User):Observable<any>{
    const formData = new FormData();
    formData.append('user', user.user);
    formData.append('pass', user.pass);
    formData.append('Empresa_id', user.Empresa_id);
    formData.append('Tarea', 'LOGIN1');

    return this.http.post('http://45.70.13.23:8011/plus1/api/v1/applogin/',formData)
  }
}
