import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addstructure',
  templateUrl: './addstructure.page.html',
  styleUrls: ['./addstructure.page.scss'],
})
export class AddstructurePage implements OnInit {
  titre: any;
  longitude: any;
  latitude: any;
  a: any;

  constructor(private router:Router) { }

  ngOnInit() {
  }
 //Pop up enregistrement reussi
  MessageSuccess(){
    Swal.fire({
      title: "Structure creer avec  succes",
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#FF7900',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/strucuture', {skipLocationChange: true}).then(() => {
          this.router.navigate(["/strucuture"])
        })

          // this.actualisePagApresSuppresion()
          // this.router.navigateByUrl('/dashboard/personnel-externe')
          // window.location.reload();
    }else if (result.isDenied) {
      this.router.navigateByUrl('/acten')
    }

  });

  }


  // addpays(){ 
  //   var structure=[{
  //     'titre':this.titre,
  //     'longitude':this.longitude,
  //     'latitude':this.latitude,
      
  //   }]
  //   const data=new FormData()
  // // data.append('file',this.fichier)

  //   data.append('structure',JSON.stringify(structure).slice(1,JSON.stringify(structure).lastIndexOf(']')))
  //   this.http.post('http://localhost:8080/Ecivil/structure/add',data).subscribe(
  //     (data)=>{
  //      //this.myform.reset()
  //      this.a=data
  //       console.log(this.a)
  //       this.MessageSuccess();
  //      // this.router.navigate(['/pays'])
  //     }
  //   );
  //  }
}
