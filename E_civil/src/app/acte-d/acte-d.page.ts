import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActenService } from '../Services/acten.service';
import { StorageService } from '../Services/storage.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-acte-d',
  templateUrl: './acte-d.page.html',
  styleUrls: ['./acte-d.page.scss'],
})
export class ActeDPage implements OnInit {
  nom:any
  prenom:any
  daten:any
  dated:any
  profession:any
  lieudenaissance:any
  lieudeces:any
  numvolet:any
  iduser:any
  id:any
  a:any
  constructor(private router:Router,
    private actenservice:ActenService,
    private storageService:StorageService,
    private loadingCtrl: LoadingController,
    private route:ActivatedRoute) { }

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
    this.router.navigateByUrl('/dash/acted')
  }

});


}
async showLoading(){
  const loading = await this.loadingCtrl.create({
    message: 'Loading...',
    duration: 3000,
    cssClass: 'custom-loading',
  });

  loading.present();
}

addacted(){ 
  var acted=[{
    'nom':this.nom,
    'prenom':this.prenom,
    'daten':this.daten,
    'dated':this.dated,
    'profession':this.profession,
    'numvolet':this.numvolet,
    'lieunaiss':this.lieudenaissance,
    'lieudeces':this.lieudeces,
  }]
  const data=new FormData()

  data.append('acted',JSON.stringify(acted).slice(1,JSON.stringify(acted).lastIndexOf(']')))
  this.actenservice.addacted(this.numvolet,acted,this.id,this.iduser).subscribe(
    (data)=>{
     //this.myform.reset()
     this.a=data
      console.log(this.a)
      this.showLoading
      this.MessageSuccess();
      this.router.navigate(['/dash/accueil'])
    }
  );
 }


}
