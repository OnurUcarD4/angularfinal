import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllHomes } from '../AllHomes.model';
import { DataService } from '../services/data.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.scss']
})
export class CreateHomeComponent implements OnInit {
  homeList : AllHomes[] = [];
  homeObj : AllHomes = {
  id: '',
  homeName: '',
  homeDesc: '',
  homePrice: '',
  homeRooms:'',
  homeMeters: '',
  homeType: '',
  homeColor:'',
  homeLocation:'',
  homeImage: '',
  homeAuthor: '',
  }
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
  homeAuthor: string = '';




  

  constructor(private auth: AuthService, private data: DataService, private router: Router, private toastr: ToastrService){}

  ngOnInit(): void {
      
  }

  addHome(){
    if(this.homeName == '' || this.homeDesc == '' || this.homePrice == '' || this.homeRooms == '' || this.homeMeters == '' || this.homeType == '' || this.homeColor == '' || this.homeLocation == '' || this.homeImage == ''){
    alert('Lütfen boş alanları doldurunuz.')

    }else{
    this.homeObj.id = '';
    this.homeObj.homeName = this.homeName;
    this.homeObj.homeDesc = this.homeDesc;
    this.homeObj.homePrice = this.homePrice;
    this.homeObj.homeRooms = this.homeRooms;
    this.homeObj.homeMeters = this.homeMeters;
    this.homeObj.homeType = this.homeType;
    this.homeObj.homeColor = this.homeColor;
    this.homeObj.homeLocation = this.homeLocation;
    this.homeObj.homeImage = this.homeImage
    this.homeObj.homeAuthor = this.homeAuthor;


    this.data.addHome(this.homeObj)
    this.toastr.success('Emlak Portalı', 'Başarıyla ilan verildi.');

    this.router.navigate(['dashboard'])
    }
  }
  deleteHome(home: AllHomes){
    if(window.confirm((home.homeName + 'adlı ilanı silmek istediğinize emin misiniz?'))){
    this.data.deleteHome(home)
    }
  }
  exitAccount(){
    localStorage.clear();
    this.router.navigate(['home'])
  }
}
