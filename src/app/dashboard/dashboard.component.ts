import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllHomes } from '../AllHomes.model';
import { DataService } from '../services/data.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    homeList : AllHomes[] = [];
  id: string = '';
  homeName: string = '';
  homeDesc: string = '';
  homePrice: string = '';
  homeRooms: string = '';
  homeMeters: string = '';
  homeType: string = '';
  homeColor: string = '';
  homeLocation: string = '';
  homeImage: string = '';

  constructor(private auth: AuthService, private data: DataService, private router: Router){}

  ngOnInit(): void {
       this.data.getAllHomes().subscribe(res=>{
      this.homeList = res.map((e: any)=>{
        const data = e.payload.doc.data()
        data.id = e.payload.doc.id;
        return data
      })
    }, err=> {alert("İlanlar yüklenirken hata oluştu.")})
  }

  getAllHomes(){
    this.data.getAllHomes().subscribe(res=>{
      this.homeList = res.map((e: any)=>{
        const data = e.payload.doc.data()
        data.id = e.payload.doc.id;
        return data
      })
    }, err=> {alert("İlanlar yüklenirken hata oluştu.")})
  }
    exitAccount(){
    localStorage.clear();
    this.router.navigate(['home'])
  }
  
}
