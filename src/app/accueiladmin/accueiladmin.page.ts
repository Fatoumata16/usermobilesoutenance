import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-accueiladmin',
  templateUrl: './accueiladmin.page.html',
  styleUrls: ['./accueiladmin.page.scss'],
})
export class AccueiladminPage implements OnInit {
  menu:boolean=true;
  public chart :any
  web=300;
  constructor() { }

  ngOnInit() {
    this.createChart();
  }
  afficher(){
    this.menu=!this.menu
   }

   createChart() {
    this.chart = new Chart("MyChart", {

      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Jan', 'Fev', 'Mars', 'Av',
          'Mai', 'Juin', 'Juil', 'Août','web','Oct','Nov','Dec'],
        datasets: [
          {
            label: "performances",
            // LE taux la moyenne des jurys par rapport a un criteres donnee 
            data: ['10', '20', '30', '50', '56',
              '300', '400', '250', this.web, '200',
              '100', '250'],
            backgroundColor: '#DC2106'
          },
          {
            label: "Profit",
            data: ['0', '0', '0', '0', '17',
              '0.00', '0', '0', '79', '0',
              '0', '0'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }
}
