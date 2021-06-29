import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() {
  

    this.options = {
        
      title : {  text : 'Last 30 Days'                          
    },
    
          chart: { zoomType: 'xy',
        styleModule:false,
  },


  yAxis: {
    title: {
        text: ' '
    },
    labels: {
        format: '{value}%'
    },

},

      xAxis:{
     
        visible:true,
        categories:
        [
          
          '1 Apr',
    
        '|',
        '|',
        '|',
        '|',
        '|',
        
      '7 Apr',
      '|',
      '|',
      '|',
      '|',
      '|',
    
        '14 Apr',
        '|',
        '|',
        '|',
        '|',
        '|',
       
      '21 apr',
      '|',
      '|',
      '|',
      '|',
      '|',
      '28 apr',
   ]},  
    series: 
    [
      { 
   
        type: 'areaspline',
  color:'lightblue',
opacity: '0.50',

data:[ [2],
          [21],
          [25 ],
          [27],
          [25 ],
            [20],
            [20 ],
            [27],
            [30],
            [32],
            [33], 
            [35],
            [37 ],
              [37],
              [37],
              [36],
              [35],
              [34],
              [33],
              [36],
              [40],
              [43],
              [47],
              [50],
              [50],
            ]
           }
          ]
   
       };
      } as: any;
    
  options: object;


  ngOnInit(): void {
    
  }

}
