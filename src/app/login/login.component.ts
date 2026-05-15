import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

login() {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  const { username, password } = this.loginForm.value;

  if (username === 'admin' && password === '1234') {

    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/main']);
  } else {
    alert('Invalid Username or Password');
  }
}

}
