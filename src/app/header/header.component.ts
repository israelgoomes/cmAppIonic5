import { Component, OnInit } from '@angular/core';
import { configHelper } from '../configHelper';
import { RefreshPageService } from '../services/refresh-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  class = 'origin';
  constructor(private refreshSrtvc: RefreshPageService) {
  this.class = localStorage.getItem(configHelper.storageKeys.color) != null ? localStorage.getItem(configHelper.storageKeys.color) : 'origin';
  this.refreshSrtvc.changeTheme.subscribe(()=>{
    this.class = localStorage.getItem(configHelper.storageKeys.color);
  });
  }


  ngOnInit() {}

}
