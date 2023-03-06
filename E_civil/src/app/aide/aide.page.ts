import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.page.html',
  styleUrls: ['./aide.page.scss'],
})
export class AidePage implements OnInit {
  id: any;
  roles: any;
  showAgent: any;

  constructor(private storageService:StorageService) { }

  ngOnInit() {
    const user=this.storageService.getUser();
    this.id=user.id
  
    this.roles = user.roles;
    this.showAgent= this.roles.includes('Agent');

  }

}
