import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  // getRequest(param:any): Observable<any> {
  //   // let completeUrl = this.apiUrl + "?text=" + param;
  //   // return this.http.get<any>(completeUrl);
  // }
}
