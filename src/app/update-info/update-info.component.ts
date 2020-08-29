import { HttpServiceService } from './../http-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
  ids: any;
  names: any;
  ages: any;
  user: any[] = [];

  constructor(private service: HttpServiceService, private rou: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let i = this.rou.snapshot.paramMap.get('id');
    this.user.push(this.service.GetUserById(i));
    for (let i = 0; i < this.user.length; i++) {
      this.ids = this.user[i].id;
      this.names = this.user[i].name;
      this.ages = this.user[i].age;
    }
  }

  onSubmit(val) {
    this.service.UpdateUser(val);
    this.router.navigate(['/user']);
  }
}
