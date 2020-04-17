import { Component, OnInit } from '@angular/core';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';

@Component({
  selector: 'app-finge-print-aio',
  templateUrl: './finge-print-aio.page.html',
  styleUrls: ['./finge-print-aio.page.scss'],
})
export class FingePrintAioPage implements OnInit {

  constructor(private androidFingerprintAuth: AndroidFingerprintAuth) { }
  ngOnInit() {
    this.androidFingerprintAuth.isAvailable()
  .then((result)=> {
    if(result.isAvailable){
      // it is available

      this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
        .then(result => {
           if (result.withFingerprint) {
               console.log('Successfully encrypted credentials.', result);
               console.log('Encrypted credentials: ' + result.token);
           } else if (result.withBackup) {
             console.log('Successfully authenticated with backup password!');
           } else console.log('Didn\'t authenticate!');
        })
        .catch(error => {
           if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
             console.log('Fingerprint authentication cancelled');
           } else console.error(error)
        });

    } else {
      // fingerprint auth isn't available
    }
  })
  .catch(error => console.error(error));
  }

 

}
