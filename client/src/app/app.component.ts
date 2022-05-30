import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto-checker';

  constructor() {

  }

  selectedCurrency:string = "INR";

  sentCurrency(event:string) {
    console.log(event);
  }
}
