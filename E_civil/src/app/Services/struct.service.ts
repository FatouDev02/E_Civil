import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StructService {

  env=environment
  constructor(private http:HttpClient) { }

  getall():Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/listtype`);
  }
  getstructbytype(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/liststructbytype/${id}`)
  }
  getstructbyagent(id:number,iduser:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/liststructbytypebyagent/${id}/${iduser}`)
  }


  gettypestructbyid(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/gettype/${id}`)
  }
 

  getdemandebytypestruct(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/listdemandetypestruc/${id}`)

  }
  getactenbyid(id:any){
    return this.http.get(`${this.env.api}/ecivil/acten/getacte/${id}`)

  }
  envoidem(iduser:any,id:any){
    const data:FormData=new FormData();
   // data.append('structt', JSON.stringify(structt).slice(1,JSON.stringify(structt).lastIndexOf(']')));
    

    return this.http.post(`${this.env.api}/ecivil/user/demande/${iduser}/${id}`,data)

  }
  add(structt:any): Observable<any>{
    const data:FormData=new FormData();

    data.append('structt', JSON.stringify(structt).slice(1,JSON.stringify(structt).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/struct/add`,data)


  }
  
  getstructbyidagent(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/getbyagent/${id}`)

  }

  getactenbyidstruct(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/acten/listactenbystruct/${id}`)
  }
  getactembyidstruct(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/actem/listactembystruct/${id}`)
  }
  getactedbyidstruct(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/acted/listactedbystruct/${id}`)
  }
  
}
