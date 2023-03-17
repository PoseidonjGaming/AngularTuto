import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_API='https://jsonplaceholder.typicode.com'
  private readonly ENDPOINT_USER='/users'

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.BASE_API+this.ENDPOINT_USER)
  }

  getUserById(id: string): Observable<IUser>{
    return this.httpClient.get<IUser>(this.BASE_API+this.ENDPOINT_USER+'/'+id)
  }
}
