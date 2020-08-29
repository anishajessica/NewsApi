import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module'


import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule as forms, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [ ToolbarComponent,
                  HomePageComponent,
                  FavoriteComponent,
                  SearchResultComponent,
                  CountryPageComponent,
                  FavoritePageComponent
                ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    forms,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatListModule
  ],
  exports:[
    CountryPageComponent,
    FavoriteComponent,
    FavoriteComponent,
    HomePageComponent,
    SearchResultComponent,
    ToolbarComponent
  ]
})
export class NewsStandModule { }
