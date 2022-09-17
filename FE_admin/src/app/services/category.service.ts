import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})

export class CategoryService {


  constructor(private http: HttpClient) {

  }
  getAllCategory(): (Observable<Object>) {
    return this.http.get("https://62ec26fa818ab252b6f8c236.mockapi.io/api/v1/category")
  }

  createCategory(body): (Observable<Object>) {
    return this.http.post("https://62ec26fa818ab252b6f8c236.mockapi.io/api/v1/category", body)
  }
  updateCategory(id, body): (Observable<Object>) {
    return this.http.put("https://62ec26fa818ab252b6f8c236.mockapi.io/api/v1/category/" + id, body)
  }
  getDetail(id): (Observable<Object>) {
    return this.http.get("https://62ec26fa818ab252b6f8c236.mockapi.io/api/v1/category/" + id)
  }
  delete(id): (Observable<Object>) {
    return this.http.delete("https://62ec26fa818ab252b6f8c236.mockapi.io/api/v1/category/" + id)
  }
}
