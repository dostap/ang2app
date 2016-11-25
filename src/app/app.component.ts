import { Component } from '@angular/core';
import { StocksComponent } from './stocks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  today = new Date();
}
