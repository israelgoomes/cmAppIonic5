import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { configHelper } from "src/app/configHelper";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(
    public httpClient: HttpClient,
    private ngxService: NgxUiLoaderService
  ) {}

  public createHeader(header?: HttpHeaders): HttpHeaders {
    if (!header) {
      header = new HttpHeaders();
    }

    header = header.append("Content-type", "application/json");
    header = header.append("accept", "application/json");

    const token = HttpService.getAcessToken;
    if (token) {
      console.log("entrou");
      header = header.append("user-token", token);
    }
    return header;
  }

  public get(url): Observable<any> {
    const header = this.createHeader();
    this.ngxService.start();
    return this.httpClient.get(url, { headers: header });
  }

  public put(url, data): Observable<any> {
    const header = this.createHeader();
    this.ngxService.start();
    return this.httpClient.put(url, data, { headers: header });
  }

  public post(url, data): Observable<any> {
    const header = this.createHeader();
    this.ngxService.start();
    return this.httpClient.post(url, data, { headers: header });
  }

  public delete(url, id): Observable<any> {
    const header = this.createHeader();
    this.ngxService.start();
    return this.httpClient.delete(`${url}/${id}`, { headers: header });
  }
  static get getAcessToken(): string {
    return localStorage.getItem(configHelper.storageKeys.token);
  }
}
