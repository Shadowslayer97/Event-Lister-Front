import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrl:string = "http://localhost:3000/user"

  constructor(private http: HttpClient) { }

  getRequest(param:any, apiPath:string): Observable<any> {
    let completeUrl = this.apiUrl + apiPath;
    return this.http.get<any>(completeUrl,{observe:'response'});
  }

  postRequest(body:any, apiPath:string): Observable<any> {
    let completeUrl = this.apiUrl + apiPath;
    return this.http.post<any>(completeUrl,body,{observe:'response'}  );
  }
}
