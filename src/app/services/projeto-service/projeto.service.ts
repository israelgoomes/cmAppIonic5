import { ProjetoModel } from '../../models/servicos-model';
import { configHelper } from 'src/app/configHelper';
import { HttpService } from '../http-service/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  url: string;
  constructor(private http: HttpService) {  
    this.url = `${configHelper.URL}/projetos`
  }

  public getServicesByUser(id): Observable<ProjetoModel[]> {
    return this.http.get(`${this.url}/usuario/${id}`);
  }

  public includesProject(data: ProjetoModel): Observable<any>{
    return this.http.post(`${this.url}`, data);
  }

  public projectByClient(idClient: any): Observable<ProjetoModel[]>{
      return this.http.get(`${this.url}/cliente/${idClient}`);
  }
  public deleteProject(id): Observable<any>{
    return this.http.delete(`${this.url}`, id);
  }
  public updateProject(id, data): Observable<any>{
    return this.http.put(`${this.url}/${id}`, data);
  }
}
