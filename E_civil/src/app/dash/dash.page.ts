import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { StorageService } from '../Services/storage.service';
import { EventBusService } from '../_shared/event-bus.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit {
  img="../assets/avatar.png"
  Utilisateur:any;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showuserBoard = false;
  showagentBoard = false;

  username?: string;

  eventBusSub?: Subscription;
  nom: any;
  prenom: any;

  constructor(private router:Router,
    private menu: MenuController,
    private storageService: StorageService, 
    private authService: AuthService,
    private eventBusService: EventBusService,
    ) { }
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.nom=user.nom
      this.prenom=user.prenom
      console.log(this.nom)
      console.log(this.prenom)

      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ADMIN');
      this.showuserBoard = this.roles.includes('USER');
      this.showagentBoard = this.roles.includes('Agent');

      this.username = user.username;
    }
    //////////////////************* refreshhhhhhhhh */

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });

  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.router.navigateByUrl("/connexion")

       // window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
 
  FermerSideBar(){
    this.menu.close()
   
  }
  
  closeMenu() {
    this.menu.close();
    console.log("errerrrrrr");
  }


  deconnecter(){
    localStorage.clear()
    this.router.navigate(['../connexion'])
  }

}
