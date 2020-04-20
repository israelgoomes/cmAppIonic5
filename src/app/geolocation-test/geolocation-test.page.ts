import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geolocation-test',
  templateUrl: './geolocation-test.page.html',
  styleUrls: ['./geolocation-test.page.scss'],
})
export class GeolocationTestPage implements OnInit {

constructor(private geolocation: Geolocation,  private nativeGeocoder: NativeGeocoder, private router: Router) {}
  latitude: any = 0; // latitude
  longitude: any = 0; // longitude
  teste: any;


  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600
  };
  address: NativeGeocoderResult;

  // geocoder options
  nativeGeocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  ngOnInit() {}

  // use geolocation to get user's device coordinates
  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.getAddress(this.latitude, this.longitude);
    
    }).catch((error) => {
       console.log('Error getting location', error);
     });
    
  }

  // get address using coordinates
  getAddress(lat, long) {
    this.nativeGeocoder.reverseGeocode(lat, long, this.nativeGeocoderOptions)
    .then((res: NativeGeocoderResult[]) => {
      console.log('Resposta direta', res)
      this.address = res[0];
      this.teste = 'https://maps.googleapis.com/maps/api/staticmap?size=400x400&zoom=12&markers=color:red|'
      + this.getEndereco()
      + '&key=AIzaSyDIG5sfeA8GbckBb_ZHWUQdJhGR1w4iULc';
      console.log('Valor passado na img', this.teste)
      //this.pretifyAddress(res[0]);
    })
    .catch((error: any) => {
      alert('Error getting location' + JSON.stringify(error));
      console.error(error);
    });
  }

  // address
  pretifyAddress(address) {
    const obj = [];
    let data = '';
    for (const key in address) {
      obj.push(address[key]);
    }
    obj.reverse();
    for (const val in obj) {
      if (obj[val].length) {
      data += obj[val]+', ';
      }
    }
    return data.slice(0, -2);
  }

  getEndereco(){
    return this.address.thoroughfare + ', ' + this.address.subLocality + ', ' + this.address.subAdministrativeArea + ', ' + this.address.administrativeArea;
  }

getMap(){
  this.teste = 'https://maps.googleapis.com/maps/api/staticmap?size=400x400&zoom=12&markers=color:red|'
   + this.getEndereco()
   + '&key=AIzaSyDIG5sfeA8GbckBb_ZHWUQdJhGR1w4iULc';

}
voltar(){
  this.router.navigate(['/tabs/tabs/clientes'])
 }

}
