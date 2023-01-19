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
type:any
allstruct:any
length:any
  constructor(private route:ActivatedRoute,private router:Router,private structservice:StructService) { }

  ngOnInit() {
    const idstruct = this.route.snapshot.params['id']
    this.id = idstruct

    const typestruct = this.route.snapshot.params['type']
    this.type = typestruct
  
    console.log("id de la structure : " + idstruct)
    this.structservice.getstructbytype(idstruct).subscribe(data =>{
      this.allstruct=data;
      this.length=this.allstruct.length
      console.log(this.length)
      console.log(this.allstruct);
      
    })
    // Listdembystruct(){

  //   this.structservice.getdemandebytypestruct().subscribe(
  //     (data)=>{
  //         this.struct=data
  //         console.log(this.struct)
  //     }
  //   );
  // }


  }


}
