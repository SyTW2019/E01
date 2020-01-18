import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
/*import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';*/

@Injectable({
    providedIn: 'root'
})

export class SearchService {

  baseUrl: string = 'http://localhost:3000/apuntes/apuntes/search/';

  constructor(private http: HttpClient) { }

  search(terms: Observable<string>) {
    return terms.pipe(
        debounceTime(400),      // Espera a que no haya datos nuevos el tiempo indicado
        distinctUntilChanged(), // Envía los datos una sola vez
        switchMap((term: string) => this.searchEntries(term)));
  }

  searchEntries(term: string): Observable<object> {
    return this.http.get(`${this.baseUrl}${term}`);
  }

}