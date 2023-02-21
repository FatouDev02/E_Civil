import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActenService } from '../Services/acten.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-actem',
  templateUrl: './actem.page.html',
  styleUrls: ['./actem.page.scss'],
})
export class ActemPage implements OnInit {
  datemariage:any
  temoinf:any
  temoinh:any
  datenf:any
  datenh:any
  prof:any
  proh:any
  nomf:any
  nomh:any
  ///////////////////
  id:any
  iduser:any
  a:any

  
  constructor(private router:Router,private actenservice:ActenService, 
       private route:ActivatedRoute,
       private storageService:StorageService
    ) { }

  ngOnInit() {
    const idstruct = this.route.snapshot.params['id']
    this.id = idstruct
    console.log("id de la structure : " + idstruct)
    if (this.storageService.isLoggedIn()) {
      //this.isLoggedIn = true;
      this.iduser = this.storageService.getUser().id;
      console.log('user id'+this.iduser);
    }
  }
 //Pop up enregistrement reussi
 MessageSuccess(){
  Swal.fire({
    title: "Votre déclaration a été envoyé avec  succes",
    showConfirmButton: true,
    confirmButtonText: "OK",
    confirmButtonColor: '#ABDE11',
    heightAuto: false
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigateByUrl('/dash/declarations', {skipLocationChange: true}).then(() => {
        this.router.navigate(["/dash/declarations"])
      })

        // this.actualisePagApresSuppresion()
        // this.router.navigateByUrl('/dashboard/personnel-externe')
        // window.location.reload();
  }else if (result.isDenied) {
    this.router.navigateByUrl('/dash/actem')
  }

});

}


addactem(){ 
  var actem=[{
    'nomh':this.nomh,
    'nomf':this.nomf,
    'proh':this.proh,
    'prof':this.prof,
    'temoinh':this.temoinh,
    'temoinf':this.temoinf,
    'datenh':this.datenh,
    'datenf':this.datenf,
    'datemariage':this.datemariage,
  }]
  const data=new FormData()

  data.append('actem',JSON.stringify(actem).slice(1,JSON.stringify(actem).lastIndexOf(']')))
  this.actenservice.addactem(actem,this.id,this.iduser).subscribe(
    (data)=>{
      //this.myform.reset()
      this.a=data
       console.log(this.a)
       this.MessageSuccess();
      // this.router.navigate(['/dash/accueil'])

      //this.router.navigate(['/dash/structures'])
     }
  );
 }
 


}
