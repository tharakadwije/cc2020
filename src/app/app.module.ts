import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppLevel2Component } from './level2/app.level2.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'level2', component: AppLevel2Component },
];

@NgModule({
  declarations: [
    AppComponent,
    AppLevel2Component,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
