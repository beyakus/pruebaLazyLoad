import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2/page2.component';
import { Routes, RouterModule } from '@angular/router';
import { Page2Service } from './services/page2.service';

const routes: Routes = [
  { path: ':id', component: Page2Component },
];

@NgModule({
  declarations: [
    Page2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    Page2Service
  ]
})
export class Section2Module { }
