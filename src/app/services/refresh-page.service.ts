import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshPageService {
  refresh = new EventEmitter();
  newUser = new EventEmitter();
  constructor() { }
}
