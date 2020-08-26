import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public newss : News[];
  constructor(private apiService:ApiServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param=>{  
      if(param.searchString){
      this.apiService.setSearchString(param.searchString);
    }})

    
    this.apiService.getAllHeadLines().subscribe(
      data=>{      
        this.newss=Object.values(data)[2];
      },
      error=>{
        console.log(error);
      }
    )


  }

}
