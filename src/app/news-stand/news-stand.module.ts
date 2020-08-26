import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';




@NgModule({
  declarations: [ToolbarComponent, HomePageComponent, FavoriteComponent, SearchResultComponent, CountryPageComponent, FavoritePageComponent],
  imports: [
    CommonModule
  ]
})
export class NewsStandModule { }
