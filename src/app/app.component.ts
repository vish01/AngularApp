import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'google maps';
  lat: number = 41.6377623;
  lng: number = -70.9273704;
}
