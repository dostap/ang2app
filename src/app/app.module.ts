import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks.component';
import { HighlightDirective } from './highlight.directive';
import { StockService } from './stock.service';
import { DateFormatterPipe } from './date-formatter.pipe';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    HighlightDirective,
    DateFormatterPipe,
    DashboardComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
