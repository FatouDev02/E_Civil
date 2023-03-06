import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  id: any;
  username: any;
  nom: any;
  prenom: any;
  roles: any;

  constructor( private storageService:StorageService) { }

  ngOnInit() {
    const user=this.storageService.getUser();
    this.id=user.id
    console.log(this.id)
    this.username=user.username
    console.log(this.username)
    this.nom=user.nom
    this.prenom=user.prenom
    this.roles = user.roles;
  }

}
