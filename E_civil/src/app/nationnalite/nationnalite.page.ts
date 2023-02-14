import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActenService } from '../Services/acten.service';
import { StorageService } from '../Services/storage.service';
import { StructService } from '../Services/struct.service';

@Component({
  selector: 'app-nationnalite',
  templateUrl: './nationnalite.page.html',
  styleUrls: ['./nationnalite.page.scss'],
})
export class NationnalitePage implements OnInit {
  iduser:any
  id:any
  a:any
  message:any
  erreur!: boolean;
  fichier:any
  imgacten:any
  nom: any;
  prenom: any;
  photoacten: any;
  lieuderesidence: any;
  mydata: any;
  constructor( private router:Router,private actenservice:ActenService,
    private route:ActivatedRoute,
    private storageService:StorageService,
    private structservice:StructService
    ) { }

  ngOnInit() {
    const idstruct = this.route.snapshot.params['id']
    this.id = idstruct
    
    console.log("id de la structure : " + idstruct)
    if (this.storageService.isLoggedIn()) {
     // this.isLoggedIn = true;
      this.iduser = this.storageService.getUser().id;
      console.log('user id'+this.iduser);
    }

  }
  selectFile(e:any){
    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.message="Vous devez choisir un fichier  !";
      this.erreur=true;
      return;
    }

    //verification du type de fichier choisi pour recaler si ce n'est pas une photo
    var typeFichier=e.target.files[0].type;
    if(e.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.message="";
        //this.fichier=event.target.result;
        this.fichier=e.target['files'][0];
      }
    }
  }
  add() {

    var nationnalite = [{
      'nom': this.nom,
      'prenom': this.prenom,
      'photoacten': this.photoacten,
      'lieuderesidence': this.lieuderesidence,
    }]
    const data = new FormData()
    data.append('file', this.fichier)
    data.append('nationnalite', JSON.stringify(nationnalite).slice(1, JSON.stringify(nationnalite).lastIndexOf(']')))
    this.actenservice.addnationn(this.id,this.iduser,nationnalite,this.lieuderesidence,this.fichier).subscribe(data => {
      this.mydata = data
      console.log(this.mydata)
    });
  }
}
