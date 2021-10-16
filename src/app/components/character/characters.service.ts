import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Data } from './data.interface';
import { Character } from './character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  url = `${ environment.apiUrl }/characters`;
  params = new HttpParams()
    .set('ts', '9')
    .set('apikey', environment.apiKey)
    .set('hash', environment.hash)

  constructor(
    private http: HttpClient
  ) { }

  getCharacters() {

    const params = this.params;

    return this.http.get<{data: Data}>(this.url, {params})
      .pipe(
        map(({data}) => data.results)
      );
  }

  searchCharacters(value: string) {

    const params = this.params
      .set('nameStartsWith', value);

    return this.http.get<{data: Data}>(this.url, {params})
    .pipe(
      map(({data}) => data.results)
    );

  }

  sortCharacters( value: string ) {
    const params = this.params
      .set('orderBy', value);

    return this.http.get<{data: Data}>(this.url, {params})
    .pipe(
      map(({data}) => data.results)
    );
  }

  searchSortCharacters(value?: string, sort?: string) {

    
    if ( value ) {
      this.params = this.params.set('nameStartsWith', value!)
    }
    
    if ( sort ) {
      this.params = this.params.set('orderBy', sort!)
    }
    const params = this.params;

    return this.http.get<{data: Data}>(this.url, {params})
    .pipe(
      map(({data}) => data.results)
    );

  }

}
 