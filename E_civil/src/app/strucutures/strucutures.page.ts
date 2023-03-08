import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { isDeepStrictEqual } from 'util';
import { StorageService } from '../Services/storage.service';
import { StructService } from '../Services/struct.service';

@Component({
  selector: 'app-strucutures',
  templateUrl: './strucutures.page.html',
  styleUrls: ['./strucutures.page.scss'],
})
export class StrucuturesPage implements OnInit {
  struct: any;
  type:any;
  description:any
  mystruct:any
  length:any
  dem:any

  idStructure:any=1;

  idstruct:any;
  id: any;
  roles: any;
  monrole: any;
  showAdmin: false;
  showuser: false;
  showagent: false;
  constructor(private structservice:StructService,
    private storageService: StorageService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.ListStruct();
    const user=this.storageService.getUser();
    this.id=user.id
   // console.log(this.id)
    this.roles = user.roles;
   // console.log(this.roles)
    this.showAdmin = this.roles.includes('ADMIN');
    this.showuser = this.roles.includes('USER');
    this.showagent = this.roles.includes('Agent');
  }

  /*Listdembystruct(){

    this.structservice.getall().subscribe(
      (data)=>{
          this.struct=data
          console.log(this.struct)
      }
    );
  }*/
  OnClick(id:any){
    //this.idstruct  = this.route.snapshot.params['id']
    console.log(id)
    this.idStructure=id
    this.structservice.getdemandebytypestruct(id).subscribe(
          (data)=>{
              this.dem=data
              
              console.log(this.dem)
          }
        );
  }
  

  ListStruct(){
    this.structservice.getall().subscribe(
      (data)=>{
          this.struct=data

         // console.log(this.struct)
      }
    );
  }
   //Pop up enregistrement reussi
   MessageSuccess(){
    Swal.fire({
      title: "Nouvelle Structure a été envoyé avec  succes",
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#ACBE11',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/dash/strucutures', {skipLocationChange: true}).then(() => {
          this.router.navigate(["/dash/strucutures"])
        })

          // this.actualisePagApresSuppresion()
          // this.router.navigateByUrl('/dashboard/personnel-externe')
          // window.location.reload();
    }else if (result.isDenied) {
      this.router.navigateByUrl('/dash/strucutures')
    }

   });

  }


  AddStruct(){
      var structt=[{
        'type':this.type,
        'description':this.description,
        
      }]
      const data=new FormData()
      data.append('structt',JSON.stringify(structt).slice(1,JSON.stringify(structt).lastIndexOf(']')))
    this.structservice.add(structt).subscribe(
      (data)=>{
          this.mystruct=data
          this.length=this.mystruct.length
         // console.log(this.length)
          //console.log(this.mystruct)
          this.MessageSuccess();
         // this.router.navigate(['/dash/strucutures'])

      }
    );
  
  }

  
}
