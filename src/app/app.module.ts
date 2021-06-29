import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular2-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartComponent } from './line-chart/line-chart.component';

import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';

declare var require:any;

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartModule.forRoot(require('highcharts')),

  
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
