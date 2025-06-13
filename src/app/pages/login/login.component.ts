import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    email: '',
    password: '',
  };

  constructor(
    private apiservice: ApiserviceService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(loginForm: NgForm) {
    // Force all fields to be marked as touched
    if (loginForm.invalid) {
      Object.keys(loginForm.controls).forEach((field) => {
        const control = loginForm.controls[field];
        control.markAsTouched({ onlySelf: true }); // ✅ this is the key line
      });
      return;
    }
    console.log(this.loginObj.password, this.loginObj.emailid);
    console.log(loginForm.form.controls['password'].errors);

    this.loginApi();
  }

  loginApi() {
    this.http
      .post(
        'https://book-review-api-sqby.onrender.com/users/login',
        this.loginObj
      )
      .subscribe((res: any) => {
        console.log('res', res.statuscode);
        if (res.statuscode == 200) {
          alert(res.message);
          sessionStorage.setItem('token', res.data.headerkey);
          this.router.navigate(['/header']);
        }
      });
  }
}
