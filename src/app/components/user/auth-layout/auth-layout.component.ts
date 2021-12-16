import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser';
import { UserAuthService } from './../../../services/user-auth.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
   admin:Iuser={username:"",password:""}
  isShown:boolean=true;


  constructor(public userAuthService:UserAuthService) { }

  ngOnInit(): void {
  }

  Login(){
    // if(localStorage.getItem("adminIsLogged")!=="true")
    if(this.userAuthService.isLogged){
      this.isShown=true;
    }else{
      this.isShown=false;
    }
    this.userAuthService.login(this.admin) ;
  }


}
