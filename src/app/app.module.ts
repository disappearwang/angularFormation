import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {MenuComponent} from "./menu/menu.component";
import {ProductComponent} from "./product-component/product-component.component";
import {ProductService} from "./product-component/pruduct-service.service";
import {CustomerService} from "./customer/customer-service.service";
import {SortTablePipe} from "./pipe/sort-table.pipe";
import {HttpClientModule} from "@angular/common/http";

const title: string = "Welcome to OUI.SNCF.COM";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService,
    CustomerService,
    SortTablePipe,
    {provide: 'title', useValue: title}],
  bootstrap: [AppComponent]
})
export class AppModule {

}
