import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StructService } from '../Services/struct.service';

@Component({
  selector: 'app-valideagent',
  templateUrl: './valideagent.page.html',
  styleUrls: ['./valideagent.page.scss'],
})
export class ValideagentPage implements OnInit {
  struct: any;
  id:any

  constructor(private structservice:StructService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    const iduser = this.route.snapshot.params['id']
    this.id = iduser

    this.ListStruct()
  }
  ListStruct(){
    this.structservice.getall().subscribe(
      (data)=>{
          this.struct=data

          console.log(this.struct)
      }
    );
  }
 
  onSubmit(){

  }
}
