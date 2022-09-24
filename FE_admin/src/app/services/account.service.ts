import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../model/account';

const API = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})

export class AccountService {


  constructor(private http: HttpClient) {

  }
  getAllAccount(pageNumber:any, pageSize:any): (Observable<Object>) {
    return this.http.get(API + "/user/find-by-page?pageNumber=" + pageNumber + "&pageSize=" + pageSize)
  }

  createAccount(body): (Observable<Object>) {
    return this.http.post("https://62ec26fa818ab252b6f8c236.mockapi.io/api/v1/account", body)
  }
  updateAccount(id, body): (Observable<Object>) {
    return this.http.put("https://62ec26fa818ab252b6f8c236.mockapi.io/api/v1/account/" + id, body)
  }
  getDetail(id): (Observable<Object>) {
    return this.http.get(API+"/user/"+id)
  }
  delete(id): (Observable<Object>) {
    return this.http.delete("https://62ec26fa818ab252b6f8c236.mockapi.io/api/v1/account/" + id)
  }
}
