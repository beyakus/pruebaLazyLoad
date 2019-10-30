import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Page2Service {

  private urlposts: string = `${environment.api}/posts`;

  constructor(private http: HttpClient) { }

  getDataParameters(id: number | string){
    return this.http.get(`${this.urlposts}/${id}`).pipe(
      map( data => {
        const result  = []
        result.push(data)
        return result
      }))
  }

}
