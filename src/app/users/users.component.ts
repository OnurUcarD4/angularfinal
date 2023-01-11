import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Users } from '../users.model.';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private router: Router, private data:DataService){}

  userList: Users[] = [];
  id: string = '';
  mail: string = '';

  ngOnInit(): void {
       this.data.getAllUsers().subscribe(res=>{
      this.userList = res.map((e: any)=>{
        const data = e.payload.doc.data()
        data.id = e.payload.doc.id;
        return data
      })
    }, err=> {alert("Kullanıcılar yüklenirken hata oluştu.")})

  }
   exitAccount(){
    localStorage.clear();
    this.router.navigate(['home'])
  }


}
