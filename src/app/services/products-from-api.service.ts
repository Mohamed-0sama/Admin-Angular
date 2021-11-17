import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductAPI } from '../models/product-api'

@Injectable({
  providedIn: 'root'
})
export class ProductsFromAPIService {

  private httpOptions={};
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //, 'Authorization':localStorage.get('AccessToken')
      })
    }
  }

 getAllProducts():Observable<ProductAPI[]>
 {
   // return this.httpClient.get<Product[]>(environment.APIURL + '/getproducts');
   return this.httpClient.get<ProductAPI[]>(environment.APIURL + '/products');

 }

 getProductByID(pID: string):Observable<ProductAPI>
 {
   return this.httpClient.get<ProductAPI>(environment.APIURL + '/products/find/' +pID);
 }

 getProductByCatName(cName: string):Observable<ProductAPI[]>
 {
   return this.httpClient.get<ProductAPI[]>(environment.APIURL + '/products?category=' +cName);
 }
/*
 insertProduct(newPrd: ProductAPI):Observable<any>
 {
  //this.httpClient.post(environment.APIURL + '/products',newPrd);
  return this.httpClient.post(`${environment.APIURL}/products`,JSON.stringify(newPrd),this.httpOptions);

 }
*/
}
