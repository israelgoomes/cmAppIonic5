import { Component, OnInit } from '@angular/core';
import { configHelper } from '../configHelper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-to-cm-app',
  templateUrl: './how-to-cm-app.page.html',
  styleUrls: ['./how-to-cm-app.page.scss'],
})
export class HowToCmAppPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  conclude(){
    localStorage.setItem(configHelper.storageKeys.concluded, 'concluded');
    this.router.navigate(['/tabs/tabs/clientes']);
  }

}
