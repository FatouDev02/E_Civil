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

  addacten(acten:any,id:any,iduser:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('acten', JSON.stringify(acten).slice(1,JSON.stringify(acten).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/acten/add/${id}/${iduser}`,data);
 
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
  addcasier(id:any,iduser:any,casier:any,lieudenaissance:any,file:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('file',file)
    data.append('casier', JSON.stringify(casier).slice(1,JSON.stringify(casier).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/casier/add/${id}/${iduser}/${lieudenaissance}`,data);

  }
  addnationn(id:any,iduser:any,nationnalite:any,lieuderesidence:any,file:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('file',file)
    data.append('nationnalite', JSON.stringify(nationnalite).slice(1,JSON.stringify(nationnalite).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/nationnalite/add/${id}/${iduser}/${lieuderesidence}`,data);

  }
   addresidence(id:any,iduser:any,residence:any,lieuderesidence:any,file:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('file',file)
    data.append('residence', JSON.stringify(residence).slice(1,JSON.stringify(residence).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/residence/add/${id}/${iduser}/${lieuderesidence}`,data);

  } 


}
