import { Component, OnInit } from '@angular/core';
import { StructService } from '../Services/struct.service';

@Component({
  selector: 'app-strucutures',
  templateUrl: './strucutures.page.html',
  styleUrls: ['./strucutures.page.scss'],
})
export class StrucuturesPage implements OnInit {
  struct: any;

  constructor(private structservice:StructService) { }

  ngOnInit() {
    this.ListStruct();
  }

  ListStruct(){
    this.structservice.getall().subscribe(
      (data)=>{
          this.struct=data
          console.log(this.struct)
      }
    );
  }
  
}
