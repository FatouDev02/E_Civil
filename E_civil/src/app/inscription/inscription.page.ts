import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyNaptrRecord } from 'dns';
import Swal from 'sweetalert2';
import { AuthService } from '../Services/auth.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
 

  roles:any
  form: any = {
    nom:null,
    prenom:null,
    genre:null,
    role:[],
    username:null,
    email:null,
    password:null,
    
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  isLoggedIn = false;
  isLoginFailed = false;
  //roles: string[] = [];
  message: any;

 
  constructor(private authService:AuthService, private storageService:StorageService,
    private route: Router) { }

  ngOnInit() {
  }
  rolegestion(){
    
  }
  onSubmit(): void {
    const { nom,prenom,genre,username, email, password ,tel} = this.form;

    alert(this.form.role);

    // if(this.form.role.includes("agent")){
    //   this.form.role.push("agent")
    // }
    this.form.role.push(this.roles)
    console.log(this.form)

    this.authService.register(nom,prenom,genre,this.form.role,username, email, password,tel).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        //this.route.navigate(['/connexion'])
        Swal.fire({
          title: 'Votre inscription a été prise en compte \n Veuillez consulter votre email pour activer votre compte',
          width: 600,
          padding: '3em',
          color: '#000000',
          heightAuto: false,
          confirmButtonColor: '#ACBE11',
         // background: '#fff url(../../assets/images/logo.jpg)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
