import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http-service/http.service';
import { ClienteModel } from 'src/app/models/cliente-model';
import { configHelper } from 'src/app/configHelper';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
url: string;
  constructor(private http: HttpService) {
    this.url = `${configHelper.URL}/clientes`;
   }


  getClients(): Observable<ClienteModel[]>  {
    return this.http.get(`${this.url}`);
  }

  getClientsByIdUser(id: string): Observable<ClienteModel[]>  {
    return this.http.get(`${this.url}/usuario/${id}`);
  }

  includesClient(data: ClienteModel): Observable<ClienteModel[]>{
    return this.http.post(`${this.url}`, data);
  }

  alterClient(data, id): Observable<ClienteModel[]>{
    console.log('id chegou', id)
    return this.http.put(`${this.url}/${id}`, data);
  }

  deleteClient(id): Observable<ClienteModel[]>{
  return this.http.delete(`${this.url}`, id)
  }

}
