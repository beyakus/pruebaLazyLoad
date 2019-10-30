import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './section1/page1/page1.component';

const routes: Routes = [
  { path: '', component: Page1Component },
  { path: '', loadChildren: './section2/section2.module#Section2Module' },
  { path: 'busqueda', loadChildren: './section3/section3.module#Section3Module' },
  //{ path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
