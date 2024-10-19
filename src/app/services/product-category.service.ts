import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private apiUrl = "http://a0214571ffcf8436aabbc5cd8c03c3a5-1667859194.ap-south-1.elb.amazonaws.com/api/product-category";

  constructor(private httpClient: HttpClient) { }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.apiUrl)
      .pipe(map(response => response._embedded.productCategories));
  }
}

// Interface for mapping the response
interface GetResponseProductCategory {
  _embedded: {
    productCategories: ProductCategory[];
  };
}
