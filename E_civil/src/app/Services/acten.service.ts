import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActenService {
env=environment
  constructor(private http:HttpClient) { }

  getall():Observable<any>{
    return this.http.get(`${this.env.api}/Ecivil/acten/list`);
  }
  getbyid(id:number):Observable<any>{
    return this.http.get(`${this.env.api}/Ecivil/acten/get/${id}`);
  }

  addacten(numvolet:any,acten:any,id:any,iduser:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('acten', JSON.stringify(acten).slice(1,JSON.stringify(acten).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/acten/add/${numvolet}/${id}/${iduser}`,data);

  }
  addactem(actem:any,id:any,iduser:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('actem', JSON.stringify(actem).slice(1,JSON.stringify(actem).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/actem/add/${id}/${iduser}`,data);

  }
   addacted(numvolet:any,acted:any,id:any,iduser:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('acted', JSON.stringify(acted).slice(1,JSON.stringify(acted).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/acted/add/${numvolet}/${id}/${iduser}`,data);

  } 
  addcasier(lieudenaissance:any,casier:any,id:any,iduser:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('casier', JSON.stringify(casier).slice(1,JSON.stringify(casier).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/casier/add/${id}/${iduser}`,data);

  }
   addresidence(lieuresidence:any,residence:any,id:any,iduser:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('residence', JSON.stringify(residence).slice(1,JSON.stringify(residence).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/residence/add/${lieuresidence}/${id}/${iduser}`,data);

  } 
  addnationn(lieuresidence:any,nationnalite:any,id:any,iduser:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('nationnalite', JSON.stringify(nationnalite).slice(1,JSON.stringify(nationnalite).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/nationnalite/add/${lieuresidence}/${id}/${iduser}`,data);

  }

}
