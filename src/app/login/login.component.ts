import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

constructor(private router: Router) { }

  onSubmit() {
    // Simulate login logic (replace with your authentication service)
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Handle successful or failed login
  }
}
