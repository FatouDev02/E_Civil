import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';



const AUTH_API = 'http://localhost:8080/ecivil/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(nom:string,prenom:string,genre:string,role:string[],username: string, email: string, password: string,tel:string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        "nom":nom,
        "prenom":prenom,
        "genre":genre,
        "role":role,
        "username":username,
        "email":email,
        "password":password,
        "tel":tel,
      },
      httpOptions
    );
  }
  logout():Observable<any>{
    // return this.http.post(
    //   AUTH_API + 'logout',{},httpOptions
    //   );
    const req = new HttpRequest('POST', AUTH_API + 'signout', {}, httpOptions);
return this.http.request(req);
  }
  refreshToken() {
    return this.http.post(AUTH_API + 'refreshtoken', { }, httpOptions);
  }


}
