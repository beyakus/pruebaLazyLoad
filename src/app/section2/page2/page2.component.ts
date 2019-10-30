import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Page2Service } from '../services/page2.service';  

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html'
})
export class Page2Component implements OnInit {

  constructor( private ar: ActivatedRoute,
               private service: Page2Service ) { }

  data: Observable<any>;
  param: string;

  ngOnInit() {
    if(typeof(this.ar.snapshot.params.id) != 'undefined'){
      this.param = this.ar.snapshot.params.id;
      this.dataParamater(this.ar.snapshot.params.id);
    }
  }

  dataParamater(id: number | string): void{
    console.log(id);
    this.data = this.service.getDataParameters(id);
  }

}
