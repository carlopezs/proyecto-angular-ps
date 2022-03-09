import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any = undefined;

  constructor(private http: HttpClient) {}

  getUserByPassword(user: User) {
    return new Promise((resolve) => {
      const formData = new FormData();
      formData.append('user', user.user);
      formData.append('pass', user.pass);
      formData.append('Empresa_id', user.Empresa_id);
      formData.append('Tarea', 'LOGIN1');

      this.http
        .post('http://45.70.13.23:8011/plus1/api/v1/applogin/', formData)
        .pipe(take(1))
        .subscribe((res: any) => {
       
          resolve(res[0]);
        });
    });
  }

  async loginUser(user:User){
   const userData:any = await  this.getUserByPassword(user)
   if (userData !== undefined) {
     sessionStorage.setItem('userId',`${userData.Empleado_id}`)
   }
   return userData
  }

  getUserId(){
    return sessionStorage.getItem('userId') || ''
  }

  isLoggedIn(){
    if (sessionStorage.getItem('userId') === null){
      return false
    }
    return true
  }
}
