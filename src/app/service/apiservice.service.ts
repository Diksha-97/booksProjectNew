import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

 

  onlogin(obj:any):Observable<any>{
    return this.http.post('http://localhost:4000/users/login',obj)
  }

 

}
