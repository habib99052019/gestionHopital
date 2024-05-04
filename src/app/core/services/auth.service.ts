import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected url = environment.apiUrl
  constructor(
    private http : HttpClient
  ) { }

  openUpdate = false

  userLoggedDetails = {
    id:"",
    role:"Admin"
  }

  loginService(data:any):Observable<any>{
    return this.http.post(`${this.url}/users/login` , data)
  }

  registerService(data : any){
    return this.http.post(`${this.url}/users/register`  , data)
  }

  findById(id : any){
    return this.http.get(`${this.url}/byid${id}`)
  }

}
