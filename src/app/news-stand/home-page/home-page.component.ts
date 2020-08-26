import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { News } from 'src/app/news';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public newss: News[];
  public country: string;
  constructor(private apiService: ApiServiceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      switch (param.country) {
        case 'in':
          this.country = 'INDIA'
          break;
        case 'us':
          this.country = 'USA'
          break;
        case 'gb':
          this.country = 'GREAT BRITAIN'
          break;
        case 'my':
          this.country = 'MALAYSIA'
          break;
        case 'sg':
          this.country = 'SINGAPORE'
          break;
        case 'au':
          this.country = 'AUSTRALIA'
          break;
        default:
          this.country = this.apiService.getCountry();
          break;
      }
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

}
