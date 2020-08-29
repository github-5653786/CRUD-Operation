import { Router } from '@angular/router';
import { HttpServiceService } from './../http-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  UserData: any[] = [];
  forms: boolean;
  ids: any;
  names: any;
  ages: any;
  constructor(private service: HttpServiceService, private router: Router) { }

  ngOnInit() {
    this.UserData = this.service.getUser();
  }

  ShowForm() {
    this.forms = !this.forms;
  }

  // DeleteUser(id) {
  //   for (let i = 0; i < this.UserData.length; i++) {
  //     if (this.UserData[i].id == id) {
  //       this.UserData.splice(i, 1);
  //     }
  //   }
  // }
  
  DeleteUser(id) {
    this.service.DeleteUser(id);
  }


  onSubmit(val) {
    this.service.AddUser(val);
    this.forms = false;
    this.ids = '';
    this.names = '';
    this.ages = '';
  }
}
