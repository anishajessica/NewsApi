import { Component, OnInit, ɵLocaleDataIndex } from '@angular/core';
import { MAT_DATE_LOCALE_PROVIDER } from '@angular/material';
import { not } from '@angular/compiler/src/output/output_ast';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public date = new Date();
  public display = false;
  public search: string;
  private user: string;
  private value = false;

  constructor(private apiService: ApiServiceService, private router: Router, private auth: AuthServiceService) {
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.auth.subject.subscribe(data => {
      this.user = data;
      if (!this.user || this.user == '') {
        this.value = true;
      } else {
        this.value = false;
      }
    })
  }

  toggle() {
    this.display = !(this.display);
  }
  setCountry(country) {
    this.display = !(this.display);
    this.router.navigate(['/home'], { queryParams: { country: country } })
  }
  searchCall() {
    this.router.navigate(['/home/searchPage'], { queryParams: { searchString: this.search } })
    this.search = '';
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/home'])
  }
}
