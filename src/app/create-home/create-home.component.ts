import { Component } from '@angular/core';
import { HomesService } from '../services/homes.service';
import {FormBuilder, FormGroup} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.scss']
})
export class CreateHomeComponent {
  public homeForm: FormGroup;

  constructor(public homeService: HomesService, public formBuilder: FormBuilder, public router: Router){
    this.homeForm = this.formBuilder.group({
      homeName: [''],
      homeDesc: [''],
      homePrice: [''],
      homeRooms: [''],
      homeMeters: [''],
      homeType: [''],
      homeColor: [''],
      homeLocation: [''],
    })
  }
  onSubmit(){
    this.homeService.createHome(this.homeForm.value)
    this.router.navigate(['list-homes'])
  }
}
