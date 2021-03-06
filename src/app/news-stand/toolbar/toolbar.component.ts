import { Component, OnInit, ╔ÁLocaleDataIndex } from '@angular/core';
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
  public user: string;
  public value = false;

  constructor(private apiService: ApiServiceService, private router: Router, private auth: AuthServiceService) {
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    document.getElementsByTagName("input")[0].addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search").click();
    }
});
    this.auth.subject.subscribe(data => {
      this.user = data;
      if (!this.user || this.user === '') {
        this.value = true;
      } else {
        this.value = false;
      }
    });
  }

  toggle() {
    this.display = !(this.display);
  }
  setCountry(ctry) {
    this.display = !(this.display);
    this.router.navigate(['/home'], { queryParams: { country: ctry } });
  }
  searchCall() {
    this.router.navigate(['/home/searchPage'], { queryParams: { searchString: this.search } });
    this.search = '';
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}
