import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { Observable } from 'rxjs';
import { configHelper } from 'src/app/configHelper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
url: string;
  constructor(public http: HttpService) {
    this.url = `${configHelper.URL2}`;
   }

  authenticate(email, senha): Observable<any> {
    return this.http.post(
      `${this.url}/usuario/autenticar`,
      { email, senha },
    );
  }

  registerLogin(result) {
    localStorage.setItem(configHelper.storageKeys.token, result.token);
    localStorage.setItem(configHelper.storageKeys.user, JSON.stringify(result.usuario));

  }
}
