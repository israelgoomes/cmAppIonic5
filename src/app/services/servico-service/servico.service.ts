import { ServicoModel } from './../../models/servicos-model';
import { configHelper } from 'src/app/configHelper';
import { HttpService } from './../http-service/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  url: string;
  constructor(private http: HttpService) {  
    this.url = `${configHelper.URL}/projetos`
  }

  public getServicesByUser(id): Observable<ServicoModel[]> {
    return this.http.get(`${this.url}/usuario/${id}`);
  }
}
