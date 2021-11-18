import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardOneService {
optionsConsumption! : {}
yearlyConsumption! : {}
data! : [] 

  constructor(private httpClient : HttpClient) {
    this.optionsConsumption = {
   title: {
        text: 'Consumption'
    },
    xAxis: {
        categories: ['Laptops', 'Mobiles', 'Clothes', 'Shoes', 'Watches']
    },
    labels: {
        items: [{
            html: 'total consumption',
            style: {
                left: '60px',
                top: '25px',
                color:  // theme
                // "red" 
                    // Highcharts.defaultOptions.title.style &&
                    // Highcharts.defaultOptions.title.style.color
                  'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'March',
        data: [3, 2, 1, 3, 4]
    }, {
        type: 'column',
        name: 'April',
        data: [2, 3, 5, 7, 6]
    }, {
        type: 'column',
        name: 'May',
        data: [4, 3, 3, 9, 1]
    }, {
        type: 'spline',
        name: 'Average',
        data: [3, 2.67, 3, 6.33, 2.9],
        marker: {
            lineWidth: 2,
            lineColor: "red" ,
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total consumption',
        data: [{
            name: 'May',
            y: 13,
            color: "#95CEFF"  // Jane's color
        }, {
            name: 'April',
            y: 23,
            color: "#5C5C61"  // John's color
        }, {
            name: 'March',
            y: 19,
            color: "#90ED7D" // Joe's color
            // color: Highcharts.getOptions().colors[2] // Joe's color
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
}
this.yearlyConsumption = {
 title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }




   }
}

}
// getData():Observable<data[]>{
//  this.data = this.httpClient.get<data[]>('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json')
//   console.log(this.data);
//   return this.data
  
// }
// getData()

