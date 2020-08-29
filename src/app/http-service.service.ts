import { User } from './UserData.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  users: User[] = [{ id: 1, name: "Mustafa", age: 21 }, { id: 2, name: "Yuvaraj", age: 20 }, { id: 3, name: "Selva", age: 25 }, { id: 4, name: "Rakshit", age: 23 }, { id: 5, name: "Kabali", age: 32 }];

  constructor() { }

  getUser() {
    return this.users;
  }

  AddUser(data) {
    let len = this.users.length; 4 > 3
    if (data.id > len) {
      return this.users.push(data)
    } else {
      alert("This ID Exists, Please enter another.")
    }
  }

  DeleteUser(id) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        this.users.splice(i, 1)
      }
    }
  }

  GetUserById(id) {
    return this.users.find(x => {
      return x.id == id
    })
  }

  UpdateUser(val) {
    if (confirm("Are you sure want to update values ?")) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == val.id) {
          this.users[i].id = val.id;
          this.users[i].name = val.name;
          this.users[i].age = val.age;
        }
      }
    }
  }
}
