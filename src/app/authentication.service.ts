import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public afAuth: AngularFireAuth // Inyecta el servicio de autenticación de Firebase
  ) { }

   // Método para cerrar sesión
   SignOut() {
    return this.afAuth.signOut().then(() => {
      window.alert('¡Has cerrado sesión correctamente!');
      // Redirige a la página de inicio o a donde desees después del cierre de sesión
      // Por ejemplo:
      // this.router.navigate(['/inicio']);
    });
  }
}
