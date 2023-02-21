import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { StorageService } from '../Services/storage.service';
import { StructService } from '../Services/struct.service';

@Component({
  selector: 'app-accueiladmin',
  templateUrl: './accueiladmin.page.html',
  styleUrls: ['./accueiladmin.page.scss'],
})
export class AccueiladminPage implements OnInit {
  id: any;
  username: any;
  nom: any;
  prenom: any;
  roles: any;
  monrole: any;
  messetruct: any;
  mastruct:any;
  longitude:any;
  latitude:any;
  structupdated: any;
  longueur: any;
  userrrs: any;
  agents: any;
  longueuruser: any;
  longueuragent: any;


  constructor(private storageService: StorageService,private structservice:StructService) { }

  ngOnInit() {
    const user=this.storageService.getUser();
    this.id=user.id
    console.log(this.id)
    this.username=user.username
    console.log(this.username)
    this.nom=user.nom
    this.prenom=user.prenom
    this.roles = user.roles;
   this.structservice.getall().subscribe(data=>{
    this.messetruct=data
    this.longueur=data.length
    console.log(this.longueur)
   })

   this.structservice.getuser().subscribe(data=>{
    this.userrrs=data
    this.longueuruser=data.length

    console.log(this.userrrs)

    })
    this.structservice.getagent().subscribe(data=>{
      this.agents=data
      this.longueuragent=data.length

      console.log(this.agents)

      })

  }
  OnClick(id:any){
this.structservice.getstructbyid(id).subscribe(d=>{
  this.mastruct=d
  this.id=this.mastruct.id
  this.nom=this.mastruct.nom
  this.longitude=this.mastruct.longitude
  this.latitude=this.mastruct.latitude
  console.log(this.id)
})

  }
edit(){
  var struct=[{
    'nom':this.nom,
    'latitude':this.latitude,
    'longitude':this.longitude,
    
  }]
  const data=new FormData()
  data.append('struct',JSON.stringify(struct).slice(1,JSON.stringify(struct).lastIndexOf(']')))
this.structservice.updatestruct(this.id,struct).subscribe(
  data=>{
      this.structupdated=data
      console.log(this.structupdated)
     
     // this.router.navigate(['/dash/strucutures'])

  }
)

}

delete(){

  Swal.fire({
    title: 'Voulez vraiment supprimé cette structure?',
    text: "Elle sera supprimée avec toutes ses données ",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ACBE11',
    cancelButtonColor: '#ACBE11',
    confirmButtonText: 'Oui !',
    heightAuto: false

  }).then((result) => {
    if (result.isConfirmed) {
      this.structservice.deltructbyid(this.id).subscribe(data=>{
       // console.log("ok"+ data.message)
      })
      Swal.fire({
        text: 'Suppression effectuée!success' ,
        heightAuto: false,
        confirmButtonColor: '#ACBE11',


      } )


    }
  })



}
}
