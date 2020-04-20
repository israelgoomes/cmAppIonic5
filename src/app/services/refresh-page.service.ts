import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshPageService {
  refreshClient = new EventEmitter();
  refreshProject = new EventEmitter();
  newUser = new EventEmitter();
  changeTheme = new EventEmitter();
  constructor() { }
}
