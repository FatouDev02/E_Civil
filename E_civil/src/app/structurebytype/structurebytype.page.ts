import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StructService } from '../Services/struct.service';

@Component({
  selector: 'app-structurebytype',
  templateUrl: './structurebytype.page.html',
  styleUrls: ['./structurebytype.page.scss'],
})
export class StructurebytypePage implements OnInit {
id:any
allstruct:any
  constructor(private route:ActivatedRoute,private router:Router,private structservice:StructService) { }

  ngOnInit() {
    const idstruct = this.route.snapshot.params['id']
    this.id = idstruct
    console.log("id de la structure : " + idstruct)
    this.structservice.getstructbytype(idstruct).subscribe(data =>{
      this.allstruct=data;
      console.log(this.allstruct);
      
    })

  }


}
