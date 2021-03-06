import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from '../modules/app-routing.module';

import { AppComponent } from '../components/app.component';
import { InvoiceComponent } from '../components/invoice.component';
import { GoodsComponent } from '../components/goods.component';
import { InvoiceListComponent } from '../components/invoice-list.component';

@NgModule({
    declarations: [
        AppComponent, InvoiceComponent, GoodsComponent, InvoiceListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
