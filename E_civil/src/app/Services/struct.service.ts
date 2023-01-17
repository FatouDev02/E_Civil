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
  
}
