import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PnfComponent } from './components/pnf/pnf.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent, title: 'Home'
    },
    {
        path:'**', component: PnfComponent, title: 'Page not found'
    }
];
