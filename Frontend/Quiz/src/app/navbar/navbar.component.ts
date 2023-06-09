import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  bott = false;

  constructor(public auth:AuthService){}

  logout() {
    this.auth.logout();
  }

  bottActive(){
    this.bott = !this.bott;
  }
  
}
