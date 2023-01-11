import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AllHomes } from '../AllHomes.model';
import { DataService } from '../services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

declare var window:any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild('content') popupview !: ElementRef

  constructor(private router: Router, private data: DataService, private modalService:NgbModal,private toastr: ToastrService){}

  
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




  formModal:any;
  ngOnInit(): void {
       this.data.getAllHomes().subscribe(res=>{
      this.homeList = res.map((e: any)=>{
        const data = e.payload.doc.data()
        data.id = e.payload.doc.id;
        return data
      })
    }, err=> {alert("İlanlar yüklenirken hata oluştu.")})
    this.formModal=new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    )

  }
  openModal(){
    this.modalService.open(this.popupview, {size: 'lg'})
  }
  updateHome(home:AllHomes){
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

    this.data.updateHome(home,this.homeObj)
    this.toastr.success('Emlak Portalı', 'Başarıyla ilan düzenlendi.');
    

  }}

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
