import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userLogin: User = {
    user: '',
    pass: '',
    Empresa_id: '1',
  };

  subscriptions: Subscription[] = [];

  formGroup: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.formGroup = this._fb.group({
      userName: ['userName', [Validators.required]],
      pass: ['pass', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    const subs = this.authService.loginUser(this.userLogin).subscribe((res) => {
      if (res[0] !== undefined) {
        this.router.navigate([`/listTickets/${res[0].Empleado_id}`]);
      }
      else{
        alert('Error al ingresar')
      }
    });

    this.subscriptions.push(subs);
  }

  ngOnDestroy() {
    this.subscriptions.map((res) => res.unsubscribe());
  }
}
