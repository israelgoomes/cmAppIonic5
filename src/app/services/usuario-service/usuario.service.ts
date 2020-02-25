import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { configHelper } from '../../configHelper';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string;
  constructor(private http: HttpService) { 
    this.url = configHelper.URL;
  }


   getByIdUser(id: string): Observable<any>{
    return  this.http.get(`${this.url}/usuario/${id}`);
  }
}
