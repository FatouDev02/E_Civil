import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { ActenService } from '../Services/acten.service';
import { StructService } from '../Services/struct.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-acten',
  templateUrl: './acten.page.html',
  styleUrls: ['./acten.page.scss'],
})
export class ActenPage implements OnInit {
  nom: any;
  prenom: any;
  nompere: any;
  nommere: any;
  profpere: any;
  profmere: any;
  numvolet: any;
  datedenaissance: any;
  lieudenaissance: any;
  genre:any;
  a: any;
  idstruct:any
  id:any
  isLoggedIn = false;
  iduser:any

  constructor( private router:Router,private actenservice:ActenService,
    private route:ActivatedRoute,
    private storageService:StorageService,
    private structservice:StructService) { }

  ngOnInit() {
    const idstruct = this.route.snapshot.params['id']
    this.id = idstruct
    console.log("id de la structure : " + idstruct)
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.iduser = this.storageService.getUser().id;
      console.log('user id'+this.iduser);
    }

  }
          //Pop up enregistrement reussi
          MessageSuccess(){
            Swal.fire({
              title: "Votre déclaration a été envoyé avec  succès",
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
              this.router.navigateByUrl('/dash/acten')
            }
          });

          }


          addacten(){ 
            var acten=[{
              'nom':this.nom,
              'prenom':this.prenom,
              'nompere':this.nompere,
              'nommere':this.nommere,
              'profpere':this.profpere,
              'profmere':this.profmere,
              'genre':this.genre,
              // 'numvolet':this.numvolet,
              'datedenaissance':this.datedenaissance,
              'lieudenaissance':this.lieudenaissance,
            }]
            const data=new FormData()
           // data.append('file',this.fichier)
            
            data.append('acten',JSON.stringify(acten).slice(1,JSON.stringify(acten).lastIndexOf(']')))
            this.actenservice.addacten(this.numvolet,acten,this.id,this.iduser).subscribe(
              (data)=>{
               //this.myform.reset()
               this.a=data
                console.log(this.a)
                this.MessageSuccess();

               //this.router.navigate(['/dash/structures'])
              }
            );
           }
  
           
}
