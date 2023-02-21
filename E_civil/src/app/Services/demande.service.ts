import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  env=environment

  constructor(private http:HttpClient) { }













  
  Getdem():Observable<any>{
    const data:FormData=new FormData();
    
    return this.http.get(`${this.env.api}/ecivil/acten/listdemande`);
  }
  Getacten(id:any):Observable<any>{
    
    return this.http.get(`${this.env.api}/ecivil/acten/list/${id}`);
  }
  Getactem(id:any):Observable<any>{
    
    return this.http.get(`${this.env.api}/ecivil/actem/list/${id}`);
  }
   Getacted(id:any):Observable<any>{
    
    return this.http.get(`${this.env.api}/ecivil/acted/list/${id}`);
  } Getcasier(id:any):Observable<any>{
    
    return this.http.get(`${this.env.api}/ecivil/casier/list/${id}`);
  } Getresidence(id:any):Observable<any>{
    
    return this.http.get(`${this.env.api}/ecivil/residence/list/${id}`);
  } Getnation(id:any):Observable<any>{
    
    return this.http.get(`${this.env.api}/ecivil/nationnalite/list/${id}`);
  }
}
