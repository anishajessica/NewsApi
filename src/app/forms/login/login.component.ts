import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { query } from '@angular/animations';
import { FavServiceService } from 'src/app/services/fav-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public route:Router,public authService:AuthServiceService,private favService:FavServiceService) { }

ngOnInit() {

  }

login(user,pass){
if(this.authService.authenticateUser(user,pass)){
this.favService.initializeFavList();
this.route.navigate(['/favorite'])
}else{
  this.route.navigate(['/login'])
}
}
}
