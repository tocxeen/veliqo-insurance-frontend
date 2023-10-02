import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/tools/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor( private authService:AuthService, private router:Router) {}

  ngOnInit() {
   
    if (Boolean(this.authService.isLoggedIn())) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  onSubmit(): void{
    this.authService.login(this.form.value).subscribe((res: any) => {
      console.log(res.token);
      this.authService.saveToken(res);
    });
  }
}
