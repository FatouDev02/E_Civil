import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { ActenService } from '../Services/acten.service';

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
  a: any;

  constructor( private router:Router,private actenservice:ActenService) { }

  ngOnInit() {
  }
          //Pop up enregistrement reussi
          MessageSuccess(){
            Swal.fire({
              title: "Votre déclaration a été envoyé avec  succes",
              showConfirmButton: true,
              confirmButtonText: "OK",
              confirmButtonColor: '#FF7900',
              heightAuto: false
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigateByUrl('/declarations', {skipLocationChange: true}).then(() => {
                  this.router.navigate(["/declarations"])
                })

                  // this.actualisePagApresSuppresion()
                  // this.router.navigateByUrl('/dashboard/personnel-externe')
                  // window.location.reload();
            }else if (result.isDenied) {
              this.router.navigateByUrl('/acten')
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
              // 'numvolet':this.numvolet,
              'datedenaissance':this.datedenaissance,
              'lieudenaissance':this.lieudenaissance,
            }]
            const data=new FormData()
          // data.append('file',this.fichier)
        
            data.append('acten',JSON.stringify(acten).slice(1,JSON.stringify(acten).lastIndexOf(']')))
            this.actenservice.add(this.numvolet,acten).subscribe(
              (data)=>{
               //this.myform.reset()
               this.a=data
                console.log(this.a)
                this.MessageSuccess();
               // this.router.navigate(['/pays'])
              }
            );
           }
  
}
