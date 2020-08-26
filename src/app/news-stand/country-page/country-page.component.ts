import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FavServiceService } from 'src/app/services/fav-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  public newss: News[];
  public country: string;
  constructor(private router: Router, private apiService: ApiServiceService, private route: ActivatedRoute, private favService: FavServiceService, private auth: AuthServiceService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.country = this.names(param.country)
      if (param.country) {
        this.apiService.setCountry(param.country);
      }
    })
    this.apiService.getTopHeadLines().subscribe(
      data => {
        this.newss = Object.values(data)[2];
      },
      error => {
        console.log(error);
      }
    )

  }
  add(fav) {
    if (this.auth.isUserAuthenticated(this.auth.getBearerToken())) {
      this.apiService.addFavorite(fav).subscribe(data => {
        this.favService.updateFavList(data);
      }
      )
    } else {
      this.router.navigate(['/login']);
    }
  }
  names(code) {
    let name = '';
    switch (code) {
      case 'in':
        name = 'INDIA'
        break;
      case 'us':
        name = 'USA'
        break;
      case 'gb':
        name = 'GREAT BRITAIN'
        break;
      case 'my':
        name = 'MALAYSIA'
        break;
      case 'sg':
        name = 'SINGAPORE'
        break;
      case 'au':
        name = 'AUSTRALIA'
        break;
      default:
        name = this.names(this.apiService.getCountry());
        break;
    }
    return name;

  }
}
