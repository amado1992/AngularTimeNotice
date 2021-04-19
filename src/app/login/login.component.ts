import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from '../dto/loginDto';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDto: LoginDto;
  @Input() error: string | null;

 // @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router, private appService: AuthService) {
    this.loginDto = new LoginDto();
   }

  ngOnInit(): void {
  }


  submit() {
    console.log(this.form.get('username').value)

    this.loginDto.email = this.form.get('username').value;
    this.loginDto.password = this.form.get('password').value;

    if (this.form.valid) {
      this.appService.login(this.loginDto)
    .subscribe(data => {
      localStorage.setItem('token', data.token)
      localStorage.setItem('roles', data.roles)
      localStorage.setItem('email', data.email)
      localStorage.getItem('isLoggedin')
      this.router.navigate(['/layout']);
    });
      //this.submitEM.emit(this.form.value);
    }
  }
}
