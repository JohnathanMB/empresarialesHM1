import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Item} from './objs/item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItemTitle(titleItem: string): Observable<any>{
    const itemUrl = `https://api.mercadolibre.com/sites/MCO/search?q=${titleItem}`;
    return this.http.get(itemUrl);
  }

}
