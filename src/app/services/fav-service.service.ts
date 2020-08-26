import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { News } from '../news';
import { ApiServiceService } from './api-service.service';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FavServiceService {
  public favList : News[] =[];
  public subject = new BehaviorSubject<News[]>(this.favList);
  constructor(private apiService:ApiServiceService,private auth:AuthServiceService, private route:Router) { 

  }
  initializeFavList(){
    this.apiService.getAllFavorites().subscribe(
      data=>{            
        data.forEach(element => {
          if(this.auth.isUserAuthenticated(this.auth.getBearerToken())){
          this.updateFavList(element);
        }
        });
        this.subject.subscribe(data=>{
        });
        
      },
      error=>{
        console.log(error);
      }
    )
  }
  updateFavList(news:News){
    let index=this.favList.findIndex((element)=>{
      return element.url===(news.url);
    });
    if(index===-1){
    this.favList.push(news);
    this.subject.next(this.favList);
    }
    return index;
  }
  removeFav(news:News){
    if(this.auth.isUserAuthenticated(this.auth.getBearerToken())){    
    let index=this.favList.findIndex((element)=>{
      return element.url===(news.url);
    });
    this.favList.splice(index,1);
  }else{
    this.route.navigate(['/login']);
  }
  }
}
