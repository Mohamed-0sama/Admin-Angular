import { Component, OnDestroy, OnInit } from '@angular/core';
import {UsersService} from '../../../../../services/users.service'
import {Subject} from 'rxjs';
// import {DataTableDirective} from 'angular-datatables';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {
  allUsers: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.users();
  }

  users(): void {
   this.allUsers =
   this.service
        .users()
        // .subscribe((response: any) => {
        //   this.allUsers = response.data;
        // //  initiate our data table
        // // this.dtTrigger.next();
        // });
  }
  ngOnDestroy(): void {
    // this.dtTrigger.unsubscribe();
  }
}

