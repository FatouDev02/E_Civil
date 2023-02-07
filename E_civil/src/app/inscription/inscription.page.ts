import { Component, OnInit } from '@angular/core';
import { AnyNaptrRecord } from 'dns';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  lieuderesidence:any 
  nom:any
  prenom:any
  password:any
  username:any
  genre:any
  email:any


 
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  // onSubmit(): void {
  //   const { username, email, password } = this.form;

  //   this.authService.register(username, email, password).subscribe({
  //     next: data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   });
  // }

}
