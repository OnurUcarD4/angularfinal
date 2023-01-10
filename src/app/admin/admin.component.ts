import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllHomes } from '../AllHomes.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private data: DataService){}

  
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


  ngOnInit(): void {
       this.data.getAllHomes().subscribe(res=>{
      this.homeList = res.map((e: any)=>{
        const data = e.payload.doc.data()
        data.id = e.payload.doc.id;
        return data
      })
    }, err=> {alert("İlanlar yüklenirken hata oluştu.")})
  }
  deleteHome(home: AllHomes){
    if(window.confirm((home.homeName + ' ' + 'adlı ilanı silmek istediğinize emin misiniz?'))){
    this.data.deleteHome(home)
    }
  }
    exitAccount(){
    localStorage.clear();
    this.router.navigate(['home'])
  }

}
