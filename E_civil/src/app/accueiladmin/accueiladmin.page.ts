import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StorageService } from '../Services/storage.service';
import { StructService } from '../Services/struct.service';

@Component({
  selector: 'app-accueiladmin',
  templateUrl: './accueiladmin.page.html',
  styleUrls: ['./accueiladmin.page.scss'],
})
export class AccueiladminPage implements OnInit {
  etatv: any
  id: any;
  p: number = 1;
  username: any;
  nom: any;
  prenom: any;
  roles: any;
  monrole: any;
  messetruct: any;
  mastruct: any;
  longitude: any;
  latitude: any;
  structupdated: any;
  longueur: any;
  userrrs: any;
  agents: any;
  longueuruser: any;
  longueuragent: any;
  statutagent: any;
  unagent: any;
  idagent: any;
  nomagent: any;
  numeroagent: any;
  nomdelastructagent: any;
  aaaa: any;
  agentstructnom: any;


  constructor(private storageService: StorageService, private structservice: StructService, private router: Router) { }

  ngOnInit() {
    const user = this.storageService.getUser();
    this.id = user.id
    //console.log(this.id)
    this.username = user.username
    // console.log(this.username)
    this.nom = user.nom
    this.prenom = user.prenom
    this.roles = user.roles;
    this.structservice.getallstruct().subscribe(data => {
      this.messetruct = data
      this.longueur = data.length
      console.log(this.messetruct)
    })

    this.structservice.getuser().subscribe(data => {
      this.userrrs = data
      this.longueuruser = data.length

      // console.log(this.userrrs)

    })
    this.structservice.getagent().subscribe(data => {
      this.agents = data
      this.longueuragent = this.agents.length


      console.log(this.agents)
      for (var i = 0; i <= this.longueuragent; i++) {

        this.statutagent = this.agents[i].statut
      //   if (this.statutagent == null) {
      //     this.etatv = "Agent non"
      //   }
      //   else {
      //     this.etatv = "Agent Valider"
      //   }
        console.log(this.statutagent)
       }

    })

  }

  OnClick(id: any) {
    this.structservice.getstructbyid(id).subscribe(d => {
      this.mastruct = d
      this.id = this.mastruct.id
      this.nom = this.mastruct.nom
      this.longitude = this.mastruct.longitude
      this.latitude = this.mastruct.latitude
      //  console.log(this.id)
    })

  }

  OnClickupdateagent(id: any) {
    this.structservice.getuserbyid(id).subscribe(d => {
      this.unagent = d
      this.idagent = this.unagent.id
      this.agentstructnom = this.unagent.structure.nom
      this.nomagent = this.unagent.nom + this.unagent.prenom
      /// this.numeroagent=this.mastruct.email
      //this.nomdelastructagent=this.mastruct.latitude

      // console.log(this.unagent)
    })

  }

  valideragent() {
    this.structservice.valideragent(this.idagent).subscribe(data => {
      this.aaaa = data
       console.log(this.aaaa)
       Swal.fire({
        title: "Agent Validé ",
        showConfirmButton: true,
        confirmButtonText: "OK",
        confirmButtonColor: '#ABDE11',
        heightAuto: false
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('/dash/accueiladmin', { skipLocationChange: true }).then(() => {
            this.router.navigate(["/dash/accueiladmin"])
          })
  
          // this.actualisePagApresSuppresion()
          // this.router.navigateByUrl('/dashboard/personnel-externe')
          // window.location.reload();
        } else if (result.isDenied) {
          this.router.navigateByUrl('/dash/accueiladmin')
        }
      });

    })
  }

  edit() {
    var struct = [{
      'nom': this.nom,
      'latitude': this.latitude,
      'longitude': this.longitude,

    }]
    const data = new FormData()
    data.append('struct', JSON.stringify(struct).slice(1, JSON.stringify(struct).lastIndexOf(']')))
    this.structservice.updatestruct(this.id, struct).subscribe(
      data => {
        this.structupdated = data
        // console.log(this.structupdated)

        this.MessageSuccess()

      }
    )

  }
  MessageSuccess() {
    Swal.fire({
      title: "Structure modifer  avec  succès",
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#ABDE11',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/dash/accueiladmin', { skipLocationChange: true }).then(() => {
          this.router.navigate(["/dash/accueiladmin"])
        })

        // this.actualisePagApresSuppresion()
        // this.router.navigateByUrl('/dashboard/personnel-externe')
        // window.location.reload();
      } else if (result.isDenied) {
        this.router.navigateByUrl('/dash/accueiladmin')
      }
    });

  }

  delete() {

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
        this.structservice.deltructbyid(this.id).subscribe(data => {
          // console.log("ok"+ data.message)
        })
        Swal.fire({
          text: 'Suppression effectuée!success',
          heightAuto: false,
          confirmButtonColor: '#ACBE11',


        })


      }
    })



  }
}
