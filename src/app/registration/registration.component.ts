import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: '../login/login.component.css'
})
export class RegistrationComponent {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    // Simulate registration logic (replace with your backend service)
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Handle successful or failed registration
  }
}
