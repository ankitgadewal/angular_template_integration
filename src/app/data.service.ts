import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getData(){
    let url = "http://ankitrestapi.pythonanywhere.com/class"
    return this.http.get(url);

  }
}