import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductAPI } from '../models/product-api'

@Injectable({
  providedIn: 'root'
})
export class CatrgoriesFromApiService {
  private httpOptions={};
  constructor(private httpClient: HttpClient) {
    // localStorage.setItem('AccessToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGViNGE1ZTRlMjZlN2Y2MjVjYTIyNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzAyMzczNiwiZXhwIjoxNjM3MjgyOTM2fQ.rErePjoBJpU2FrU1-_21ZTZubV0CurzFRFr4PNJ4HYM')
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      , 'token':/*this.accessTokenForAdmin*/localStorage['adminToken']
      })//.set('token', localStorage.AccessToken)
    }
  }

 getAllCategories():Observable<string[]>
 {
   // return this.httpClient.get<Product[]>(environment.APIURL + '/getproducts');
   return this.httpClient.get<string[]>(/*environment.APIURL + */'http://localhost:5000/api/categories?category=all');

 }
}
