import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
//import { ChartModule } from 'angular2-highcharts'; 

declare var require: any;
var hcharts = require('highcharts');
require('highcharts/modules/exporting')(hcharts);

/**
 * Generated class for the Diagnosis page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-diagnosis',
  templateUrl: 'diagnosis.html'
})
export class Diagnosis {

  @ViewChild(Slides) slides: Slides;
  @ViewChild('chart') canvas: ElementRef;
  @ViewChild('chart2') canvas2: ElementRef;
  options : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private el: ElementRef) {
      let option1 =  
      {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        exporting: {
            enabled: false
        },
        colors: ['#387ef5', '#32db64', '#f53d3d'],
        credits: {
            enabled: false
        },
        title: {
            text: '数学培优新方法（摘要）'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                allowPointSelect: true,
                cursor: 'pointer',
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: '已经做题（正确）',
                y: 45.1,
                color:'#32db64'
            }, {
                name: '已经做题（错误）',
                y: 30.6,
                color: '#f53d3d'
            }, {
                name: '未做过的题',
                y: 24.3,
                color: '#387ef5'
            }],
            dataLabels: {
                enabled: true,
                borderRadius: 5,
                y: -6,
                format: '{point.y:,.1f}%'
            }
        }]
      };
      let option2 = {
        chart: {
            type: 'bar'
        },
        title: {
            text: '数学培优新方法（详细）'
        },
        exporting: {
            enabled: false
        },
        colors: ['#387ef5', '#32db64', '#f53d3d'],
        credits: {
            enabled: false
        },
        xAxis: {
            categories: ['第一章', '第二章', '第三章', '第四章', '第五章']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: '已经做题（正确）',
            data: [5, 3, 4, 7, 2],
            color:'#32db64'
        }, {
            name: '未做过的题',
            data: [2, 2, 3, 2, 1],
            color: '#387ef5'
        }, {
            name: '已经做题（错误）',
            data: [3, 4, 4, 2, 5],
            color: '#f53d3d'
        }]

      };
      this.options = [option1, option2];
      //hcharts.chart(this.canvases[0].nativeElement,this.options[0]);
      //hcharts.chart(this.canvases[1].nativeElement,this.options[1]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Diagnosis');
  }

  ngAfterViewInit() {
    //var chart = hcharts.chart(this.canvas.nativeElement,this.options[0]);
    // this.canvases.forEach(canvas => function (canvas, $index) {
    //     hcharts.chart(this.canvas.nativeElement,this.options[$index]);
    // });
    hcharts.chart(this.canvas.nativeElement,this.options[0]);
    hcharts.chart(this.canvas2.nativeElement,this.options[1]);
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);
  }

}
