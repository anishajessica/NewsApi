import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FavServiceService } from 'src/app/services/fav-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public newss: News[];
  constructor(private apiService: ApiServiceService, private route: ActivatedRoute,private auth:AuthServiceService,private router:Router,private favService:FavServiceService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      if (param.searchString) {
        this.apiService.setSearchString(param.searchString);
      }
    })


    this.apiService.getAllHeadLines().subscribe(
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
}
