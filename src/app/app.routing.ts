import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StocksComponent} from './stocks.component';

import { DashboardComponent} from './dashboard/dashboard.component';
import { WeatherComponent} from './weather/weather.component';

const appRoutes: Routes = [
    
    {
    path: '',
    component: DashboardComponent
    },

    {
    path: 'weather',
    component: WeatherComponent
    },

    {
    path: 'stocks',
    component: StocksComponent
    }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);