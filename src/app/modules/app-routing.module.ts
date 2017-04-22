import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from '../components/app.component';
import { InvoiceComponent } from '../components/invoice.component';
import { GoodsComponent } from '../components/goods.component';
import { InvoiceListComponent } from '../components/invoice-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/goods', pathMatch: 'full' },
    { path: 'goods', component: GoodsComponent },
    { path: 'goods/:id', component: GoodsComponent },
    { path: 'invoices/create', component: InvoiceComponent },
    { path: 'invoices', component: InvoiceListComponent },
    { path: 'invoices/:id', component: InvoiceListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
