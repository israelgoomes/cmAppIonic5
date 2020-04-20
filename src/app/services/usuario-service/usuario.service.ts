import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { configHelper } from '../../configHelper';
import { Observable} from 'rxjs'
import { UsuarioModel } from '../../models/usuario-model';

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

  upadateUser(id: string, body: UsuarioModel): Observable<UsuarioModel>{
    return this.http.put(`${this.url}/usuario/${id}`, body);
  }
}
