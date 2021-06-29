import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdHelp-io';

 
 
  //this is a variable that hold number
  Clicks:number = 24900;
  //same process
  Conversionrate:number = 0;
  Revenue:number = 79900;
  Cost:number = 29200;

  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectcountstop.
  Clicksstop:any = setInterval(()=>{
    this.Clicks++;
    //we need to stop this at  particular point; will use if condition
    if(this.Clicks ==25000)
    {
      //clearinterval will stop tha function
      clearInterval(this.Clicksstop);
    }

  },100) //100 is milisecond you can control it


  Conversionratestop:any = setInterval(()=>{
    this.Conversionrate++;
    if(this.Conversionrate == 20)
    {
      
      clearInterval(this.Conversionratestop);
    }
  },500) 


  Revenuestop:any = setInterval(()=>{
    this.Revenue++;
    if(this.Revenue == 79963)
    {
      
      clearInterval(this.Revenuestop);
    }
  },100)

  Coststop:any = setInterval(()=>{
    this.Cost++;
    if(this.Cost == 29256)
    {
      
      clearInterval(this.Coststop);
    }
  },100)


  
}
  
  