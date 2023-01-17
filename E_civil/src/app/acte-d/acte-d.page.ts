import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  constructor(private router:Router) { }

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


// addacted(){ 
//   var acted=[{
//     'nom':this.nom,
//     'prenom':this.prenom,
//     'daten':this.daten,
//     'dated':this.dated,
//     'profession':this.profession,
//     'numvolet':this.numvolet,
//     'lieunaiss':this.lieudenaissance,
//     'lieudeces':this.lieudeces,
//   }]
//   const data=new FormData()

//   data.append('acted',JSON.stringify(acted).slice(1,JSON.stringify(acted).lastIndexOf(']')))
//   this.http.post('http://localhost:8080/Ecivil/acted/add',data).subscribe(
//     (data)=>{
//      //this.myform.reset()
//      this.a=data
//       console.log(this.a)
//       this.MessageSuccess();
//      // this.router.navigate(['/act'])
//     }
//   );
//  }


}
