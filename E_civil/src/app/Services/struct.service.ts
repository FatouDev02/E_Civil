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
  getallstruct():Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/list`);
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
  getstructbyid(id:number){
    return this.http.get(`${this.env.api}/ecivil/struct/getstruct/${id}`)

  }
  // getuserbyid(id:number){
  //   return this.http.get(`${this.env.api}/ecivil/user/getbyid/${id}`)

  // }
  valideragent(id:number){
    return this.http.post(`${this.env.api}/ecivil/user/valideragent/${id}`,null)

  }
  deltructbyid(id:number):Observable<any>{
    return this.http.delete(`${this.env.api}/ecivil/struct/delete/${id}`)
  }

  getuser():Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/user/list`)
  }
  
  getagent():Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/user/listagent`)
  }
 
 

  getdemandebytypestruct(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/listdemandetypestruc/${id}`)

  }
  getactenbyid(id:any){
    return this.http.get(`${this.env.api}/ecivil/acten/getacte/${id}`)

  }
  getactembyid(id:any){
    return this.http.get(`${this.env.api}/ecivil/actem/getacte/${id}`)

  } 
  getactedbyid(id:any){
    return this.http.get(`${this.env.api}/ecivil/acted/getacte/${id}`)

  } 
  getcasbyid(id:any){
    return this.http.get(`${this.env.api}/ecivil/casier/getacte/${id}`)

  } 
  getresbyid(id:any){
    return this.http.get(`${this.env.api}/ecivil/residence/getacte/${id}`)

  } 
  getnatbyid(id:any){
    return this.http.get(`${this.env.api}/ecivil/nationnalite/getacte/${id}`)

  } 
  envoidem(iduser:any,id:any){
    const data:FormData=new FormData();
   // data.append('structt', JSON.stringify(structt).slice(1,JSON.stringify(structt).lastIndexOf(']')));
    

    return this.http.post(`${this.env.api}/ecivil/user/demande/${iduser}/${id}`,data)
    
  }
  getagentbyid(id:any): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/getagent/${id}`)

  }
  
  getuserbyid(id:any): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/getuser/${id}`)

  }
  add(structt:any): Observable<any>{
    const data:FormData=new FormData();
    data.append('structt', JSON.stringify(structt).slice(1,JSON.stringify(structt).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/struct/add`,data)


  }
  addstruct(id:any,structt2:any): Observable<any>{
    const data:FormData=new FormData();
    data.append('structt2', JSON.stringify(structt2).slice(1,JSON.stringify(structt2).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/ecivil/struct/add/${id}`,data)
  }
  updatestruct(id:any,struct:any): Observable<any>{
    const data:FormData=new FormData();
    data.append('struct', JSON.stringify(struct).slice(1,JSON.stringify(struct).lastIndexOf(']')));
    return this.http.put(`${this.env.api}/ecivil/struct/update/${id}`,data)
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
  getcasbyidstruct(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/casier/listcasierbystruct/${id}`)
  } 
   getresbyidstruct(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/residence/listresbystruct/${id}`)
  } 
   getnatbyidstruct(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/nationnalite/listnatbystruct/${id}`)
  }

  getrdvdujour(id:number,nbre:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/rdv/${id}/${nbre}`)
  }
  getrdvactem(id:number,nbre:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/rdvactem/${id}/${nbre}`)
  } 
  getrdvacted(id:number,nbre:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/rdvacted/${id}/${nbre}`)
  } 
  getrdvcas(id:number,nbre:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/rdvcas/${id}/${nbre}`)
  }
   getrdvdunat(id:number,nbre:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/rdvres/${id}/${nbre}`)
  } 
  getrdvres(id:number,nbre:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/struct/rdvnat/${id}/${nbre}`)
  }






  validerdem(id:number): Observable<any>{
    return this.http.post(`${this.env.api}/ecivil/acten/validation/${id}`,null)
  }
  valideractem(id:number): Observable<any>{
    return this.http.post(`${this.env.api}/ecivil/actem/validationactem/${id}`,null)
  }
   valideracted(id:number): Observable<any>{
    return this.http.post(`${this.env.api}/ecivil/acted/validationacted/${id}`,null)
  }
   validercas(id:number): Observable<any>{
    return this.http.post(`${this.env.api}/ecivil/casier/validation/${id}`,null)
  }
   validerres(id:number): Observable<any>{
    return this.http.post(`${this.env.api}/ecivil/residence/validation/${id}`,null)
  }
   validernat(id:number): Observable<any>{
    return this.http.post(`${this.env.api}/ecivil/nationnalite/validation/${id}`,null)
  }

  getacten(id:number): Observable<any>{
    return this.http.post(`${this.env.api}/ecivil/struct/rdv/${id}`,null)
  }
  countacten(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/acten/count/${id}`)
  }
  countactem(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/actem/count/${id}`)
  } countacted(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/acted/count/${id}`)
  } countacas(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/casier/count/${id}`)
  } countres(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/residence/count/${id}`)
  } countnat(id:number): Observable<any>{
    return this.http.get(`${this.env.api}/ecivil/nationnalite/count/${id}`)
  }

}
