import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomUserServiceService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("https://reqres.in/api/users?page=2%27");
  }
}
