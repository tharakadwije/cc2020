import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import {ChartModule} from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SliderModule} from 'primeng/slider';


@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    SliderModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
