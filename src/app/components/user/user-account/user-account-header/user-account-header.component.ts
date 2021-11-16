import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-account-header',
  templateUrl: './user-account-header.component.html',
  styleUrls: ['./user-account-header.component.scss']
})
export class UserAccountHeaderComponent implements OnInit {
  @Output() toogleSideBarEvent : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toogleSideBar(){
    this.toogleSideBarEvent.emit();
  }
}
