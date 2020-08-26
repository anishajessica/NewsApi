import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FavServiceService } from 'src/app/services/fav-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  public newss: News[];
  public title: string;
  public display = true;
  constructor(private apiService: ApiServiceService, private route: ActivatedRoute,
              private favService: FavServiceService, private auth: AuthServiceService,
              private router: Router) {

  }

  ngOnInit() {
    this.display = !(this.auth.isUserAuthenticated(this.auth.getBearerToken()));
    this.title = 'FAVOURITES';
    this.favService.subject.subscribe(data => {
      this.newss = data;
      console.log(this.newss);
    });
  }
  remove(data: News) {
    this.favService.removeFav(data);
    this.apiService.removeFavorite(data).subscribe();
  }

}
