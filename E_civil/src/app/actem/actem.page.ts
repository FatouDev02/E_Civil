import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  nomF:any
  nomh:any
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


// addactem(){ 
//   var actem=[{
//     'nomh':this.nomh,
//     'nomf':this.nomf,
//     'proh':this.proh,
//     'prof':this.prof,
//     'temoinh':this.temoinh,
//     'temoinf':this.temoinf,
//     'datenh':this.datenh,
//     'datenf':this.datenf,
//     'datemariage':this.datemariage,
//   }]
//   const data=new FormData()

//   data.append('actem',JSON.stringify(actem).slice(1,JSON.stringify(actem).lastIndexOf(']')))
//   this.http.post('http://localhost:8080/Ecivil/actem/add',data).subscribe(
//     (data)=>{
//      //this.myform.reset()
//      this.a=data
//       console.log(this.a)
//       this.MessageSuccess();
//      // this.router.navigate(['/dash/actem'])
//     }
//   );
//  }


}
