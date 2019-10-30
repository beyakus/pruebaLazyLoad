import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModuleModule } from '../shared-module/shared-module.module';

import { Page1Component } from './page1/page1.component';
import { Page1Service } from './services/page1.service'; 



const routes: Routes = [
  { path: '', component: Page1Component },
  { path: '**', redirectTo:'' }
];

@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModuleModule
  ],
  providers:[
    Page1Service
  ]
})
export class Section1Module { }
