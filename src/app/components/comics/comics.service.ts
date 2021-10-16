import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  params = new HttpParams()
    .set('ts', '9')
    .set('apikey', environment.apiKey)
    .set('hash', environment.hash)

  constructor(
    private http: HttpClient
  ) { }

  getComicSingle( url: string ) {
    const params = this.params;
    return this.http.get<{data: any}>(url, {params})
      .pipe(
        map(({data}) => data.results)
      )
  }

}
