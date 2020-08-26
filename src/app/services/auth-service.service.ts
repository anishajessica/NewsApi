import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
private authorized = environment.authorized;
public user:string;
private token;
public subject=new BehaviorSubject(this.user);
  constructor() { 
  }
  authenticateUser(inputUser,inputPass) {
    let auth = false;
    this.authorized.forEach((element)=>{
    if((element.user==inputUser&&element.pass==inputPass)){
      auth=true;
    }})
    if(auth){     
      this.subject.next(inputUser);
      this.token=Math.random().toString(36).substring(7);
      this.setBearerToken(this.token);
      return true;
    }else{
      return false;
    }
   }
 
   setBearerToken(token) {
     localStorage.setItem('token',token);     
   }
 
   getBearerToken() {
     return localStorage.getItem('token')
   }
 
   isUserAuthenticated(token): boolean {    
     if(token==this.token&&token){
       return true;
     }else{
       return false;
     }
   }
   logout(){
     this.subject.next('');
     localStorage.removeItem('token');
   }
}
