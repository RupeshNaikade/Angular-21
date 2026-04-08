import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {

  constructor(public router: Router) {

  }

  onLogin(form: any) {
    this.router.navigate(['/product']);
    return;
    if (form.valid) {
      console.log('Logging in with:', form.value);
    }
  }

  onRegister(form: any) {
    this.router.navigate(['/cart']);
    return;
    if (form.valid) {
      console.log('Registering user:', form.value);
    }
  }
}
