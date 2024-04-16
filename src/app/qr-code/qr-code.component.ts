import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent {
  qrDataArray: string[] = []; 
  
  newQrData: string = ''; 
  
  addQrCode() {
    if (this.newQrData) {
      const numQRsToAdd = parseInt(this.newQrData, 10);
      if (!isNaN(numQRsToAdd) && numQRsToAdd > 0) {
        for (let i = 0; i < numQRsToAdd; i++) {
          this.qrDataArray.push(this.generateRandomString() + '-' + this.getCurrentDateTime());
        }
        this.newQrData = ''; 
      }
    }
    console.log(this.qrDataArray);
  }

  generateRandomString(length: number = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  getCurrentDateTime() {
    const now = new Date();
    const offsetHours = Math.floor(Math.random() * 24) - 12; 
    const offsetMinutes = Math.floor(Math.random() * 60) - 30; 
    const offsetMilliseconds = (offsetHours * 60 + offsetMinutes) * 60 * 1000;
    const dateTimeWithOffset = new Date(now.getTime() + offsetMilliseconds);
    return dateTimeWithOffset.toISOString().replace(/[\-\:\.]/g, '');
  }
  
}
