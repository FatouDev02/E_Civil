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
  Getacten():Observable<any>{
    const data:FormData=new FormData();
    
    return this.http.get(`${this.env.api}/ecivil/acten/list`);
  }
  Getactem():Observable<any>{
    const data:FormData=new FormData();
    
    return this.http.get(`${this.env.api}/ecivil/actem/list`);
  }
   Getacted():Observable<any>{
    const data:FormData=new FormData();
    
    return this.http.get(`${this.env.api}/ecivil/acted/list`);
  } Getcasier():Observable<any>{
    const data:FormData=new FormData();
    
    return this.http.get(`${this.env.api}/ecivil/casier/list`);
  } Getresidence():Observable<any>{
    const data:FormData=new FormData();
    
    return this.http.get(`${this.env.api}/ecivil/residence/list`);
  } Getnation():Observable<any>{
    const data:FormData=new FormData();
    
    return this.http.get(`${this.env.api}/ecivil/nationnalite/list`);
  }
}
