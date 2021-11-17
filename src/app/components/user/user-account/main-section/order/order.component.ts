// import { Component, OnInit } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Subject } from 'rxjs';
// import { Users } from 'src/app/models/users';

// import { Person } from '../person';

// import 'rxjs/add/operator/map';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy{
  // dtOptions: DataTables.Settings = {};
  // persons: Users[] = [];

  // // We use this trigger because fetching the list of persons can be quite long,
  // // thus we ensure the data is fetched before rendering
  // dtTrigger: Subject<any> = new Subject<any>();

  // constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 2
    };
  //   this.httpClient.get<Users[]>('https://jsonplaceholder.typicode.com/users')
  //     .subscribe(data => {
  //       this.persons = (data as any).data;
  //       // Calling the DT trigger to manually render the table
  //       this.dtTrigger.next();
  //     });
  // }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    // this.dtTrigger.unsubscribe();
  }
}
