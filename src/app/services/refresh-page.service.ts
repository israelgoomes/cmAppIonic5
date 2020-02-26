import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshPageService {
  refresh = new EventEmitter();
  constructor() { }
}
