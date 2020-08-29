import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { News } from '../news';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private user: any;
  constructor(private httpClient: HttpClient, private auth: AuthServiceService) {

  }

  public url;
  key = environment.api_key;
  country = 'in';
  searchString = '';
  getCountry(): string {
    return this.country;
  }

  setCountry(country) {
    this.country = country;
  }

  setSearchString(search) {
    this.searchString = search;
  }

  getTopHeadLines(): Observable<object> {
    this.url = `https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=${this.key}`;
    return this.httpClient.get<object>(this.url);
  }
  getAllHeadLines(): Observable<object> {
    this.url = `https://newsapi.org/v2/everything?q=${this.searchString}&apiKey=${this.key}`;
    return this.httpClient.get<object>(this.url);
  }
  getAllFavorites(): Observable<Array<News>> {
    this.auth.subject.subscribe(data => {
      this.user = data;
    });
    this.url = `http://localhost:3000/${this.user}`;
    return this.httpClient.get<News[]>(this.url);
  }
  removeFavorite(news: News) {
    this.auth.subject.subscribe(data => {
      this.user = data;
      console.log(data);
    });
    this.url = `http://localhost:3000/${this.user}/${news.id}`;
    return this.httpClient.delete<News>(this.url);
  }
  addFavorite(news: News): Observable<News> {
    news.id = news.url.replace(/[^a-zA-Z]+/g, '');
    this.url = `http://localhost:3000/${this.user}`;
    return this.httpClient.post<News>(this.url, news);
  }
}
