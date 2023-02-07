import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage.service';
import { StructService } from '../Services/struct.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  id: any;
  username: any;
  nom: any;
  prenom: any;
  structid: any;

  constructor(private storageService: StorageService,private structservice:StructService) { }

  ngOnInit() {
    const user=this.storageService.getUser();
    this.id=user.id
    console.log(this.id)
    this.username=user.username
    console.log(this.username)
    this.nom=user.nom
    this.prenom=user.prenom
  }

}
