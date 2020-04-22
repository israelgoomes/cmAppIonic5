import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { configHelper } from 'src/app/configHelper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url: string;
  constructor(private http: HttpService) {
    this.url = `${configHelper.URL}/send-email`;
   }


   public sendEmail(data): Observable<any>{
      return this.http.post(this.url, data);
   }

}
