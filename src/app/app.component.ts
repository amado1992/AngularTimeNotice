import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
constructor(private router: Router){}
  onLogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    localStorage.removeItem("email");
    localStorage.removeItem("isLoggedin");
    
    this.router.navigate(['/login'])
  }
}
