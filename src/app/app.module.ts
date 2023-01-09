import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFirestoreModule} from "@angular/fire/compat/firestore"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { QuestionsComponent } from './questions/questions.component';
import { CreateHomeComponent } from './create-home/create-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainComponent,
    AdminComponent,
    AboutComponent,
    QuestionsComponent,
    CreateHomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    RouterModule,
    FormsModule,

    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
  apiKey: "AIzaSyAiSl6YfRDA05RfrRQtsy9PQC-68H7RcTU",
  authDomain: "angular-final-emlak-projesi.firebaseapp.com",
  projectId: "angular-final-emlak-projesi",
  storageBucket: "angular-final-emlak-projesi.appspot.com",
  messagingSenderId: "876612389292",
  appId: "1:876612389292:web:62ce229d69799463da1209",
  measurementId: "G-J34K4406QJ"
}),
AngularFirestoreModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
