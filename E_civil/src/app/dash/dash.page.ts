import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }



  FermerSideBar(){
    this.menu.close()
    setTimeout(() => {
      window.location.reload()
    }, 0);
  }
  
  logout(): void {
    // this.authService.logout().subscribe({
    //   next: res => {
    //     console.log(res);
    //     this.storageService.clean();

    //     window.location.reload();
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });
  }
}
