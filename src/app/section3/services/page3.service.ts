import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, filter, toArray, flatMap, tap } from 'rxjs/operators';
import { fillProperties } from '@angular/core/src/util/property';
import { Posts } from '../model/response.interface';

@Injectable({
  providedIn: 'root'
})
export class Page3Service {

  private urlposts: string = `${environment.api}/posts`;

  constructor(private http: HttpClient) { }

  dataFilter(text:string){
    return this.http.get(this.urlposts)
                    .pipe(
                      filter(( app: Posts) => {
                        return app.title == text;
                      })
                    )
  }

}
