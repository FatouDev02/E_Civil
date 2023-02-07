import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user';


const API_URL = 'http://localhost:8080/ecivil/user/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  env=environment;

  constructor(public http:HttpClient) { 

  }


  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }


        addUser(user:User):Observable<any>{
          return this.http.post(`${this.env.api}/ApiTourist/user/addusser/`,user);
      }}
