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

  add(numvolet:any,acten:any,id:any):Observable<any>{
    const data:FormData=new FormData();
    data.append('acten', JSON.stringify(acten).slice(1,JSON.stringify(acten).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/acten/add/${numvolet}`,data);

  }

}
