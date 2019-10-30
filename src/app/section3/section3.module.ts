import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page3Component } from './page3/page3.component';
import { Routes, RouterModule } from '@angular/router';
import { Page3Service } from './services/page3.service';

const routes: Routes = [
  { path: ':param', component: Page3Component },
  { path: '**', redirectTo:'' }
];

@NgModule({
  declarations: [
    Page3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    Page3Service
  ]
})
export class Section3Module { }
