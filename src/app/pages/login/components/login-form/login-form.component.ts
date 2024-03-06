import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
   username: string = '';
   password: string = '';

   constructor () {}

   onSubmit(): void {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password)
   }

}
