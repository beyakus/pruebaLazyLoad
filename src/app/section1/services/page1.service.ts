import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Page1Service {

  private urlposts: string = `${environment.api}/posts`;

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.urlposts)
                    .pipe(
                      map( data => {
                        return this.modifyData(data)
                      }))
                    
  }

  private modifyData(data): Array<any>{

    return data;
  }
}
