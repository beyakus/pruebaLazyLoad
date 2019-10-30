import { Component, OnInit } from '@angular/core';
import { Page1Service } from '../services/page1.service';  
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html'
})
export class Page1Component implements OnInit {

  data: Observable<any>;

  constructor(private service: Page1Service) { }

  ngOnInit() {
    console.log('oninit');
    this.data = this.service.getData();
  }

}
