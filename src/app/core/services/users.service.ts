import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  protected url = environment.apiUrl
  constructor(
    private http : HttpClient
  ) { }

  getAllUsers(){
    return this.http.get(`${this.url}/users/allusers` )
  }

  // deleteUser(id : any){
  //   return this.http.delete("http://localhost:8081/users/deleteUser/"+id)
  // }

  updateUser(id : any , data : any){
    return this.http.put(`${this.url}/users/updateUser/${id}` , data)
  }
}
