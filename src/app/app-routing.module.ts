import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './forms/login/login.component';
import { HomePageComponent } from './news-stand/home-page/home-page.component';
import { FavoriteComponent } from './news-stand/favorite/favorite.component';
import { CountryPageComponent } from './news-stand/country-page/country-page.component';
import { SearchResultComponent } from './news-stand/search-result/search-result.component';
import { FavoritePageComponent } from './news-stand/favorite-page/favorite-page.component';
import { FavGaurdGuard } from './fav-gaurd.guard';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home/countryPage',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'countryPage',
        component: CountryPageComponent,
      },
      {
        path: 'searchPage',
        component: SearchResultComponent,
      },
      {
        path: '',
        redirectTo: 'countryPage',
        pathMatch: 'full'
      }
    ]
  }
  ,
  {
    path: 'favorite',
    component: FavoritePageComponent,
    canActivate: [FavGaurdGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
