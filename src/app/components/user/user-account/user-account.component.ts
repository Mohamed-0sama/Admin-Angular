import { Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HostListener } from "@angular/core";
import { MatDrawerMode } from '@angular/material/sidenav';
// import { ElementMatcher } from '@angular/flex-layout';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  isOpen:boolean = true;
  mode! : MatDrawerMode
  screenHeight!: number;
    screenWidth!: number;

    constructor() {
        this.getScreenSize();
    }

  ngOnChanges(changes: SimpleChanges): void {
// if(nativeElement.width == 1200)
  }

  ngOnInit(): void {
  }
  toogleAside(){
    this.isOpen = !this.isOpen;
  }
  @HostListener('window:resize', ['$event'])
    getScreenSize() : void {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          console.log(this.screenHeight, this.screenWidth);
          // if (this.screenWidth < 768) {
          //   this.mode = "over"
          // // }else if(this.screenWidth < 992){
          // //   this.mode = "push"
          // } else {
          //   this.mode = "push"
          // }
          this.mode = "over"
    }

}
