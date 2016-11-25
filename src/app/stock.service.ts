import {Injectable} from '@angular/core'

@Injectable()
export class StockService{
    getStocks() : string[]{
        return ['AAPL', 'AMZN','FB', 'GOOG', 'MSFT', 'TSLA', 'TWTR'];
    }
}