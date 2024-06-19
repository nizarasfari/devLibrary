import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authservice:AuthService, private router:Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required, Validators.minLength(3)],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
     const {username, password} = this.loginForm.value;

      if(this.authservice.login(username, password)) {
        const role = this.authservice.currentUserRole;
        this.router.navigate([role === 'admin' ? '/admin' : '/user']);  
      }else {
        alert('Invalid credentials');
      }
  }



}
