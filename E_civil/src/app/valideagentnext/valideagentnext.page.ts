import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StructService } from '../Services/struct.service';

@Component({
  selector: 'app-valideagentnext',
  templateUrl: './valideagentnext.page.html',
  styleUrls: ['./valideagentnext.page.scss'],
})
export class ValideagentnextPage implements OnInit {
id:any
  allstruct: any;
  dem: Object;
  iduse: any;
  mmm:any
  constructor(private route:ActivatedRoute, private router:Router,
    private structservice:StructService) { }

  ngOnInit() {
    const idstruct = this.route.snapshot.params['id']
    this.id = idstruct
    console.log(idstruct)

    this.structservice.getstructbytype(idstruct).subscribe(data =>{
      this.allstruct=data;

      //this.long=data.longitude
      console.log(this.allstruct);

      
    })
    const iduser =this.route.snapshot.params['iduser']
    this.iduse=iduser
    console.log(iduser)

    this.structservice.getstructbyagent(idstruct,iduser).subscribe(
      data =>{
        this.mmm=data;
  
        //this.long=data.longitude
        console.log(this.mmm);
  
        
      }
    )
  }
  alert(){
   

  }
  envoyerdemvalidation(){
    this.structservice.envoidem(this.iduse,this.id).subscribe(data =>{
      this.dem=data
      console.log(this.dem)
    })
    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Votre demande a été prise en compte veuillez \n patientez avant la validation du compte',
    //   showConfirmButton: false,
    //   //timer: 1500,
    //   heightAuto:false
    // })
    Swal.fire({
      title: "Votre demande a été prise en compte veuillez \n patientez avant la validation du compte",
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#ABDE11',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/dash/inscription').then(() => {
          this.router.navigate(["/dash/inscription"])
        })

          // this.actualisePagApresSuppresion()
          // this.router.navigateByUrl('/dashboard/personnel-externe')
          // window.location.reload();
    }
  });
 
  }

}
