import { Component, OnInit } from '@angular/core';
import {DashboardOneService} from 'src/app/services/dashboard-one.service'
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
// import DashboardOneService from './'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptionsConsumption = {};
  chartYearlyConsumption = {};
  cards: number[]
  // Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options
  // = {
  //   series: [{
  //     data: [1, 2, 3,4, 5],
  //     type: 'pie'
  //   }]}

  constructor(private firstDashboard : DashboardOneService) {
      
    this.cards = [71, 78, 39, 66];
  }
  // cards() {
  //   return [71, 78, 39, 66];
  // }
  ngOnInit(): void {
    this.chartOptionsConsumption = this.firstDashboard.optionsConsumption
    this.chartYearlyConsumption = this.firstDashboard.yearlyConsumption
    HC_exporting(Highcharts);
  }
  
}
      // /////////////////////////////////////////
    //  title: {
    //     text: 'Combination chart'
    // },
    // xAxis: {
    //     categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
    // },
    // labels: {
    //     items: [{
    //         html: 'Total fruit consumption',
    //         style: {
    //             left: '50px',
    //             top: '18px',
    //             color:  // theme
    //             "red" 
    //                 // Highcharts.defaultOptions.title.style &&
    //                 // Highcharts.defaultOptions.title.style.color
    //              || 'black'
    //         }
    //     }]
    // },
    // series: [{
    //     type: 'column',
    //     name: 'Jane',
    //     data: [3, 2, 1, 3, 4]
    // }, {
    //     type: 'column',
    //     name: 'John',
    //     data: [2, 3, 5, 7, 6]
    // }, {
    //     type: 'column',
    //     name: 'Joe',
    //     data: [4, 3, 3, 9, 0]
    // }, {
    //     type: 'spline',
    //     name: 'Average',
    //     data: [3, 2.67, 3, 6.33, 3.33],
    //     marker: {
    //         lineWidth: 2,
    //         lineColor: "red" ,
    //         fillColor: 'white'
    //     }
    // }, {
    //     type: 'pie',
    //     name: 'Total consumption',
    //     data: [{
    //         name: 'Jane',
    //         y: 13,
    //         color: "#95CEFF"  // Jane's color
    //     }, {
    //         name: 'John',
    //         y: 23,
    //         color: "#5C5C61"  // John's color
    //     }, {
    //         name: 'Joe',
    //         y: 19,
    //         color: "#90ED7D" // Joe's color
    //         // color: Highcharts.getOptions().colors[2] // Joe's color
    //     }],
    //     center: [100, 80],
    //     size: 100,
    //     showInLegend: false,
    //     dataLabels: {
    //         enabled: false
    //     }
    // }]
    //   chart: {
    //     type: 'area'
    // },
    // title: {
    //     text: 'Historic and Estimated Worldwide Population Growth by Region'
    // },
    // subtitle: {
    //     text: 'Source: Wikipedia.org'
    // },
    // xAxis: {
    //     categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
    //     tickmarkPlacement: 'on',
    //     title: {
    //         enabled: false
    //     }
    // },
    // yAxis: {
    //     title: {
    //         text: 'Billions'
    //     },
    //     labels: {
    //         // formatter: function () {
    //         //     return this.value / 1000;
    //         // }
    //     }
    // },
    // tooltip: {
    //     split: true,
    //     valueSuffix: ' millions'
    // },
    // plotOptions: {
    //     area: {
    //         stacking: 'normal',
    //         lineColor: '#666666',
    //         lineWidth: 1,
    //         marker: {
    //             lineWidth: 1,
    //             lineColor: '#666666'
    //         }
    //     }
    // },
    // series: [{
    //     name: 'Asia',
    //     data: [502, 635, 809, 947, 1402, 3634, 5268]
    // }, {
    //     name: 'Africa',
    //     data: [106, 107, 111, 133, 221, 767, 1766]
    // }, {
    //     name: 'Europe',
    //     data: [163, 203, 276, 408, 547, 729, 628]
    // }, {
    //     name: 'America',
    //     data: [18, 31, 54, 156, 339, 818, 1201]
    // }, {
    //     name: 'Oceania',
    //     data: [2, 2, 2, 6, 13, 30, 46]
    // }]
    // };
    // HC_exporting(Highcharts);

