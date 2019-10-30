import { Component, OnInit } from '@angular/core';
import { Page3Service } from '../services/page3.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html'
})
export class Page3Component implements OnInit {

  constructor( private ar: ActivatedRoute,
                private service: Page3Service) { }

  data: Observable<any>;

  ngOnInit() {
    if(typeof(this.ar.snapshot.params.param) != 'undefined'){
      this.getSearchData(this.ar.snapshot.params.param);
    }
  }

  getSearchData(param: string): void{
    this.data = this.service.dataFilter(param)
  }

}
