import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private router:Router,private storageService: StorageService) { }

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  //http://localhost:8080/ApiTourist/user/login',
onSubmit(): void {
  const { username, password } = this.form;

  this.authService.login(username, password).subscribe({
    next: data => {
      this.storageService.saveUser(data);
      
      // if(this.roles[0]==){

      // }
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      console.log("hjkl"+this.roles[0]);
      if(this.roles[0]=="USER"){
        this.router.navigate(['/dash/accueil'])
      }else if(this.roles[0]=="Agent"){
        this.router.navigate(['/dash/accueilagent'])
      }

    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }

  });
}

reloadPage(): void {
  window.location.reload();
}


}
