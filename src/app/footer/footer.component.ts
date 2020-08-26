import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public date = new Date();
  constructor(private router: Router, private auth: AuthServiceService) { }

  ngOnInit() {
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}
